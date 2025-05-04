import { NextResponse } from "next/server";

const HDB_URL = process.env.HARPERDB_URL as string;
const HDB_AUTH = process.env.HARPERDB_AUTH as string;

export const createFavoriteHandlers = (type: "character" | "location" | "episode") => {
  return {
    async POST(req: Request) {
      const { refId, name }: { refId: string; name: string } = await req.json();
      const res = await fetch(HDB_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          // "Authorization": HDB_AUTH,
        },
        body: JSON.stringify({
          operation: "insert",
          schema: "data",
          table: "Favorite",
          records: [
            {
              id: `${type}-${refId}`,
              type,
              refId,
              name,
              created: new Date().toISOString(),
            },
          ],
        }),
      });
      const data = await res.json();
      return NextResponse.json(data);
    },

    async GET(_req: Request) {
      const res = await fetch(HDB_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          // "Authorization": HDB_AUTH,
        },
        body: JSON.stringify({
          operation: "sql",
          sql: `SELECT * FROM data.Favorite WHERE type = '${type}'`,
        }),
      });
      const data = await res.json();
      return NextResponse.json(data);
    },

    async DELETE(req: Request) {
      const { refId }: { refId: string } = await req.json();
      const res = await fetch(HDB_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          // "Authorization": HDB_AUTH,
        },
        body: JSON.stringify({
          operation: "delete",
          schema: "data",
          table: "Favorite",
          hash_values: [`${type}-${refId}`],
        }),
      });
      const data = await res.json();
      return NextResponse.json(data);
    },
  };
}