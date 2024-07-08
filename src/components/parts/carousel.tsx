import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel as CarouselComponent,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const images: string[] = [
  "/about/luneSaintveran.JPEG",
  "/about/sharpatiNepalkhumbu.JPEG",
  "/about/toiliessaintveran.JPEG",

];

export default function Carousel() {
  return (
    <CarouselComponent className="w-full h-full">
      <CarouselContent className="h-[750px]">
        {images.map((url, index) => (
          <CarouselItem key={index}>
            <div className="w-full rounded overflow-hidden shadow-lg relative">
              <img src={url} className="rounded object-cover" alt={url.split("/").at(-1)?.split(".")[0]}></img>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </CarouselComponent>
  );
}
