export async function GET() {
  const encoder = new TextEncoder();
  let interval: NodeJS.Timeout;
  let closed = false;

  const stream = new ReadableStream({
    async start(controller) {
      interval = setInterval(async () => {
        if (closed) return;
        try {
          const res = await fetch("http://localhost:3000/api/favorites/characters");
          const data = await res.json();
          const characters = data.data || data || [];
          controller.enqueue(encoder.encode(`data: ${JSON.stringify(characters)}\n\n`));
        } catch (err) {
          closed = true;
          clearInterval(interval);
          controller.error(err);
        }
      }, 1000);
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