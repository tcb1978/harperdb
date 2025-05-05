import Image from "next/image";
import Link from "next/link";
import { CharacterType } from "../types";
import { Card, CardContent } from "./ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";

type GroovyCarouselProps = {
  characters: CharacterType[];
};

const GroovyCarousel = ({ characters }: GroovyCarouselProps) => {
  return (
    <Carousel
      opts={{ align: "start" }}
      orientation="horizontal"
      className="w-full max-w-lg"
    >
      <CarouselContent>
        {characters.map((character) => (
          <CarouselItem key={character.id} className="basis-1/2">
            <div className="p-1">
              <Card>
                <CardContent className="flex flex-col items-center justify-center p-4">
                  <Link href={`/characters/${character.id}`} className="flex flex-col items-center group">
                    <Image
                      src={character.image}
                      alt={character.name}
                      width={96}
                      height={96}
                      className="mb-2 transition-transform rounded-full group-hover:scale-105"
                    />
                    <span className="text-lg font-semibold group-hover:text-blue-500">
                      {character.name}
                    </span>
                    <span className="text-xs">{character.species}</span>
                  </Link>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};

export default GroovyCarousel;