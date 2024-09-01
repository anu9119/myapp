import {
  Timeline,
  TimelineContent,
  TimelineDot,
  TimelineHeading,
  TimelineItem,
  TimelineLine,
} from "@/components/ui/timeline";

export function TimelinePart() {
  return (
    <Timeline positions={"left"}>
      <TimelineItem status="done">
        <TimelineHeading>Computer science bachelor's degree</TimelineHeading>
        <TimelineDot status="done" />
        <TimelineLine done />
        <TimelineContent>
          Computer science, Mathematics bachelor'sdegree, university via
          domitia, Perpignan
        </TimelineContent>
      </TimelineItem>

      <TimelineItem status="done">
        <TimelineHeading side="right">
          AI & databases master, university of burgundy, Dijon
        </TimelineHeading>
        <TimelineDot status="done" />
        <TimelineLine done />
        <TimelineContent>
          AI & Database master : The program is designed to equip specialists
          with skills to handle complex data, both traditional and massive,
          using cutting-edge tools for effective solution design
        </TimelineContent>
      </TimelineItem>

      <TimelineItem status="done">
        <TimelineHeading side="right">
          Python developer - Enedis{" "}
        </TimelineHeading>
        <TimelineDot status="done" />
        <TimelineLine done />
        <TimelineContent className="text-wrap">
          <p className="leading-7 text-balance">
            TRACER project : for the purpose of detect, classify and identify
            burried works, we have developed an reality augmented app using AI
            to help enedis agents in there daily tasks. I was tasked with
            leading the R&D efforts, annotating, training, and deploying the
            deep learning model.
          </p>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem status="done">
        <TimelineHeading side="right">Data engineer - La Forge</TimelineHeading>
        <TimelineDot status="done" />
        <TimelineLine done/>
        <TimelineContent>
        As a data engineer at La Forge, I was responsible for designing, developing, and implementing high-quality AI products. At the heart of this startup studio, I had the opportunity to explore various AI projects and applications, particularly in the fields of healthcare and industry.
        </TimelineContent>
      </TimelineItem>
      <TimelineItem status="done">
        <TimelineHeading side="right">Lead data engineer - Credit Agricole Champagne Bourgogne</TimelineHeading>
        <TimelineDot status="working" />
        <TimelineLine />
        <TimelineContent>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  );
}
