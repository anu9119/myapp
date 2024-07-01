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
        <TimelineHeading side="right">Python developer</TimelineHeading>
        <TimelineDot status="done" />
        <TimelineLine done/>
        <TimelineContent className="text-wrap">
            <p className="leading-7 text-balance">
                TRACER project : for the purpose of detect, classify and identify
                burried works, we have developed an reality augmented app using AI to
                help enedis agents in there daily tasks. I was tasked with leading the
                R&D efforts, annotating, training, and deploying the deep learning
                model.
            </p>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem status="done">
        <TimelineHeading side="right">Data engineer</TimelineHeading>
        <TimelineDot status="done" />
        <TimelineLine />
        <TimelineContent>
          Thorough testing is essential to ensure the quality and reliability of
          your software. Implement different testing methodologies, including
          unit testing, integration testing, and user acceptance testing. This
          helps identify and rectify any issues before deploying the software.
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  );
}
