import { render } from "@testing-library/react";
import { vi, describe, it, expect, beforeEach, Mock } from "vitest";
import DynamicPage from "./page";
import directus from "@/lib/directus";

vi.mock("@/lib/directus", () => ({
  default: {
    request: vi.fn(),
  },
}));

describe("DynamicPage", () => {
  beforeEach(() => {
    vi.clearAllMocks(); 
  });

  it("should display the render the page correctly and correct posts data", async () => {
    const mockPosts = [
      {
        slug: "post-1",
        title: "Post 1",
        publish_date: "2024-12-01",
        author: { name: "Author 1" },
      },
      {
        slug: "post-2",
        title: "Post 2",
        publish_date: "2024-12-02",
        author: { name: "Author 2" },
      },
    ];
    (directus.request as Mock).mockResolvedValueOnce(mockPosts);

    const { findByTestId, getAllByTestId } = render(await DynamicPage());

    const blogTitle = findByTestId("blog-title");
    expect(blogTitle).toBeTruthy();

    const cards = getAllByTestId("card");
    console.log("card", cards.length);
    expect(cards).toHaveLength(mockPosts.length);
  });
});
