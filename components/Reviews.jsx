"use client";

import Image from "next/image";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "/components/ui/card";

const reviewsData = [
  {
    avatar: "/reviews/avatar-1.png",
    name: "Richard Thompson",
    job: "Chef",
    review:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat laboriosam rem vel molestias minus praesentium! Rerum doloremque qui reiciendis nihil",
  },
  {
    avatar: "/reviews/avatar-1.png",
    name: "Richard Thompson",
    job: "Chef",
    review:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat laboriosam rem vel molestias minus praesentium! Rerum doloremque qui reiciendis nihil",
  },
  {
    avatar: "/reviews/avatar-2.png",
    name: "Richard Thompson",
    job: "Chef",
    review:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat laboriosam rem vel molestias minus praesentium! Rerum doloremque qui reiciendis nihil",
  },
  {
    avatar: "/reviews/avatar-3.png",
    name: "Richard Thompson",
    job: "Chef",
    review:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat laboriosam rem vel molestias minus praesentium! Rerum doloremque qui reiciendis nihil",
  },
  {
    avatar: "/reviews/avatar-4.png",
    name: "Richard Thompson",
    job: "Chef",
    review:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat laboriosam rem vel molestias minus praesentium! Rerum doloremque qui reiciendis nihil",
  },
  {
    avatar: "/reviews/avatar-5.png",
    name: "Richard Thompson",
    job: "Chef",
    review:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat laboriosam rem vel molestias minus praesentium! Rerum doloremque qui reiciendis nihil",
  },
  {
    avatar: "/reviews/avatar-6.png",
    name: "Richard Thompson",
    job: "Chef",
    review:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat laboriosam rem vel molestias minus praesentium! Rerum doloremque qui reiciendis nihil",
  },
];

const Reviews = () => {
  return (
    <section classname="mb-12 xl:mb-32">
      <div className="container mx-auto">
        <h2 className="section-title mb-12 text-center mx-auto">Reviews</h2>
        {/* slider */}
        <Carousel
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 },
            1400: { slidesPerView: 3 },
          }}
          spaceBetween={30}
        >
          <CarouselContent>
            {reviewsData.map((person, index) => {
              return (
                <CarouselItem key={index}  className="md:basis-1/2 lg:basis-1/3">
                  <Card className="bg-[#FDF9F5] dark:bg-secondary/40 p-8 min-h-[300px]">
                    <CardHeader className="p-0 mb-10">
                      <div className="flex items-center gap-x-4">
                        {/* image */}
                        <Image
                          src={person.avatar}
                          width={70}
                          height={70}
                          alt=""
                          priority
                        />
                      </div>
                      <div className="flex flex-col">
                        <CardTitle>{person.name}</CardTitle>
                        <p>{person.job}</p>
                      </div>
                    </CardHeader>
                    <CardDescription className="text-lg text-muted-foreground">
                      {person.review}
                    </CardDescription>
                  </Card>
                </CarouselItem>
              );
            })}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />

        </Carousel>
      </div>
    </section>
  );
};

export default Reviews;
