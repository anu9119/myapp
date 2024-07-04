"use client";

import { ProjectItem } from "@/types/project";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Badge } from "../ui/badge";
import { useState } from "react";
import {
  Credenza,
  CredenzaBody,
  CredenzaClose,
  CredenzaContent,
  CredenzaDescription,
  CredenzaFooter,
  CredenzaHeader,
  CredenzaTitle,
  CredenzaTrigger,
} from "../ui/credenza";
import { ModalProjectCard } from "./modal-project-card";

const EmojiList: string[] = [
  "Emoji.png",
  "Emoji2.png",
  "Emoji3.png",
  "Emoji4.png",
  "Emoji5.png",
  "Emoji6.png",
  "Emoji7.png",
  "Emoji8.png",
  "Emoji9.png",
  "Emoji10.png",
];

function getRandomText(textList: string[]): string {
  if (textList.length === 0) {
    throw new Error("La liste ne peut pas être vide");
  }
  const randomIndex = Math.floor(Math.random() * textList.length);
  return textList[randomIndex];
}

export const ProjectCard = (data: ProjectItem) => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <>
      <div
        className="cursor-pointer flex border rounded w-2/5 sm:w-1/2 md:w-1/4 lg:1/4 justify-evenly p-4 space-x-3 items-start"
        onClick={() => setOpen(!open)}
      >
        <div>
          <Avatar className="h-16 w-16 sm:h-20 sm:w-20">
            <AvatarImage src={`/${getRandomText(EmojiList)}`} alt="Emoji" />
            <AvatarFallback>SCH</AvatarFallback>
          </Avatar>
        </div>
        <div className="flex flex-col space-y-2">
          <h2 className="scroll-m-20 border-b pb-2 text-xl sm:text-3xl font-semibold tracking-tight first:mt-0">
            {data.title}
          </h2>
          <div className="space-y-2">
            {data.tags.map((tag) => (
              <Badge
                key={tag}
                className=" hover:bg-secondary-foreground dark:hover:bg-secondary mr-2"
              >
                {tag}
              </Badge>
            ))}
          </div>
        </div>
      </div>
      <Credenza open={open} onOpenChange={() => setOpen(!open)}>
        <CredenzaContent>
          <ModalProjectCard
            description={data.description}
            title={data.title}
            photos={data.photos}
            techno={data.techno}
            tags={data.tags}
          />
        </CredenzaContent>
      </Credenza>
    </>
  );
};
