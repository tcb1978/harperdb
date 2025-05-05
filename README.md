# HarperDB Next.js Application Challenge

This project is a demonstration of a HarperDB-powered Next.js application that integrates external data sources, real-time interfaces, and custom endpoints. It is designed to showcase HarperDB’s flexibility and value in modern full-stack development.

---

## 📚 Challenge Requirements & Solution Overview

**Challenge Requirements:**
- **GraphQL Schema:** Defines at least one HarperDB table.
- **Custom Harper Resource Endpoint:** Combines local HarperDB data with an external API.
- **Multiple Harper Interfaces:** Demonstrates at least two (REST, SSE, MQTT, or WS).
- **External Data Source:** Integrates with a public API (e.g., Rick & Morty API, OpenWeather, NASA, etc.).

**This Solution:**
- Uses the [Rick & Morty API](https://rickandmortyapi.com/) as an external data source.
- Defines a GraphQL schema for the `characters` table in HarperDB.
- Implements a custom Harper Resource endpoint that merges local character data with live data from the Rick & Morty API.
- Demonstrates both REST and SSE (Server-Sent Events) interfaces.
- Provides a real-time UI using SSE for live updates.

---



## 🚀 Getting Started

### 1. **Install Dependencies**

```sh
npm install
```

### 2. **Configure HarperDB**

- Ensure you have a running HarperDB instance.
- Update your HarperDB connection settings in `.env` or the relevant config file.

### 3. **Seed the Database**

Populate your HarperDB tables with sample data:

```sh
node seed.js
```

### 4. **Run the Application**

```sh
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🔗 External Data Source

This app fetches character data from the [Rick & Morty API](https://rickandmortyapi.com/), combining it with local HarperDB data for a richer experience.

---

## 🗄️ GraphQL Schema Example

The following schema is defined for the `characters` table:

```graphql
type Character {
  id: ID!
  name: String!
  status: String
  species: String
  type: String
  gender: String
  origin: String
  location: String
  image: String
  created: String
}
```

---

## 🛠️ Custom Harper Resource Endpoint

A custom endpoint is implemented to:
- Fetch local character data from HarperDB.
- Fetch external data from the Rick & Morty API.
- Combine and return a unified response.

You can find this logic in the custom API route(s) under `/api/characters`, `/api/locations`, and `/api/episodes`, where local HarperDB data is merged with external data from the Rick & Morty API.

This file defines custom endpoints that:
- Query local tables (e.g., `characters`, `locations`, `episodes`) via GraphQL.
- Fetch and merge data from the external Rick & Morty API.
- Expose these combined results through RESTful endpoints, fulfilling the requirement for a custom Harper Resource endpoint.

This approach demonstrates how HarperDB can act as a flexible data orchestration layer, merging internal and external sources in a single API.

---

## 🛠️ Harper Resource Class (`resources.ts`)

The core logic for combining local HarperDB data with external data from the Rick & Morty API is implemented in the Harper Resource class, located at:

---

## 🌐 Interfaces Demonstrated

- **REST:** Standard CRUD operations via `/api/characters`, `/api/locations`, etc.
- **SSE (Server-Sent Events):** Real-time updates streamed from `/api/[entity]/stream` (where `[entity]` is `characters`, `locations`, or `episodes`).
  This is implemented as a dynamic API route in `/app/api/[entity]/stream/route.ts`.
  The route receives the `entity` parameter from the URL, fetches data from your local API endpoint at `/api/favorites/${entity}`, and streams the combined data to the client in real time using SSE.

> **Note:** HarperDB Community Edition does not support native WS/MQTT table change events, so SSE is used for real-time updates.

---

## ✅ Summary Table

| Requirement                                                                 | Addressed? | Section(s)                                                                                   |
|------------------------------------------------------------------------------|------------|---------------------------------------------------------------------------------------------|
| GraphQL schema for at least 1 Harper table                                   | ✅         | 🗄️ GraphQL Schema Example, [`/schema.graphql`](./schema.graphql)                            |
| Harper Resource class with at least 1 custom endpoint                        | ✅         | 🛠️ Harper Resource Class (`resources.ts`), 🛠️ Custom Harper Resource Endpoint               |
| Custom endpoint combines local and external data                             | ✅         | 🛠️ Custom Harper Resource Endpoint, 🛠️ Harper Resource Class (`resources.ts`)               |
| At least 2 Harper interfaces (REST, MQTT, WS, SSE)                           | ✅         | 🌐 Interfaces Demonstrated (REST and SSE)                                                   |

---

## 🧑‍💻 Application Structure

- **/app**: Next.js App Router pages and components.
- **/api**: Custom API routes for REST and SSE.
- **/components**: Reusable UI and logic components.
- **/seed.js**: Script to seed the database with initial data.

---

## 📝 Reviewer Notes

### **Design & Development Process**
- Focused on modularity, reusability, and clear separation of concerns.
- Used Next.js App Router for modern React patterns and SSR/SSG support.
- Leveraged HarperDB’s flexibility to combine local and external data seamlessly.

### **Deployment**
- Can be deployed to any Node.js-compatible environment.
- For multi-instance deployment, use Docker or cloud orchestration tools.
- Ensure HarperDB is accessible from all app instances.

### **Performance & Testing**
- Use HarperDB’s built-in monitoring for query performance.
- Additional integration and unit tests for API endpoints and UI components would be beneficial.
- Validate SSE performance under concurrent connections.

---

### **Testing Approach**

- **Unit & Integration Testing:**
  I would use [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/) and [Jest](https://jestjs.io/) for component and logic unit tests, ensuring UI and business logic correctness.

- **End-to-End Automation:**
  For E2E and automation, I recommend [Playwright](https://playwright.dev/) for its speed, reliability, and modern API.
  (Cypress is also a strong choice, but Playwright offers broader browser support and parallelization out of the box.)

---

## 👤 Author & Contact

**Matthew Eldredge**
📧 [mattheweldredge@gmail.com](mailto:mattheweldredge@gmail.com)
📱 (323) 841-5672

---

## 📖 Further Reading

- [HarperDB Docs](https://docs.harperdb.io/)
- [Next.js Docs](https://nextjs.org/docs)
- [Rick & Morty API](https://rickandmortyapi.com/)

---

**Thank you for reviewing this challenge! Please reach out with any questions or for a walkthrough of the code and design decisions.**
