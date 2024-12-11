import { FaWifi, FaUmbrella } from "react-icons/fa";
import { FaBottleWater } from "react-icons/fa6";
import { AiFillSound } from "react-icons/ai";
import { IoMdOutlet } from "react-icons/io";
import { HiMiniClock } from "react-icons/hi2";

export default function FeaturesInside() {
  return (
    <div
      className="bg-lightBlue pb-24 sm:pb-32 scroll-m-section"
      id="services-à-bord"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-vibrantOrange underline">
            Services à bord
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-deepBlue sm:text-4xl">
            Nous offrons toutes les commodités dont vous pourriez avoir besoin
          </p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-5 mt-20">
          <div className="flex flex-col items-center">
            <div className="flex items-center justify-center w-24 h-24 rounded-full border border-vibrantOrange bg-white">
              <FaBottleWater className="text-vibrantOrange text-5xl" />
            </div>
            <p className="text-center mt-2 text-sm font-semibold text-deepBlue">
              Bouteilles d'eau
            </p>
          </div>
          <div className="flex flex-col items-center">
            <div className="flex items-center justify-center w-24 h-24 rounded-full border border-vibrantOrange bg-white">
              <FaWifi className="text-vibrantOrange text-5xl" />
            </div>
            <p className="text-center mt-2 text-sm font-semibold text-deepBlue">
              Wifi accessible
            </p>
          </div>
          <div className="flex flex-col items-center">
            <div className="flex items-center justify-center w-24 h-24 rounded-full border border-vibrantOrange bg-white">
              <AiFillSound className="text-vibrantOrange text-5xl" />
            </div>
            <p className="text-center mt-2 text-sm font-semibold text-deepBlue">
              Choix d'ambiance
            </p>
          </div>
          <div className="flex flex-col items-center">
            <div className="flex items-center justify-center w-24 h-24 rounded-full border border-vibrantOrange bg-white">
              <IoMdOutlet className="text-vibrantOrange text-5xl" />
            </div>
            <p className="text-center mt-2 text-sm font-semibold text-deepBlue">
              Chargez votre téléphone
            </p>
          </div>
          <div className="flex flex-col items-center">
            <div className="flex items-center justify-center w-24 h-24 rounded-full border border-vibrantOrange bg-white">
              <HiMiniClock className="text-vibrantOrange text-5xl" />
            </div>
            <p className="text-center mt-2 text-sm font-semibold text-deepBlue">
              Prise en compte d'éventuels retards
            </p>
          </div>
          <div className="flex flex-col items-center">
            <div className="flex items-center justify-center w-24 h-24 rounded-full border border-vibrantOrange bg-white">
              <FaUmbrella className="text-vibrantOrange text-5xl" />
            </div>
            <p className="text-center mt-2 text-sm font-semibold text-deepBlue">
              Parapluie
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
