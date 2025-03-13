"use client";
import { Card, CardContent, Button } from "@/components/ui/shadcn";
import {
  ArrowRight,
  Code,
  Database,
  Globe,
  Shield,
  Github,
} from "lucide-react";

export default function Home() {
  const features = [
    {
      icon: <Globe className="h-6 w-6 text-primary" />,
      title: "极简设计",
      description:
        "基于 Go 语言和 Echo 框架，设计理念强调极简、低耦合、高扩展。",
    },
    {
      icon: <Shield className="h-6 w-6 text-primary" />,
      title: "高扩展性",
      description: "灵活的架构和易于扩展的功能设计，支持快速定制和功能拓展。",
    },
    {
      icon: <Code className="h-6 w-6 text-primary" />,
      title: "高性能",
      description: "采用 Go 语言开发，支持高并发，确保博客运行流畅。",
    },
    {
      icon: <Database className="h-6 w-6 text-primary" />,
      title: "安全可靠",
      description:
        "结合 JWT 身份验证和 PostgreSQL、Redis 数据存储方案，保证数据安全。",
    },
  ];

  const techStack = [
    { label: "Go", value: "编程语言" },
    { label: "Echo", value: "Web 框架" },
    { label: "PostgreSQL", value: "数据库" },
    { label: "Redis", value: "缓存解决方案" },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="pt-16 pb-20 md:pt-24 md:pb-28">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8">
              <div className="w-full md:w-2/5 space-y-5">
                <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
                  轻量级博客系统
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
                  简约而强大的
                  <span className="text-primary"> Go </span>
                  博客框架
                </h1>
                <p className="text-lg text-muted-foreground">
                  Jank 是一个极简、低耦合、高扩展的博客系统，使用 Go
                  语言开发，采用 Echo 框架，兼容现代技术栈。
                </p>
                <div className="flex flex-wrap gap-4 pt-2">
                  <Button
                    size="lg"
                    className="rounded-full px-6 transition-transform duration-300 hover:translate-y-[-2px]"
                  >
                    快速开始
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    className="rounded-full px-6 transition-transform duration-300 hover:translate-y-[-2px]"
                    onClick={() =>
                      window.open("https://github.com/Done-0/Jank", "_blank")
                    }
                  >
                    <Github className="mr-2 h-4 w-4" />
                    GitHub
                  </Button>
                </div>
              </div>
              <div className="w-full md:w-3/5 relative">
                <div className="absolute inset-0 bg-gradient-radial from-primary/20 to-transparent opacity-60 rounded-full blur-3xl -z-10"></div>
                <div className="rounded-2xl overflow-hidden">
                  <img
                    src="/images/home-black.png"
                    alt="Jank 博客系统预览"
                    className="w-full h-auto rounded-2xl transition-transform duration-300 hover:scale-[1.02]"
                    style={{ maxHeight: '600px' }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 md:py-24 bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-3">
              为什么选择 Jank
            </h2>
            <p className="text-muted-foreground">
              专为开发者设计的现代博客系统，提供卓越的性能和扩展性
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="border-border/30 bg-background transition-all duration-300 hover:border-primary/20 hover:shadow-sm hover:translate-y-[-4px]"
              >
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section id="tech" className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-3">现代技术栈</h2>
            <p className="text-muted-foreground">
              采用高效可靠的技术，打造稳定高性能的博客系统
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {techStack.map((tech, index) => (
              <div
                key={index}
                className="text-center p-5 rounded-xl transition-colors duration-300 hover:bg-muted/20"
              >
                <div className="text-2xl font-bold text-primary mb-2">
                  {tech.label}
                </div>
                <div className="text-muted-foreground">{tech.value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              准备好开始您的博客项目了吗？
            </h2>
            <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
              使用 Jank
              博客系统，快速搭建轻量级且高效的博客平台。开源、免费，为您的创作提供最佳体验。
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                size="lg"
                className="rounded-full px-8 transition-transform duration-300 hover:translate-y-[-2px]"
                onClick={() =>
                  window.open("https://github.com/Done-0/Jank", "_blank")
                }
              >
                立即开始
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="rounded-full px-8 transition-transform duration-300 hover:translate-y-[-2px]"
                onClick={() => window.location.href = "/posts"}
              >
                查看文档
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 border-t border-border/30">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                <span className="text-primary font-bold">J</span>
              </div>
              <span className="font-medium">Jank</span>
            </div>
            <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
              <a
                href="#features"
                className="text-sm text-muted-foreground hover:text-foreground"
              >
                特性
              </a>
              <a
                href="#tech"
                className="text-sm text-muted-foreground hover:text-foreground"
              >
                技术栈
              </a>
              <a
                href="#docs"
                className="text-sm text-muted-foreground hover:text-foreground"
              >
                文档
              </a>
              <a
                href="https://github.com/Done-0/Jank"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted-foreground hover:text-foreground"
              >
                GitHub
              </a>
            </div>
          </div>
          <div className="mt-6 pt-6 border-t border-border/20 text-center text-sm text-muted-foreground">
            <p>© {new Date().getFullYear()} Jank. 基于 MIT 许可证开源。</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
