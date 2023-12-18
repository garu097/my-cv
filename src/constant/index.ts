// header
import { IFavourite, IInfoAuthor, ITimeLine } from "./type";

export const INFO_AUTHOR: IInfoAuthor = {
  FACEBOOK: {
    url: "https://www.facebook.com/profile.php?id=100040320098398",
    icon: "/icons/icon-facebook.svg",
    name: "Nguyen Ha",
  },
  GITHUB: {
    url: "https://github.com/garu097",
    icon: "/icons/icon-github.svg",
    name: "@garu097",
  },
  GITLAB: {
    url: "https://gitlab.com/garu097",
    icon: "/icons/icon-gitlab.svg",
    name: "@garu097",
  },
  GMAIL: {
    icon: "/icons/icon-envelop.svg",
    name: "garu097@gmail.com",
  },
  PHONE: {
    icon: "/icons/icon-phone.svg",
    name: "+84936520206",
  },
};

export const SIZE_ICON = {
  DEFAULT: {
    height: 40,
    width: 40,
  },
  LARGE: {
    height: 57,
    width: 57,
  },
};

// navbar
export const LIST_ITEM_NAVBAR: any = {
  HOME: "Home",
  SKILL: "Skill",
  ABOUT: "About",
  CONTACT: "Contact",
};

// introduce
export const TEXT_INTRODUCE_SEQUENCE = ["My name is Ha", 2000, "I am a developer", 2000, "Nice to see you", 2000];

export const PARAGRAPH_INTRODUCE =
  "A hard worker <br/> who is adaptable and able to learn and<br/> use new technologies with ease. <br/>My main areas of expertise include <br/> Javascript, HTML, CSS and Python.";
// 'I am a full stack developer <br/> My main areas of expertise include <br/> Javascript, Typescript, HTML, CSS, Node.js and Python.';

export const SKILLS = {
  LANGUAGE: {
    HTML: {
      NAME: "HTML",
      PROGRESS: 100,
    },
    CSS: {
      NAME: "CSS",
      PROGRESS: 100,
    },
    JAVASCRIPT: {
      NAME: "Javascript",
      PROGRESS: 100,
    },
    PYTHON: {
      NAME: "Python",
      PROGRESS: 80,
    },
    SQL: {
      NAME: "SQL",
      PROGRESS: 95,
    },
  },
  FRAMEWORK: {
    NESTJS: {
      NAME: "NestJs",
      PROGRESS: 100,
    },
    REACTJS: {
      NAME: "ReactJs",
      PROGRESS: 100,
    },
    VUEJS: {
      NAME: "VueJs",
      PROGRESS: 100,
    },
    NEXTJS: {
      NAME: "NextJS",
      PROGRESS: 95,
    },
    DJANGO: {
      NAME: "Django",
      PROGRESS: 80,
    },
  },
};

// education
export const LIST_TIMELINE: ITimeLine[] = [
  {
    title: "Hanoi University of Science and Technology",
    date: "September 2016 - April 2021",
    subTitle: "Bachelor's Degree - Telecommunication electronic engineering",
    paragraph: "Studies included understanding of different algorithms and their implementation in practice.",
    iconURL: "/images/png/HUST.png",
  },
  {
    title: "Korean IT School",
    date: "April 2021 - November 2021",
    subTitle: "Training and improve knowledge software",
    paragraph: "Studies included fundamental programing software. Also an emphasis on algorithm",
    iconURL: "/images/jpeg/KITS.jpeg",
  },
  {
    title: "Ycomm VN (Tripath)",
    subTitle: "Developer",
    date: "August 2021 - present",
    iconURL: "/images/png/YCOMM.png",
    paragraph:
      "Works with socket, video call, blockchain,...  emphasis on NestJs, NextJs, Nuxt3, Vuejs, Typescript based solutions.",
  },
];

export const LIST_PROJECT: ITimeLine[] = [
  {
    title: "Watermark Invisible",
    date: "August 2023 - November 2023",
    iconURL: "/images/png/Kenaz.png",
    paragraph:
      "- Introduction: Protect your digital content with ease using watermark. Whether you're a photographer, content creator, or just want to secure your images,  \n" +
      "- Client: Kenaz\n" +
      "- Developed: Build an platform draw text and logo visible and invisible as watermark to images \n" +
      "- Team size: 3\n" +
      "- Position and Technologies used: Backend NestJs",
    encloseURL: "http://wm.itoon.kr/vi",
  },
  {
    title: "MStoryLink",
    date: "December 2022 - July 2023",
    iconURL: "/images/svg/MStoryLink.svg",
    paragraph:
      "- Introduction: Immerse yourself in the best comics with access to a vast comic store with thousands of titles. Readers can enjoy comics both online and offline, from any location. The auto-scrolling feature and multiple speed options will bring a completely new advanced reading experience.\n" +
      "- Client: Gamer Republic & Ycomm\n" +
      "- Developed: Build app mobile read comics online and offline, auto-scrolling feature, adjust reading mode. \n" +
      "- Team size: 3\n" +
      "- Position and Technologies used: Front-end, React Native, IOS native, Android native",
    encloseURL: "https://play.google.com/store/apps/details?id=com.moykomiks.webtoon&hl=vi&gl=US",
  },
  {
    title: "Statup GG",
    date: "December 2021 - March 2023",
    iconURL: "/images/svg/Statupgg.svg",
    paragraph:
      "- Introduction: An initiative developing a virtual assistant desktop application that offers valuable analyses and real-time AI voice coaching to enhance the win rate of League of Legends players during their gameplay.\n" +
      "- Client: Gamer Republic & Tripath\n" +
      "- Developed: wrote Vuejs to implement front-end and feature in game on desktop app\n" +
      "- Team size: 8\n" +
      "- Position and Technologies used:Front-end, Nuxt3Js, VueS, ElectronJS",
    encloseURL: "https://download.statup.gg/en",
  },
  {
    title: "Shilla",
    date: "June 2022 - December 2022",
    iconURL: "/images/png/Shilla.png",
    paragraph:
      "- Introduction: A consulting system for Shilla duty-free shops' website in Korea enables users to schedule appointments with consultants, engage in real-time chat or video calls, and seamlessly share product information during consultations. \n" +
      "- Client: The Shilla Duty Free\n" +
      "- Developed: Build consulting system, consulting real-time, video consultation using Amazon Chime SDK, Vuejs  \n" +
      "- Team size: 5\n" +
      "- Position and Technologies used:Front-end, VueJS, NuxtJS",
    encloseURL: "https://play.google.com/store/apps/details?id=com.shilladutyfree&hl=vi-VN",
  },
  {
    title: "Nft-Blockchain",
    date: "March 2022 - June 2022",
    iconURL: "/images/png/NFTBox.png",
    paragraph:
      "- Introduction: An web application trading NFT on multiple network (Ethereum, Matic, etc...) \n" +
      "- Client: Tripath\n" +
      "- Developed: wrote the NFT token as a smart contract and integrated to web application for trading use Vuejs \n" +
      "- Team size: 5\n" +
      "- Position and Technologies used:Front-end, Solidarity ,Nuxt3Js, VueS",
  },
  {
    title: "School",
    date: "August 2021 - November 2021",
    iconURL: "/images/png/LogoSchool.png",
    paragraph:
      "- Introduction: School E-learning buying course online for students\n" +
      "- Client: Tripath\n" +
      "- Developed: Implemented web application using Vuejs \n" +
      "- Team size: 2\n" +
      "- Position and Technologies used:Front-end, Nuxt3Js, VueS",
    encloseURL: "https://schools.vn",
  },
  {
    title: "Discord Bot",
    subTitle: "Personal project",
    date: "May 2022",
    iconURL: "/images/png/Discord.png",
    paragraph: "Create the bot manage music player on my discord sever",
    encloseURL: "https://github.com/garu097/cook-bot-discord",
  },
];

// favourite

export const FAVOURITE: IFavourite = {
  LEARNING: {
    icon: "/icons/icon-book.svg",
    description: "Exciting to learn new knowledge and technology to apply to work, not afraid of change",
  },
  GAME: {
    icon: "/icons/icon-gamepad.svg",
    description:
      'Good choice for relax with my friends after hard work day, where i stay true to myself <br/> You can find me <a href="https://steamcommunity.com/id/garu097" target="_blank" class="underline italic"> here </a>',
  },
  TRAVEL: {
    icon: "/icons/icon-umbrella-beach.svg",
    description: "Traveling introduces me to new cultures, new knowledge and cutting down on stress",
  },
};
