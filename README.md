# HarperDB Next.js Application Component Template

Learn more about HarperDB Components [here](https://docs.harperdb.io/docs/developers/components/writing-extensions).

## Seeding the Database

To quickly populate your HarperDB instance with sample data, run the following command from your project root:

```sh
node seed.js
```

This will insert initial records into your database tables using the REST API.
Make sure your HarperDB server is running before executing this command.

## Real-Time Interface (SSE)

This app demonstrates two Harper interfaces:
- **REST:** All CRUD operations are available via RESTful API routes.
- **SSE (Server-Sent Events):** Real-time updates for new characters are streamed via a custom SSE endpoint at `/api/characters/stream`. The client listens for these events and displays them live.

> Note: HarperDB Community Edition does not support native WS/MQTT table change events, so a custom SSE endpoint is used to fulfill the real-time requirement.
