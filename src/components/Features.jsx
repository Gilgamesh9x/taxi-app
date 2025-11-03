import {
  FaRegBuilding,
  FaPlaneDeparture,
  FaSubway,
  FaExclamationTriangle,
  FaUmbrellaBeach,
  FaCreditCard,
} from "react-icons/fa";

const features = [
  {
    name: "Navette Aéroport Casablanca",
    description:
      "Vous êtes à Casablanca et vous cherchez une navette aéroport Casablanca « Taj Tours » vous propose un service des navettes hautes gammes à Casablanca, avec des chauffeurs bien formés et informés sur votre plan journalier à Casablanca.",
    icon: FaRegBuilding,
  },
  {
    name: "Transfert Aéroport",
    description:
      "Nous assurons des transferts depuis l’aéroport Mohamed V Casablanca vers vos destinations avec des chauffeurs expérimentés et ponctuels. Pour tous vos transferts aéroport, contactez nous directement.",
    icon: FaPlaneDeparture,
  },
  {
    name: "Mise à disposition",
    description:
      "Quelle que soit votre destination à Casablanca (hôtels, bureau, magasins, gares casa port, gare casa voyageurs, porte….) « Taj Tours » met à votre disposition des transferts de qualités pour une journée ou demi journée.",
    icon: FaSubway,
  },
  {
    name: "Réservations urgentes",
    description:
      "Vous êtes en groupe ou seul et vous voulez visiter Casablanca ou d’autre ville de Maroc. « Taj Tours » met à votre service des véhicules variés et des transferts de capacités comme : navettes, mini bus, 4×4, bus…",
    icon: FaExclamationTriangle,
  },
  {
    name: "Circuits au Maroc",
    description:
      "« Taj Tours » vous offre des meilleurs circuits touristiques au Maroc avec un prix convenable à votre budget et votre choix. Pour bien vous voir votre programme de circuit vers les villes de Maroc, merci de nous remplir votre formulaire de contact.",
    icon: FaUmbrellaBeach,
  },
  {
    name: "Excursions privé au Maroc",
    description:
      "Avec « Taj Tours » bénéficiez vous des excursions privés pas chers au Maroc à différentes destinations par exemple : (Marrakech, Casablanca, Essaouira, Rabat, Ouarzazate, Zagora, el Jadida, Fès, Tanger, Agadir, Ifrane, Oualidia), et vous pouvez aussi découvrir le vrai charme marocain avec notre équipe professionnel.",
    icon: FaCreditCard,
  },
];

export default function Features() {
  return (
    <div className="bg-lightBlue py-24 sm:py-32 " id="services">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-vibrantOrange underline">
            Services
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-deepBlue sm:text-4xl">
            Tout ce dont vous avez besoin pour vos transferts au Maroc
          </p>
          <p className="mt-6 text-lg leading-8 text-deepBlue/75">
            Que vous soyez à Casablanca ou ailleurs au Maroc, profitez des
            services de « Taj Tours » pour vos transferts aéroport, circuits,
            excursions privées et plus encore. Avec des chauffeurs expérimentés,
            un service de qualité et des prix compétitifs, nous assurons vos
            déplacements en toute sérénité.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div
                key={feature.name}
                className="relative pl-16 bg-white shadow-lg rounded-lg p-6 hover:bg-brightYellow/10 transition duration-300"
              >
                <dt className="text-base font-semibold leading-7 text-deepBlue">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-brightYellow hover:bg-hoverBrightYellow transition duration-300">
                    <feature.icon
                      className="h-6 w-6 text-deepBlue"
                      aria-hidden="true"
                    />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-deepBlue/90">
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
