import Card from "@/components/card/card";
import directus from "@/lib/directus";
import { readItems } from "@directus/sdk";

async function getPosts() {
  return directus.request(
    readItems("posts", {
      fields: ["slug", "title", "publish_date", { author: ["name"] }],
      sort: ["-publish_date"],
    })
  );
}

export default async function DynamicPage() {
  const posts = await getPosts();

  console.log(posts.length)
  return (
    <div className="flex flex-col items-center mt-8">
      <h1 data-testId="blog-title" className="text-5xl">
        Blog
      </h1>

      <div className="flex">
        {posts.map((post) => {
          return (
            <Card
              key={post.slug}
              authorName={post.author.name}
              slug={post.slug}
              publishDate={post.publish_date}
              title={post.title}
            />
          );
        })}
      </div>
    </div>
  );
}
