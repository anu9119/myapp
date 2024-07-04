import Carousel from "@/components/parts/carousel";
import * as Tabs from "@radix-ui/react-tabs";
import IconCloud from "@/components/magicui/icon-cloud";

import { TimelinePart } from "@/components/parts/timeline-part";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Dock, DockIcon, Icons } from "@/components/magicui/dock";
import { Medal, Trophy } from "lucide-react";
import { Separator } from "../ui/separator";

export default function AboutSection() {
  const slugs = [
    "typescript",
    "javascript",
    "spark",
    "java",
    "scala",
    "react",
    "python",
    "prisma",
    "amazonaws",
    "ovh",
    "postgresql",
    "mysql",
    "nginx",
    "vercel",
    "nestjs",
    "docker",
    "git",
    "github",
    "gitlab",
    "visualstudiocode",
  ];

  return (
    <section id="about"  >
      <div className="container mt-10">
        <div className="space-y-4  lg:space-y-0 flex flex-col lg:flex-row">
          <div className="w-full lg:w-3/5 lg:mr-20">
            <Carousel />
          </div>

          <div className="w-full lg:w-2/5 lg:max-h-fit">
            <h2 className="scroll-m-20 text-4xl font-extrabold mb-4">
              About Me
            </h2>
            <p className="leading-7 [&:not(:first-child)]:mt-6 mb-4">
              I am a data/AI backend engineer with a passion for creating
              products on specified business expertise. I use AI to
              industrialize expertises and increase the impacts. I have
              experience working with python, and typescript to build backend
              microservices platforms. I am a quick learner and I love learning
              and developing my skills in new technologies.
            </p>
            <Tabs.Root
              defaultValue="experience"
              orientation="vertical"
              className=""
            >
              <Tabs.List
                aria-label="tabs example"
                className="grid w-full grid-cols-3 h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground"
              >
                <Tabs.Trigger
                  value="experience"
                  className="whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm"
                >
                  Experiences
                </Tabs.Trigger>
                <Tabs.Trigger
                  value="skills"
                  className="whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm"
                >
                  Skills
                </Tabs.Trigger>
                <Tabs.Trigger
                  value="athletic"
                  className="whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm"
                >
                  Athletic
                </Tabs.Trigger>
              </Tabs.List>
              <Tabs.Content value="experience">
                <div className="w-full mt-4 hidden lg:block">
                  <ScrollArea className="h-[450px] lg:w-[100%] rounded-md border p-4">
                    <TimelinePart></TimelinePart>
                  </ScrollArea>
                </div>
                <div className="w-full mt-4 lg:hidden">
                  <TimelinePart></TimelinePart>
                </div>
              </Tabs.Content>
              <Tabs.Content value="skills">
                <div className="w-full  text-center">
                  <div className="mt-4  max-w-full lg:max-w-full px-20 ">
                    <IconCloud iconSlugs={slugs} />
                  </div>
                </div>
              </Tabs.Content>
              <Tabs.Content value="athletic">
                <div className="relative">
                  <div className="z-11">
                    <p className="[&:not(:first-child)]:mt-6 mt-4">
                      As a former high-performance swimmer, I dedicated three
                      remarkable years to the high level sporting center of Font
                      Romeu, proudly representing the colors of Club Canet 66
                      Natation. My sporting highlights include:
                    </p>
                    <Separator className="mt-4" />
                    <br />
                    <div className="relative flex w-full lg:max-w-[32rem] flex-col items-center justify-startoverflow-hidden">
                      <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-8xl font-semibold leading-none text-transparent dark:from-primary dark:to-primary-foreground">
                        Rankings
                      </span>
                      <Dock>
                        <DockIcon
                          text="Young French Champion of the 400m Individual Medley -
                          Short course (2018)"
                          delay={700}
                        >
                          <Trophy color="#ffd700" className="h-6 w-6" />
                        </DockIcon>
                        <DockIcon
                          text="Young vice-Champion of France of the 200m Butterfly -
                          Short course (2018"
                          delay={700}
                        >
                          <Trophy className="h-6 w-6 text-gray-800 dark:text-gray-400" />
                        </DockIcon>
                        <DockIcon
                          text=" Young vice-Champion of France of the 200m Butterfly -
                          Long Course (2017)"
                          delay={700}
                        >
                          <Trophy className="h-6 w-6 text-gray-800 dark:text-gray-400" />
                        </DockIcon>
                        <DockIcon
                          text="2017 Team vice-Champion of France of the 200m Butterfly - (Interclub)"
                          delay={700}
                        >
                          <Trophy className="h-6 w-6 text-gray-800 dark:text-gray-400" />
                        </DockIcon>
                      </Dock>
                    </div>
                  </div>
                </div>
              </Tabs.Content>
            </Tabs.Root>
          </div>
        </div>
      </div>
    </section>
  );
}
