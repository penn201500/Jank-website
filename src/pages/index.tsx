import { ArticleList, AnnounceSection, AvatarCard } from "@/components/common";

export default function Home() {
  return (
    <>
      <div className="flex gap-4">
        <AnnounceSection />
      </div>

      <div className="flex space-y-4 space-x-4">
        <div className="space-y-4 mt-4">
          <AvatarCard
            avatarUrl="https://haowallpaper.com/link/common/file/previewFileImg/16251585154829696"
            name="Fender"
            title="Software Engineer"
            backDetails={["背景介绍 1", "背景介绍 2", "背景介绍 3"]}
            socials={[
              {
                name: "GitHub",
                icon: "https://img.favpng.com/1/2/4/computer-icons-github-logo-png-favpng-eYx3PthtYwzTtJSadAXH8HJA9.jpg",
                url: "https://github.com",
              },
              {
                name: "Twitter",
                icon: "https://www.liblogo.com/img-logo/qq8338t42d-qq-logo-tencent-qq-logo-icon-in-coreui-brands.png",
                url: "https://twitter.com",
              },
            ]}
          />
        </div>

        <div className="w-full">
          <ArticleList />
        </div>
      </div>
    </>
  );
}
