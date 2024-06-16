"use client";

import { WheelGesturesPlugin } from "embla-carousel-wheel-gestures";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "~/components/ui/carousel";
import BookCard from "./bookCard";

function BookCarousel() {
  return (
    <section className="px-6 py-4">
      <p className="text-xl font-semibold">Continue Reading</p>
      <Carousel
        opts={{
          dragFree: true,
        }}
        plugins={[WheelGesturesPlugin()]}
      >
        <CarouselContent>
          {Array(20)
            .fill(0)
            .map((_, i) => (
              <CarouselItem className="basis-auto" key={i}>
                <BookCard
                  image="/a-a-milne_winnie-the-pooh-35ae66b3-cover.webp"
                  author="A. A. Milne"
                  title="Winnie-the-Pooh kdjkaslkj askdjlaskj aksdjlaskjd"
                />
              </CarouselItem>
            ))}
        </CarouselContent>
      </Carousel>
    </section>
  );
}

export default BookCarousel;
