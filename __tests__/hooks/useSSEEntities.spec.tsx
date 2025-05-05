import { act, renderHook } from "@testing-library/react";
import { useSSEEntities } from "../../app/hooks/useSSEEntities";

class MockEventSource {
  url: string;
  onmessage: ((event: MessageEvent) => void) | null = null;
  onerror: ((event: Event) => void) | null = null;
  closed = false;
  constructor(url: string) {
    this.url = url;
    MockEventSource.instances.push(this);
  }
  close() {
    this.closed = true;
  }
  static instances: MockEventSource[] = [];
}

(global as any).EventSource = MockEventSource;

describe("useSSEEntities", () => {
  afterEach(() => {
    MockEventSource.instances.length = 0;
  });

  it("subscribes to the correct endpoint and updates entities on message", async () => {
    const { result } = renderHook(() => useSSEEntities("characters"));

    const mockData = [
      { id: "1", name: "Rick" },
      { id: "2", name: "Morty" },
    ];
    act(() => {
      MockEventSource.instances[0].onmessage!({
        data: JSON.stringify(mockData),
      } as MessageEvent);
    });

    expect(result.current).toEqual(mockData);
    expect(MockEventSource.instances[0].url).toBe("/api/characters/stream");
  });

  it("clears entities on invalid JSON", () => {
    const { result } = renderHook(() => useSSEEntities("episodes"));

    act(() => {
      MockEventSource.instances[0].onmessage!({
        data: "not-json",
      } as MessageEvent);
    });

    expect(result.current).toEqual([]);
  });

  it("closes EventSource on unmount", () => {
    const { unmount } = renderHook(() => useSSEEntities("locations"));
    const es = MockEventSource.instances[0];
    expect(es.closed).toBe(false);
    unmount();
    expect(es.closed).toBe(true);
  });
});