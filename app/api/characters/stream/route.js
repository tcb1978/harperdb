export async function GET() {
  const encoder = new TextEncoder();
  // let lastCount = 0;

  const stream = new ReadableStream({
    async start(controller) {
      setInterval(async () => {
        const res = await fetch(
          "http://localhost:3000/api/favorites/characters",
        );
        const data = await res.json();
        const characters = data.data || data || [];
        // if (characters.length > lastCount) {
        //   const newCharacter = characters[0];
        //   controller.enqueue(
        //     encoder.encode(`data: ${JSON.stringify(newCharacter)}\n\n`),
        //   );
        //   lastCount = characters.length;
        // }
        controller.enqueue(
          encoder.encode(`data: ${JSON.stringify(characters)}\n\n`),
        );
      }, 1000);
    },
  });

  return new Response(stream, {
    headers: {
      "Content-Type": "text/event-stream",
      "Cache-Control": "no-cache",
      Connection: "keep-alive",
    },
  });
}
