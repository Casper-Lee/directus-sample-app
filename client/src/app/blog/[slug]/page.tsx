import directus from "@/lib/directus";
import { readItem } from "@directus/sdk";
import Image from "next/image";
import { notFound } from "next/navigation";

async function getPost(slug) {
  try {
    const post = await directus.request(
      readItem("posts", slug, {
        fields: ["*", { image: ["filename_disk"], author: ["name"] }],
      })
    );

    return post;
  } catch (error) {
    console.error(error);
    notFound();
  }
}

export default async function DynamicPage({ params }) {
  const post = await getPost(params.slug);
  return (
    <div className="flex flex-col items-center mt-8">
      <Image
        src={`${directus.url}assets/${post.image.filename_disk}`}
        width={600}
        height={400}
        alt=""
      />
      <h1>{post.title}</h1>
      <div className="w-3/6 text-center" dangerouslySetInnerHTML={{ __html: post.content }}></div>
    </div>
  );
}
