interface DataNavbar {
  id: string;
  title: string;
  link: string;
  content?: {
    titleSmall:string;
    titleLarge:string;
    des:string;
  };
}

const ItemNavbar: DataNavbar[] = [
  {
    id: "00",
    title: "Home",
    link: "/",
    content: {
      titleSmall: "SO, YOU WANT TO TRAVEL TO",
      titleLarge: "SPACE",
      des: "Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!"
    }
  },
  {
    id: "01",
    title: "Destination",
    link: "/destination",
  },
  {
    id: "02",
    title: "Crew",
    link: "/crew",
  },
  {
    id: "03",
    title: "Technology",
    link: "/technology",
  },
];
export default ItemNavbar;