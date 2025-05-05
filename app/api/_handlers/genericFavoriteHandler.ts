import { NextResponse } from "next/server";
import { HEADERS } from "../../constants";

const HDB_URL = process.env.HARPERDB_URL as string;
const HDB_AUTH = process.env.HARPERDB_AUTH as string;
const headers = HEADERS;


// If this had diverse logic, I would not use a single functio for this. I would create a separate file for each type of favorite.
export const genericFavoriteHandler = (type: "character" | "location" | "episode") => {
  return {
    async POST(req: Request) {
      try {
        const { refId, name }: { refId: string; name: string } = await req.json();
        const res = await fetch(HDB_URL, {
          method: "POST",
          headers,
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
      } catch (error) {
        return NextResponse.json({ error: "Failed to add favorite." }, { status: 500 });
      }
    },

    async GET(_req: Request) {
      const res = await fetch(HDB_URL, {
        method: "POST",
        headers,
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
        headers,
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