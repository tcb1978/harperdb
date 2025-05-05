import { render, screen } from "@testing-library/react";
import SSEEntityListener from "../../app/components/SSEEntityListener";

jest.mock("../../app/hooks/useSSEEntities", () => ({
  useSSEEntities: jest.fn(),
}));

const mockUseSSEEntities = require("../../app/hooks/useSSEEntities").useSSEEntities;

describe("SSEEntityListener", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("renders the live stream title and separator when entities exist", () => {
    mockUseSSEEntities.mockReturnValue([
      { id: "1", name: "Rick" },
      { id: "2", name: "Morty" },
    ]);

    render(<SSEEntityListener entityType="characters" title="Characters" />);

    expect(screen.getByTestId("sse-entity-listener-title")).toBeInTheDocument();
    expect(screen.getByTestId("sse-entity-listener-separator")).toBeInTheDocument();
    expect(screen.getByTestId("sse-entity-listener-json")).toBeInTheDocument();
    expect(screen.queryByText(/No favorite characters/i)).not.toBeInTheDocument();
  });

  it("renders the default title if no title prop is provided", () => {
    mockUseSSEEntities.mockReturnValue([{ id: "1", name: "Rick" }]);

    render(<SSEEntityListener entityType="episodes" />);

    expect(screen.getByTestId("sse-entity-listener-title")).toHaveTextContent(
      "Live Episodes Stream (SSE)"
    );
  });

  it("shows the empty message when there are no entities", () => {
    mockUseSSEEntities.mockReturnValue([]);

    render(<SSEEntityListener entityType="locations" title="Locations" />);

    expect(screen.getByTestId("sse-entity-listener-json")).toHaveTextContent(
      "No favorite locations"
    );
    expect(
      screen.queryByTestId("sse-entity-listener-title")
    ).not.toBeInTheDocument();
  });
});