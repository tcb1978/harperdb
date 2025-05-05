import { NextRequest } from "next/server";

export async function GET(req: NextRequest, { params }: { params: { entity: string } }) {
  const encoder = new TextEncoder();
  let interval: NodeJS.Timeout;
  let closed = false;
  const entity = params.entity;

  const stream = new ReadableStream({
    async start(controller) {
      interval = setInterval(async () => {
        if (closed) return;
        try {
          const res = await fetch(`http://localhost:3000/api/favorites/${entity}`);
          const data = await res.json();
          const items = data.data || data || [];
          controller.enqueue(encoder.encode(`data: ${JSON.stringify(items)}\n\n`));
        } catch (err) {
          closed = true;
          clearInterval(interval);
          controller.error(err);
        }
      }, 500);
    },
    cancel() {
      closed = true;
      clearInterval(interval);
    }
  });

  return new Response(stream, {
    headers: {
      "Content-Type": "text/event-stream",
      "Cache-Control": "no-cache",
      Connection: "keep-alive",
    },
  });
}