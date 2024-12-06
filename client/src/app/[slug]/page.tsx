import directus from "@/lib/directus";
import { readItem } from "@directus/sdk";

async function getPage(slug) {
  const page = await directus.request(readItem("pages", slug));
  return page;
}

export default async function DynamicPage({ params }) {
  const page = await getPage(params.slug);
  return (
    <div className="flex flex-col items-center mt-8">
      <div className="flex flex-col items-center w-3/5">
        <h1 className="text-5xl">{page.title}</h1>
        <div
          className="text-center mt-4"
          dangerouslySetInnerHTML={{ __html: page.content }}
        ></div>
      </div>
    </div>
  );
}
