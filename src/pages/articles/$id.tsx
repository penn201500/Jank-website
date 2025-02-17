import { useParams } from "umi";
import { useRequest } from "ahooks";
import { fetchOnePost } from "@/api/post";
import { decodeUtils } from "@/utils";
import parse from "html-react-parser";

export default function ArticleDetail() {
  const { id } = useParams<{ id: string }>();

  const {
    data: post,
    loading,
    error,
  } = useRequest(
    async () => {
      if (!id) {
        throw new Error("文章 ID 缺失");
      }

      const response = await fetchOnePost({ id: parseInt(id) });
      if (response && response.data) {
        const post = response.data;
        return {
          ...post,
          contentHtml: decodeUtils.decodeHtml(
            post.content_html || "文章内容为空！"
          ),
        };
      } else {
        throw new Error("文章未找到");
      }
    },
    {
      ready: !!id,
    }
  );

  if (loading) {
    return <div>加载中...</div>;
  }

  if (error) {
    return <div>{error.message}</div>;
  }

  if (!post?.contentHtml) {
    return <div>哇，这里好像很安静！也许你可以成为第一个留言的人。</div>;
  }

  return (
    <>
      <div className="prose dark:prose-dark px-4 duration-300">
        <h1>{post.title}</h1>

        <div className="max-w-none">{parse(post.contentHtml)}</div>
      </div>
    </>
  );
}
