import { Swiper, SwiperSlide } from "swiper/react";
import { Keyboard, Pagination, Navigation, Autoplay } from "swiper/modules";

import SliderImage1 from "../assets/car-1.jpg";
import SliderImage2 from "../assets/car-2.jpg";
import SliderImage3 from "../assets/car-3.jpg";
import SliderImage4 from "../assets/car-4.jpg";
import SliderImage5 from "../assets/car-5.jpg";
import SliderImage6 from "../assets/car-6.jpg";
import SliderImage7 from "../assets/car-7.jpg";

const sliderImages = [
  {
    src: SliderImage1,
    alt: "Slider Image1",
  },
  {
    src: SliderImage2,
    alt: "Slider Image2",
  },
  {
    src: SliderImage3,
    alt: "Slider Image3",
  },
  {
    src: SliderImage4,
    alt: "Slider Image4",
  },
  {
    src: SliderImage5,
    alt: "Slider Image5",
  },
  {
    src: SliderImage6,
    alt: "Slider Image6",
  },
  {
    src: SliderImage7,
    alt: "Slider Image7",
  },
];

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default function OurCar() {
  return (
    <>
      <div
        className="our-car-slider bg-lightBlue pb-24 sm:pb-32 scroll-m-section"
        id="nos-voitures"
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className=" mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-vibrantOrange underline">
              Notre voiture
            </h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-deepBlue sm:text-4xl">
              Découvrez notre véhicule: un espace de confort pour vos
              déplacements
            </p>
          </div>
          {/* Slider */}
          <div className="pt-12 mx-auto max-w-5xl">
            <Swiper
              slidesPerView={1}
              spaceBetween={20}
              keyboard={{
                enabled: true,
              }}
              pagination={{
                clickable: true,
              }}
              navigation={true}
              modules={[Keyboard, Pagination, Navigation, Autoplay]}
              autoplay={{ delay: 8000, disableOnInteraction: false }}
              className="h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] object-cover rounded-md shadow-lg"
            >
              {sliderImages.map((image) => {
                return (
                  <SwiperSlide key={image.alt}>
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-full object-cover rounded-md"
                    />
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </div>
      </div>
    </>
  );
}
