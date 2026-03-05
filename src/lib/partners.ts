export interface Partner {
  name: string;
  role: string;
  logo: string;
  logoDark?: string;
  link: string;
  width: number;
  height: number;
}

export const partners: Partner[] = [
  {
    name: "GTECH",
    role: "Knowledge Partner",
    logo: "/assets/gtech-logo.svg",
    link: "https://gtechindia.org/",
    width: 160,
    height: 80,
  },
  {
    name: "Make My Pass",
    role: "Ticketing Partner",
    logo: "/assets/make-my-pass-logo.svg",
    link: "https://makemypass.com/",
    width: 160,
    height: 80,
  },
  {
    name: "Festeve",
    role: "Events & Entertainment",
    logo: "/assets/festeve-.png",
    logoDark: "/assets/festeve-white.png",
    link: "",
    width: 200,
    height: 120,
  },
  {
    name: "Phottam AI",
    role: "Photography Partner",
    logo: "/assets/phottam.png",
    link: "https://phottam.ai/",
    width: 160,
    height: 80,
  },
];
