import { NextResponse } from "next/server";

const HDB_URL = process.env.HARPERDB_URL;
const HDB_AUTH = process.env.HARPERDB_AUTH;

export async function POST(req) {
  const { refId, name } = await req.json();
  const res = await fetch(HDB_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      // Authorization: HDB_AUTH,
    },
    body: JSON.stringify({
      operation: "insert",
      schema: "data",
      table: "Favorite",
      records: [
        {
          id: `episode-${refId}`,
          type: "episode",
          refId,
          name,
          created: new Date().toISOString(),
        },
      ],
    }),
  });
  const data = await res.json();
  return NextResponse.json(data);
}

export async function GET(req) {
  const res = await fetch(HDB_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      // Authorization: HDB_AUTH,
    },
    body: JSON.stringify({
      operation: "sql",
      sql: `SELECT * FROM data.Favorite WHERE type = 'episode'`,
    }),
  });
  const data = await res.json();
  return NextResponse.json(data);
}

export async function DELETE(req) {
  const { refId } = await req.json();
  const res = await fetch(HDB_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      // Authorization: HDB_AUTH,
    },
    body: JSON.stringify({
      operation: "delete",
      schema: "data",
      table: "Favorite",
      hash_values: [`episode-${refId}`],
    }),
  });
  const data = await res.json();
  return NextResponse.json(data);
}
