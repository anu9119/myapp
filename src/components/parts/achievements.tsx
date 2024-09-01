"use client";

import dynamic from "next/dynamic";

const AnimatedNumbers = dynamic(
  () => {
    return import("react-animated-numbers");
  },
  { ssr: false }
);

const achievementsList = [
  {
    metric: "Projects",
    value: "12",
    postfix: "+",
  },
  {
    metric: "Years",
    value: "3",
  },
];

export function Achievements() {
  return (
    <section>
      <div className="container mt-10">
        <div className="border rounded-md py-8 px-16 flex flex-col sm:flex-row items-center justify-around">
          {achievementsList.map((achievement, index) => {
            return (
              <div
                key={index}
                className="flex flex-col items-center justify-center mx-4 my-4 sm:my-0"
              >
                <h2 className="text-primary text-4xl font-bold flex flex-row">
                  <AnimatedNumbers
                    includeComma
                    animateToNumber={parseInt(achievement.value)}
                    locale="en-US"
                    className="text-primary text-4xl font-bold"
                  />
                  {achievement.postfix}
                </h2>
                <p className="text-secondary-foreground dark:text-secondary text-base">{achievement.metric}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
