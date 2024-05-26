"use client";
import { useState } from "react";
import Image from "next/image";

export default function Testimonial() {
  const [sliderImages, setSliderImages] = useState([
    {
      image: "/images/lab1.jpg",
      name: "john doe",
      description: "Testimonial 1 description",
    },
    {
      image: "/images/lab1.jpg",
      name: "john doe",
      description: "Testimonial 2 description",
    },
    {
      image: "/images/lab1.jpg",
      name: "john doe",
      description: "Testimonial 3 description",
    },
    {
      image: "/images/lab1.jpg",
      name: "john doe",
      description: "Testimonial 4 description",
    },
    {
      image: "/images/lab1.jpg",
      name: "john doe",
      description: "Testimonial 5 description",
    },
    {
      image: "/images/lab1.jpg",
      name: "john doe",
      description: "Testimonial 6 description",
    },
  ]);
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [currentSmallSlideIndex, setCurrentSmallSlideIndex] = useState(0);

  const displayImages = sliderImages.slice(
    currentSlideIndex,
    currentSlideIndex + 3
  );
  const smallDisplayImages = sliderImages.slice(
    currentSlideIndex,
    currentSlideIndex + 1
  );

  const nextSlide = () => {
    setCurrentSlideIndex((prevIndex) =>
      prevIndex + 3 >= sliderImages.length ? 0 : prevIndex + 1
    );
  };
  const smallNextSlide = () => {
    setCurrentSmallSlideIndex((prevIndex) =>
      prevIndex + 1 >= sliderImages.length ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentSlideIndex((prevIndex) =>
      prevIndex === 0 ? sliderImages.length - 3 : prevIndex - 1
    );
  };
  const smallPrevSlide = () => {
    setCurrentSlideIndex((prevIndex) =>
      prevIndex === 0 ? sliderImages.length - 1 : prevIndex - 1
    );
  };
  return (
    <section className="py-20">
      <div className="slider relative md:block hidden">
        <div>
          <h1 className="text-center font-bold text-3xl text-cyan-500">
            Testimonial
          </h1>
          <div className="items-center justify-center gap-10 py-20 flex flex-wrap">
            {displayImages.map((slide, index) => (
              <div
                className="bg-teal-700 rounded-md items-center justify-center flex w-64 h-80"
                key={index}
              >
                <div>
                  <div className="items-center justify-center flex">
                    <div className="w-32 h-32 ">
                      <Image
                        src={slide.image}
                        alt={`Slide ${currentSlideIndex + index}`}
                        width={200}
                        height={200}
                        layout="responsive"
                        objectFit="cover"
                        className="w-full h-full rounded-full"
                      />
                    </div>
                  </div>
                  <h3 className="text-center">{slide.name}</h3>
                  <p className="text-center">{slide.description}</p>
                </div>
              </div>
            ))}
          </div>
          <button
            className="prev absolute top-1/2 text-3xl left-64 transform -translate-y-1/2 "
            onClick={prevSlide}
          >
            &#10094;
          </button>
          <button
            className="next absolute top-1/2 text-3xl right-64 transform -translate-y-1/2 "
            onClick={nextSlide}
          >
            &#10095;
          </button>
        </div>
      </div>
      <div className="slider relative md:hidden block">
        <div>
          <h1 className="text-center font-bold text-3xl text-orange text-shadow-orange">
            Testimonial
          </h1>
          <div className="items-center justify-center gap-10 py-20 flex flex-wrap">
            {smallDisplayImages.map((slide, index) => (
              <div
                className="bg-teal-700 rounded-md items-center justify-center flex w-64 h-80"
                key={index}
              >
                <div>
                  <div className="items-center justify-center flex">
                    <div className="w-32 h-32 ">
                      <Image
                        src={slide.image}
                        alt={`Slide ${currentSmallSlideIndex + index}`}
                        width={200}
                        height={200}
                        layout="responsive"
                        objectFit="cover"
                        className="w-full h-full rounded-full"
                      />
                    </div>
                  </div>
                  <h3 className="text-center">{slide.name}</h3>
                  <p className="text-center">{slide.description}</p>
                </div>
              </div>
            ))}
          </div>
          <button
            className="prev absolute top-1/2 text-3xl left-4 transform -translate-y-1/2 "
            onClick={smallPrevSlide}
          >
            &#10094;
          </button>
          <button
            className="next absolute top-1/2 text-3xl right-4 transform -translate-y-1/2 "
            onClick={smallNextSlide}
          >
            &#10095;
          </button>
        </div>
      </div>
    </section>
  );
}
