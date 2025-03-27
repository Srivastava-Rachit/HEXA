"use client";

import { IconCloud } from "./magicui/icon-cloud";

const slugs = [
  "typescript",
  "javascript",
  "dart",
  "java",
  "react",
  "flutter",
  "android",
  "html5",
  "css3",
  "nodedotjs",
  "express",
  "nextdotjs",
  "prisma",
  "amazonaws",
  "postgresql",
  "firebase",
  "nginx",
  "vercel",
  "testinglibrary",
  "jest",
  "cypress",
  "docker",
  "git",
  "jira",
  "github",
  "gitlab",
  "visualstudiocode",
  "androidstudio",
  "sonarqube",
  "figma",
];

export default function IconCloudDemo() {
  const images = slugs.map((slug) => `https://cdn.simpleicons.org/${slug}/${slug}`);

  return (
    <div className="relative flex w-full items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="relative flex size-full h-[300px] w-full max-w-4xl items-center justify-center overflow-hidden rounded-lg md:h-[400px] lg:h-[600px] xl:h-[700px]">
        <IconCloud 
          images={images}
          iconSize={70}
          radius={150}
          cloudRadius={100}
          className="scale-[0.8] sm:scale-[0.9] md:scale-100"
          responsiveConfig={{
            iconSize: {
              initial: 50,
              sm: 60,
              md: 70,
              lg: 80
            },
            radius: {
              initial: 120,
              sm: 140,
              md: 160,
              lg: 180
            },
            cloudRadius: {
              initial: 80,
              sm: 90,
              md: 100,
              lg: 110
            }
          }}
        />
      </div>
    </div>
  );
}