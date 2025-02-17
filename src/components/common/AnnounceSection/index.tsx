import { FC } from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/components/ui/shadcn";
import { Link } from "umi";
import type { HttpResponse, Post } from "@/types";

interface AnnounceSectionProps {
  hotPost: HttpResponse<Post>;
  recommendPost: HttpResponse<Post>;
}

const AnnounceSection: FC<AnnounceSectionProps> = ({
  hotPost,
  recommendPost,
}) => {
  const stylesConfig = {
    textShadow: {
      default: 0.4,
    },
    getBgStyle: (image: string | null) =>
      image
        ? {
            backgroundImage: `url(${image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }
        : {},
    getTextShadowStyle: (brightness: number) => ({
      textShadow: `0 0 5px rgba(255, 255, 255, ${brightness})`,
    }),
  };

  return (
    <>
      <div className="flex min-h-[20vh] md:min-h-[22vh] gap-2 px-4 md:px-0">
        {/* 左侧热门内容 */}
        <Card
          className="w-1/2 rounded-2xl border"
          style={stylesConfig.getBgStyle(hotPost.data?.image || null)}
        >
          <CardHeader>
            <CardTitle
              className="md:text-2xl text-white"
              style={stylesConfig.getTextShadowStyle(
                stylesConfig.textShadow.default
              )}
            >
              热门内容
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul>
              {hotPost.data && (
                <li key={hotPost.data.id}>
                  <Link
                    to="/post/getOnePost"
                    className="text-xs transition-colors"
                  >
                    {hotPost.data.title}
                  </Link>
                </li>
              )}
            </ul>
          </CardContent>
        </Card>

        {/* 右侧推荐内容 */}
        <Card
          className="w-1/2 rounded-2xl border"
          style={stylesConfig.getBgStyle(recommendPost.data?.image || null)}
        >
          <CardHeader>
            <CardTitle
              className="md:text-2xl text-white"
              style={stylesConfig.getTextShadowStyle(
                stylesConfig.textShadow.default
              )}
            >
              推荐内容
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul>
              {recommendPost.data && (
                <li key={recommendPost.data.id}>
                  <Link
                    to="/post/getOnePost"
                    className="text-xs transition-colors"
                  >
                    {recommendPost.data.title}
                  </Link>
                </li>
              )}
            </ul>
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export { AnnounceSection };
