import { ProjectItem } from "@/types/project";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
export const ModalProjectCard = (data: {
  description: string;
  title: string;
  photos: string[];
  techno: string[];
  tags: string[];
}) => {
  return (
    <div className="flex mx-4 flex-col align-middle justify-start items-center mt-10 space-y-5 mb-10">
      <div>
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
          {data.title}
        </h1>
        <Separator className="mt-4 "></Separator>
      </div>
      <div>
        <Carousel className="w-full h-full">
          <CarouselContent>
            {data.photos.map((url, index) => (
              <CarouselItem key={index}>
                <div className="h-full w-full rounded overflow-hidden shadow-lg relative">
                <img
                    className="rounded h-full w-full object-cover"
                    src={url}
                    alt={index.toString()}
                />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

        </Carousel>
      </div>
      <div className="mx-2">
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          {data.description}
        </p>
      </div>
      <div>
        {data.techno.map((tech) => (
          <Badge
            key={tech}
            className=" hover:bg-secondary-foreground dark:hover:bg-secondary mr-2"
          >
            {tech}
          </Badge>
        ))}
      </div>
    </div>
  );
};
