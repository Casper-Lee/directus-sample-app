import directus from "@/lib/directus";
import { readItems } from "@directus/sdk";
import Image from "next/image";

async function getGlobals() {
  try {
    const global = directus.request(readItems("global"));
    return global;
  } catch (error) {
    console.log(error);
  }
}

export default async function HomePage() {
  const timestamp = Date.now();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const global: any = await getGlobals();

  return (
    <div className="flex flex-col items-center">
      <div className="text-center mt-8">
        <Image
          src={`${directus.url}assets/${global.images}?v=${timestamp}`}
          width={1500}
          height={400}
          alt=""
        />
        <h1 className="text-5xl">{global.title}</h1>
        <p className="text-xl	mt-4">{global.description}</p>
      </div>
    </div>
  );
}
