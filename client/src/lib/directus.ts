import { createDirectus, rest } from "@directus/sdk";

const directus = createDirectus(
  process.env.API_URL ? process.env.API_URL : "http://0.0.0.0:8055/"
).with(rest());

export default directus;
