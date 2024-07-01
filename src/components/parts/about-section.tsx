import Carousel from "@/components/parts/carousel";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import IconCloud from "@/components/magicui/icon-cloud";
import {
  Timeline,
  TimelineContent,
  TimelineDot,
  TimelineHeading,
  TimelineItem,
  TimelineLine,
} from "../ui/timeline";
import { TimelinePart } from "./timeline-part";

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
    <section id="about">
      <div className="container mt-10">
        <div className="space-y-4  sm:space-y-0 flex flex-col sm:flex-row">
          <div className="w-full sm:w-3/5 sm:mr-20">
            <Carousel />
          </div>

          <div className="w-full sm:w-3/5 sm:max-h-fit">
            <h2 className="scroll-m-20 text-4xl font-extrabold mb-4">
              About Me
            </h2>
            <p className="leading-7 [&:not(:first-child)]:mt-6">
              I am a data/AI backend engineer with a passion for creating
              products on specified business expertise. I use AI to
              industrialize expertises and increase the impacts. I have
              experience working with python, and typescript to build backend
              microservices platforms. I am a quick learner and I love learning
              and developing my skills in new technologies.
            </p>
            <Tabs defaultValue="education" className="w-full mt-2">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="education">Experiences</TabsTrigger>
                <TabsTrigger value="skills">Skills</TabsTrigger>
                <TabsTrigger value="hobbies">Hobbies</TabsTrigger>
                <TabsTrigger value="Athletic">Athletic career</TabsTrigger>

                <TabsContent value="skills">
                  <div className="min-w-max sm:text-center">
                    <div className="relative flex w-full max-w-[24rem] sm:max-w-[29rem] overflow-hidden rounded-lg px-20 pt-2 ">
                      <IconCloud iconSlugs={slugs} />
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value="education">
                  <div className="min-w-max mt-2">
                    <TimelinePart></TimelinePart>
                  </div>
                </TabsContent>
                <TabsContent value="hobbies">
                  <div className="min-w-max">
                    <ul className="my-6 ml-6 list-disc [&>li]:mt-2 [&>li]:leading-7">
                      <li>Ski touring</li>
                      <li>Hiking / mountaineering / climbing</li>
                      <li>Guitar</li>
                      <li>Discover the world</li>
                    </ul>
                  </div>
                </TabsContent>
                <TabsContent value="Athletic">
                  <div className="min-w-max">
                    <p className="w-full text-left leading-7 [&:not(:first-child)]:mt-6">
                      As a former high-performance swimmer, I dedicated three
                      remarkable years to the high level sporting center of Font
                      Romeu, proudly representing the colors of Club Canet 66
                      Natation. My sporting highlights include:
                    </p>
                    <br />
                    <ul className="ml-6 list-disc [&>li]:mt-2">
                      <li>
                        <p className="leading-7">
                          Young French Champion of the 400m Individual Medley -
                          Short course (2018)
                        </p>
                      </li>
                      <li>
                        <p className="leading-7">
                          Young vice-Champion of France of the 200m Butterfly -
                          Short course (2018)
                        </p>
                      </li>
                      <li>
                        <p className="leading-7">
                          Young vice-Champion of France of the 200m Butterfly -
                          Long Course (2017)
                        </p>
                      </li>
                    </ul>
                  </div>
                </TabsContent>
              </TabsList>
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  );
}
