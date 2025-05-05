# HarperDB Next.js Application Challenge

Hi! I built this project to demonstrate how I use HarperDB with Next.js to integrate external data sources, create real-time interfaces, and implement custom endpoints. My goal was to showcase HarperDB’s flexibility and value in a modern full-stack workflow.

---

## Challenge Requirements & My Solution

**Here’s what I did:**
- I used the [Rick & Morty API](https://rickandmortyapi.com/) as an external data source, because it's fun to use.
- I defined a GraphQL schema for the `characters` table in HarperDB.
- I implemented a custom Harper Resource endpoint that merges local character data with live data from the Rick & Morty API.
- /app/api/characters
- /app/api/locations
- /app/api/episodes
- I demonstrated both REST and SSE (Server-Sent Events) interfaces.
- I built a real-time UI using SSE for live updates.

---

## Getting Started

### 1. **Install Dependencies**

node v20.19.1
nvm 0.39.3
npm 11.3.0

```sh
npm install
```

After installing you will notice 4 npm vularabilities. 3 high and 1 moderate. I investigated and found them to be related to dependencies of harperdb so I opted not to try to fix.

### 2. **Configure HarperDB**

Make sure you have a running HarperDB instance, and update your HarperDB connection settings in `.env` or the relevant config file.

### 3. **Seed the Database**

To populate the HarperDB tables with sample data, run:

```sh
node seed.js
```

### 4. **Run the Application**

```sh
npm run dev
```

Or
```sh
docker-compose up --build
npm run docker:build
npm run docker:run
```

The app expects a .env file with your HarperDB connection details.

stop running docker-compose with `docker-compose down`

Then open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🛠️ My Custom Harper Resource Endpoint

I created a custom endpoint that:
- Fetches local character data from HarperDB.
- Fetches external data from the Rick & Morty API.
- Combines and returns a unified response.

You’ll find this logic in the custom API routes under `/api/characters`, `/api/locations`, and `/api/episodes`, where I merge local HarperDB data with external data from the Rick & Morty API.

This approach lets HarperDB act as a flexible data orchestration layer, merging internal and external sources in a single API.

---

## Harper Resource Class (`resources.ts`)

The core logic for combining local HarperDB data with external data from the Rick & Morty API is implemented in my Harper Resource class, which you’ll find at:

---

## 🌐 Interfaces I Demonstrated

- **REST:** Standard CRUD operations via `/api/characters`, `/api/locations`, etc.
- **SSE (Server-Sent Events):** Real-time updates streamed from `/api/[entity]/stream` (where `[entity]` is `characters`, `locations`, or `episodes`).
  I implemented this as a dynamic API route in `/app/api/[entity]/stream/route.ts`.
  The route receives the `entity` parameter from the URL, fetches data from my local API endpoint at `/api/favorites/${entity}`, and streams the combined data to the client in real time using SSE.

> **Note:** Since HarperDB Community Edition doesn’t support native WS/MQTT table change events, I used SSE (Server-Sent Events) for real-time updates.

---

**Matthew Eldredge**
[mattheweldredge@gmail.com](mailto:mattheweldredge@gmail.com)
(323) 841-5672
