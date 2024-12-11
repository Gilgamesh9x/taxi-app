import { useState } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { MdOutlinePhone } from "react-icons/md";
import taxiImage from "../assets/taxi-image.jpg";

const navigation = [
  { name: "Services", href: "#services" },
  { name: "Services à bord", href: "#services-à-bord" },
  { name: "Nos Voitures", href: "#nos-voitures" },
  { name: "Socials", href: "#footer" },
];

export default function Hero() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="bg-lightBlue">
      <header className="fixed bg-lightBlue lg:bg-transparent lg:absolute inset-x-0 top-0 z-40">
        <div className="mx-auto max-w-7xl">
          <div className="px-6 pt-6 lg:max-w-2xl lg:pl-8 lg:pr-0">
            <nav
              className="flex items-center justify-between pb-5 lg:justify-start lg:pb-0 shadow-[0_1px_0px_0px_rgba(0,0,0,0.1)] lg:shadow-[0_0px_0px_0px_rgba(0,0,0,0.0)]  "
              aria-label="Global"
            >
              <a href="#" className="-m-1.5 p-1.5">
                <span className="text-deepBlue text-xl font-bold">Taxi</span>
              </a>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-deepBlue lg:hidden"
                onClick={() => setMobileMenuOpen(true)}
              >
                <span className="sr-only">Open main menu</span>
                <Bars3Icon className="h-6 w-6" aria-hidden="true" />
              </button>
              <div className="hidden lg:ml-12 lg:flex lg:gap-x-14">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-sm font-semibold leading-6 text-deepBlue hover:text-brightYellow"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </nav>
          </div>
        </div>
        <Dialog
          className="lg:hidden"
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
        >
          <div className="fixed inset-0 z-50" />
          <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-lightBlue px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="text-deepBlue text-xl font-bold">Taxi</span>
              </a>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-deepBlue hover:bg-brightYellow"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </DialogPanel>
        </Dialog>
      </header>

      <div className="relative">
        <div className="mx-auto max-w-7xl">
          <div className="relative z-10 pt-14 lg:w-full lg:max-w-2xl">
            <svg
              className="absolute inset-y-0 right-8 hidden h-full w-80 translate-x-1/2 transform fill-lightBlue lg:block"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <polygon points="0,0 90,0 50,100 0,100" />
            </svg>

            <div className="relative px-6 py-32 sm:py-40 lg:px-8 lg:py-56 lg:pr-0">
              <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl">
                <h1 className="text-4xl font-bold tracking-tight text-deepBlue sm:text-6xl">
                  Découvrez la Ville avec une Touche Locale
                </h1>
                <p className="mt-6 text-lg leading-8 text-deepBlue/90">
                  Nous sommes spécialisés dans le domaine du transport
                  touristique et de la réservation des transferts à Casablanca
                  et partout au Maroc
                </p>
                <div className="mt-10 flex items-center gap-x-6">
                  <a
                    href="#services"
                    className="rounded-md bg-brightYellow px-3.5 py-2.5 text-sm font-semibold text-deepBlue shadow-sm hover:bg-hoverBrightYellow focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Nos services
                  </a>
                  <a
                    href="tel:+212658965452"
                    className="text-md font-semibold leading-6 text-vibrantOrange hover:text-brightYellow flex items-center gap-2"
                  >
                    <MdOutlinePhone className="text-2xl" />{" "}
                    <span className="underline"> +212 708296255</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-gray-50 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          <img
            className="w-full h-[600px] object-cover shadow-lg lg:h-full lg:w-full"
            src={taxiImage}
            alt="Touristic Taxi"
          />
        </div>
      </div>
    </div>
  );
}
