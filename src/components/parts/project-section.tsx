import { cn } from "@/lib/utils";
import Marquee from "@/components/magicui/marquee";
import { ProjectItem } from "@/types/project";
import { ProjectCard } from "./project-card";

const projects: ProjectItem[] = [
  {
    name: "RTI",
    title: "RTI-Exploration",
    description:
      "AI solution for detecting deep aquifers from NASA satellite images",
    photos: [
      "/projects/rti/rti1.PNG",
      "/projects/rti/rti2.PNG",
      "/projects/rti/rti3.PNG",
    ],
    tags: ["AI", "Data"],
    techno: ["Python", "Pytorch", "Airflow", "docker"],
  },
  {
    name: "VL",
    title: "Vertigo Lab",
    description:
      "Development of a data aggregation platform for measuring the socio-economic and environmental impacts of companies.",
    photos: ["/projects/vl/1.png", "/projects/vl/2.png", "/projects/vl/3.png"],
    tags: ["Data","Development"],
    techno: ["Python", "React", "Next", "docker"],
  },
  {
    name: "mieux",
    title: "Mieux",
    description:
      "Development of a health platform using AI to monitor the health of beneficiaries in a personalized way.",
    photos: [
      "/projects/mieux/mieux1.png",
      "/projects/mieux/mieux2.png",
      "/projects/mieux/mieux3.png",
      "/projects/mieux/mieux4.png",
    ],
    tags: ["Data", "AI", "Development"],
    techno: ["Java", "Spring", "nestJs", "docker"],
  },
  {
    name: "TRACER",
    title: "Tracer",
    description:
      "Project with the purpose of detect, classify and identify burried works, we have developed an reality augmented app using AI to help enedis agents in there daily tasks. I was tasked with leading the R&D efforts, annotating, training, and deploying the deep learning mode.",
    photos: [
      "/projects/tracer/1.png",
      "/projects/tracer/2.png",
      "/projects/tracer/3.png",
    ],
    techno: ["python", "docker", "pytorch", "k8s"],
    tags: ["Data", "AI", "Image processing"],
  },
  {
    name: "Portfolio",
    title: "My Portfolio",
    description: "Building my online porfolio using nextjs aframework.",
    photos: [
      "/projects/portfolio/1.png",
      "/projects/portfolio/2.png",
      "/projects/portfolio/3.png",
    ],
    tags: ["development"],
    techno: ["nextjs", "docker", "typescript"],
  },
  {
    name: "Trading Assistant",
    title: "Trading Assistant",
    description:
      "Assistant who helps to detect trading patterns and backtests trading strategies (based on more than 100 technical indicators) on crypto currencies.",
    photos: [],
    tags: ["development", "Data", "AI"],
    techno: ["Python", "Java", "Spring", "docker"],
  },
  {
    name: "mediascopie",
    title: "Mediascopie",
    description:
      "Measure public engagement with audiovisual content in real time by analyzing listeners' spontaneous reactions.",
    photos: [],
    tags: ["development", "Data"],
    techno: ["Python", "Javascript", "redis", "docker"],
  },
  {
    name: "JVPDT",
    title: "JVPDT",
    description:
      "A platform that allows for the sharing and writing of historical articles.",
    photos: [],
    tags: ["development"],
    techno: ["typescript", "nextjs", "docker"],
  },
];

export default function ProjectSection() {
  const firstRow = projects.slice(0, projects.length / 2);
  const secondRow = projects.slice(projects.length / 2);

  return (
    <>
      <section id="projects">
        <div className="container mt-10">
          <h2 className="scroll-m-20 text-4xl font-extrabold mb-4">
            My Achievements
          </h2>
          <div className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden rounded-lg py-20">
            <Marquee pauseOnHover className="[--duration:20s]">
              {firstRow.map((project, index) => (
                <ProjectCard key={index} {...project} />
              ))}
            </Marquee>
            <Marquee reverse pauseOnHover className="[--duration:20s]">
              {secondRow.map((project, index) => (
                <ProjectCard key={index} {...project} />
              ))}
            </Marquee>
            <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
            <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
          </div>
        </div>
      </section>
    </>
  );
}
