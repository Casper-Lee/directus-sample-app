import directus from "@/lib/directus";
import { readItems } from "@directus/sdk";

async function getGlobals() {
  return directus.request(readItems("global"));
}

export default async function HomePage() {
  const global = await getGlobals();
  return (
    <div className="flex flex-col items-center">
      <div className="text-center mt-8">
        <h1 className="text-5xl">{global.title}</h1>
        <p className="text-xl	mt-4">{global.description}</p>
      </div>
    </div>
  );
}
