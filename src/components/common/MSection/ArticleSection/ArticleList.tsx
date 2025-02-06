import React from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/shadcn";

type Post = {
  id: number;
  title: string;
  contentHtml: string;
  image: string;
};

const posts: Post[] = [
  {
    id: 1,
    title: "文章标题 1",
    contentHtml: "<p>文章内容 1</p>",
    image:
      "https://haowallpaper.com/link/common/file/previewFileImg/15942630369381760",
  },
  {
    id: 2,
    title: "文章标题 2",
    contentHtml: "<p>文章内容 2</p>",
    image:
      "https://haowallpaper.com/link/common/file/previewFileImg/16054636696685952",
  },
  {
    id: 3,
    title: "文章标题 3",
    contentHtml: "<p>文章内容 3</p>",
    image:
      "https://haowallpaper.com/link/common/file/previewFileImg/15639151963443520",
  },
  // 添加更多文章数据
];

const ITEMS_PER_PAGE = 5;

const ArticleList: React.FC = () => {
  const paginatedPosts = posts.slice(0, ITEMS_PER_PAGE);

  const getPostSummary = (html: string) => {
    const tmp = document.createElement("div");
    tmp.innerHTML = html;
    const text = tmp.textContent || tmp.innerText || "";
    return text.slice(0, 100) + (text.length > 100 ? "..." : "");
  };

  return (
    <>
      <Card>
        <CardContent className="space-y-4 p-4">
          {paginatedPosts.map((post) => (
            <article
              key={post.id}
              className="group flex md:w-[100vh] md:h-[150px] overflow-hidden rounded-xl border hover:shadow-xl"
            >
              {/* 左侧图片 */}
              <div className="relative w-1/3 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                />
                <div className="duration-500 group-hover:opacity-80" />
              </div>

              {/* 右侧内容 */}
              <div className="h-full w-2/3 border-l">
                <div className="flex flex-col justify-center space-y-3 p-4 transition-transform duration-500 ease-out group-hover:translate-x-2 sm:p-5 md:p-6">
                  <h3 className="duration-500 ease-out md:text-xl">
                    {post.title}
                  </h3>
                  <p className="text-sm text-muted-foreground duration-500 ease-out group-hover:text-current">
                    {getPostSummary(post.contentHtml)}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </CardContent>
      </Card>
    </>
  );
};

export { ArticleList };
