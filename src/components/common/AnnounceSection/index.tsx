import { useState } from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/components/ui/shadcn";
import { Link } from "umi";
import { FC } from "react";

const AnnounceSection: FC = () => {
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

  const [hotPost] = useState({
    id: 1,
    title: "热门文章1",
    image:
      "https://haowallpaper.com/link/common/file/previewFileImg/15724523661332800",
  });

  const [recommendPost] = useState({
    id: 2,
    title: "推荐文章2",
    image:
      "https://haowallpaper.com/link/common/file/previewFileImg/15562128596308288",
  });

  return (
    <>
      {/* 左侧热门内容 */}
      <Card
        className="w-1/2 min-h-[250px] rounded-2xl border"
        style={stylesConfig.getBgStyle(hotPost.image)}
      >
        <CardHeader className="py-4">
          <CardTitle
            className="text-2xl text-white"
            style={stylesConfig.getTextShadowStyle(
              stylesConfig.textShadow.default
            )}
          >
            热门内容
          </CardTitle>
        </CardHeader>
        <CardContent className="p-6">
          <ul className="space-y-2">
            {hotPost && (
              <li key={hotPost.id}>
                <Link
                  to="/post/getOnePost"
                  className="text-sm hover:text-primary transition-colors"
                >
                  {hotPost.title}
                </Link>
              </li>
            )}
          </ul>
        </CardContent>
      </Card>

      {/* 右侧推荐内容 */}
      <Card
        className="w-1/2 min-h-[250px] rounded-2xl border"
        style={stylesConfig.getBgStyle(recommendPost.image)}
      >
        <CardHeader className="py-4">
          <CardTitle
            className="text-2xl text-white"
            style={stylesConfig.getTextShadowStyle(
              stylesConfig.textShadow.default
            )}
          >
            推荐内容
          </CardTitle>
        </CardHeader>
        <CardContent className="p-6">
          <ul className="space-y-2">
            {recommendPost && (
              <li key={recommendPost.id}>
                <Link
                  to="/post/getOnePost"
                  className="text-sm hover:text-primary transition-colors"
                >
                  {recommendPost.title}
                </Link>
              </li>
            )}
          </ul>
        </CardContent>
      </Card>
    </>
  );
};

export { AnnounceSection };
