import { Sidenav } from "src/app/models/sidenav";

export const SIDENAV: Sidenav[] = [
    {
      id: "1",
      text: "di tendenza",
      subMenu: [],
      isHighlight: true,
      isSeparator: false,
    },
    {
      id: "2",
      text: "Besteseller",
      subMenu: [],
      isHighlight: false,
      isSeparator: false,
    },
    {
      id: "3",
      text: "Novità",
      subMenu: [],
      isHighlight: false,
      isSeparator: false,
    },
    {
      id: "4",
      text: "I prodotti del momento",
      subMenu: [],
      isHighlight: false,
      isSeparator: false,
    },
    {
      id: "5",
      text: "",
      subMenu: [],
      isHighlight: false,
      isSeparator: true,
    },
    {
      id: "6",
      text: "Dispositivi E Contenuti Digitali",
      subMenu: [],
      isHighlight: true,
      isSeparator: false,
    },
    {
      id: "6",
      text: "Amazon Prime Video",
      subMenu: [
        {
          text: "Catalogo",
          value: "1",
        },
        {
          text: "Film",
          value: "2",
        },
        {
          text: "SerieTV",
          value: "3",
        },
      ],
      isHighlight: false,
      isSeparator: false,
    },
    {
      id: "7",
      text: "Amazon Music",
      subMenu: [
        {
          text: "Riproduci In Streaming",
          value: "1",
        },
        {
          text: "Amazon Music Unlimited",
          value: "2",
        },
        {
          text: "Amazon Music Prime",
          value: "3",
        },
      ],
      isHighlight: false,
      isSeparator: false,
    },
  ];