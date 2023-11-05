import { Url } from "url";

interface DataNavbar {
  id: string;
  title: string;
  tab?: {
    id: string;
    titlesmall?: string;
    title: string;
    content: string;
    avg?: string;
    est?: string;
    img?: string;
  }[];
}

const ItemNavbar: DataNavbar[] = [
  {
    id: "00",
    title: "Home",
  },
  {
    id: "01",
    title: "Destination",
    tab: [
      {
        id: "moon",
        title: "Moon",
        content: "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
        avg: "384,400 km",
        est: "3 days",
        img: "/assets/destination/image-moon.png",
      },
      {
        id: "mars",
        title: "Mars",
        content: "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!",
        avg: "225 MIL. km",
        est: "9 months",
        img: "/assets/destination/image-mars.png",
      },
      {
        id: "europa",
        title: "Europa",
        content: "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
        avg: "628 MIL. km",
        est: "3 years",
        img: "/assets/destination/image-europa.png",
      },
      {
        id: "titan",
        title: "Titan",
        content: "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
        avg: "1.6 BIL. km",
        est: "7 years",
        img: "/assets/destination/image-titan.png",
      },
    ]
  },
  {
    id: "02",
    title: "Crew",
    tab: [
      {
        id: "children-1",
        titlesmall: "Commander",
        title: "Douglas Hurley",
        content: "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.",
      },
      {
        id: "children-2",
        titlesmall: "Mission Specialist",
        title: "MARK SHUTTLEWORTH",
        content: "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.",
      },
      {
        id: "children-3",
        titlesmall: "Pilot",
        title: "Victor Glover",
        content: "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer. ",
      },
      {
        id: "children-4",
        titlesmall: "Flight Engineer",
        title: "Anousheh Ansari",
        content: "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.",
      },
    ]
  },
  {
    id: "03",
    title: "Technology",
    tab: [
      {
        id: "technology-1",
        titlesmall: "THE TERMINOLOGY…",
        title: "LAUNCH VEHICLE",
        content: "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!",
      },
      {
        id: "technology-2",
        titlesmall: "THE TERMINOLOGY…",
        title: "SPACEPORT",
        content: "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.",
      },
      {
        id: "technology-3",
        titlesmall: "THE TERMINOLOGY…",
        title: "SPACE CAPSULE",
        content: "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.",
      },
    ]
  },
];
export default ItemNavbar;