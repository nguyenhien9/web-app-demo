import {
  english,
  vietnamese,
  thai,
  french,
  chinese,
  japanese,
  notre,
  effiel,
  seine,
  notre_1,
  notre_2,
  notre_3,
  effiel_1,
  effiel_2,
  effiel_3,
  seine_1,
  seine_2,
  seine_3,
  audio,
} from "../assets";

import { BiSolidDownload } from "react-icons/bi";
import { GoPlay } from "react-icons/go";
import { BsMap, BsListUl, BsKeyboard } from "react-icons/bs";

export const buttons = [
  { id: "download", text: "Start download", icon: <BiSolidDownload /> },
  { id: "start", text: "Start the visit", icon: <GoPlay /> },
];
export const languages = [
  { id: "vi", lang: "Vietnamese", icon: vietnamese },
  { id: "en", lang: "English", icon: english },
  { id: "fre", lang: "French", icon: french },
  { id: "cn", lang: "Chinese", icon: chinese },
  { id: "jp", lang: "Japanese", icon: japanese },
  { id: "thai", lang: "Thailand", icon: thai },
];
export const navLinks = [
  { id: "tours", text: "Tours", path: "/tours" },
  { id: "lang", text: "Language", path: "/langs" },
];
export const tours = [
  {
    id: "notre_1",
    name: "Notre-Dame De Paris",
    img: notre,
    images: [
      { id: 1, img: notre_1 },
      { id: 2, img: notre_2 },
      { id: 3, img: notre_3 },
    ],
    coords: { lat: 48.853105929214976, lng: 2.3497845960845005 },
    desc: "Notre-Dame de Paris is a Roman Catholic cathedral in Paris, France. The church’s name means “Our Lady of Paris” in French. Also known as Notre-Dame Cathedral, it is the most famous of the Gothic cathedrals of the Middle Ages and is distinguished for its size, antiquity, and architectural interest.",
    audioLists: [
      {
        id: 101,
        title: "POI title 1",
        thumb: notre,
        src: audio,
        scripts:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
      },
      {
        id: 102,
        title: "POI title 2",
        thumb: notre,
        src: audio,
        scripts:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
      },
      {
        id: 103,
        title: "POI title 3",
        thumb: notre,
        src: audio,
        scripts:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
      },
      {
        id: 104,
        title: "POI title 4",
        thumb: notre,
        src: audio,
        scripts:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
      },
      {
        id: 105,
        title: "POI title 5",
        thumb: notre,
        src: audio,
        scripts:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
      },
      {
        id: 106,
        title: "POI title 6",
        thumb: notre,
        src: audio,
        scripts:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
      },
      {
        id: 107,
        title: "POI title 7",
        thumb: notre,
        src: audio,
        scripts:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
      },
      {
        id: 108,
        title: "POI title 8",
        thumb: notre,
        src: audio,
        scripts:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
      },
      {
        id: 109,
        title: "POI title 9",
        thumb: notre,
        src: audio,
        scripts:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
      },
    ],
  },
  {
    id: "effiel_1",
    name: "Effiel Tower",
    img: effiel,
    images: [
      { id: 1, img: effiel_1 },
      { id: 2, img: effiel_2 },
      { id: 3, img: effiel_3 },
    ],
    audioLists: [
      {
        id: 101,
        title: "POI title 1",
        thumb: notre,
        src: audio,
        scripts:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
      },
      {
        id: 102,
        title: "POI title 2",
        thumb: notre,
        src: audio,
        scripts:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
      },
      {
        id: 103,
        title: "POI title 3",
        thumb: notre,
        src: audio,
        scripts:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
      },
      {
        id: 104,
        title: "POI title 4",
        thumb: notre,
        src: audio,
        scripts:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
      },
      {
        id: 105,
        title: "POI title 5",
        thumb: notre,
        src: audio,
        scripts:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
      },
      {
        id: 106,
        title: "POI title 6",
        thumb: notre,
        src: audio,
        scripts:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
      },
      {
        id: 107,
        title: "POI title 7",
        thumb: notre,
        src: audio,
        scripts:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
      },
      {
        id: 108,
        title: "POI title 8",
        thumb: notre,
        src: audio,
        scripts:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
      },
      {
        id: 109,
        title: "POI title 9",
        thumb: notre,
        src: audio,
        scripts:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
      },
    ],
    coords: { lat: 48.85839827718221, lng: 2.294492029850034 },
    desc: "Eiffel Tower, French Tour Eiffel, Parisian landmark that is also a technological masterpiece in building-construction history. ",
  },
  {
    id: "seine_1",
    name: "Seine River",
    img: seine,
    images: [
      { id: 1, img: seine_1 },
      { id: 2, img: seine_2 },
      { id: 3, img: seine_3 },
    ],
    audioLists: [
      {
        id: 101,
        title: "POI title 1",
        thumb: notre,
        src: audio,
        scripts:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
      },
      {
        id: 102,
        title: "POI title 2",
        thumb: notre,
        src: audio,
        scripts:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
      },
      {
        id: 103,
        title: "POI title 3",
        thumb: notre,
        src: audio,
        scripts:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
      },
      {
        id: 104,
        title: "POI title 4",
        thumb: notre,
        src: audio,
        scripts:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
      },
      {
        id: 105,
        title: "POI title 5",
        thumb: notre,
        src: audio,
        scripts:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
      },
      {
        id: 106,
        title: "POI title 6",
        thumb: notre,
        src: audio,
        scripts:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
      },
      {
        id: 107,
        title: "POI title 7",
        thumb: notre,
        src: audio,
        scripts:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
      },
      {
        id: 108,
        title: "POI title 8",
        thumb: notre,
        src: audio,
        scripts:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
      },
      {
        id: 109,
        title: "POI title 9",
        thumb: notre,
        src: audio,
        scripts:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
      },
    ],
    coords: { lat: 48.63851912385268, lng: 2.448855184663472 },
    desc: "Seine River, river of France, after the Loire its longest. It rises 18 miles (30 kilometres) northwest of Dijon and flows in a northwesterly direction through Paris before emptying into the English Channel at Le Havre.",
  },
  {
    id: "effiel_2",
    name: "Effiel Tower",
    img: effiel,
    images: [
      { id: 1, img: effiel_1 },
      { id: 2, img: effiel_2 },
      { id: 3, img: effiel_3 },
    ],
    audioLists: [
      {
        id: 101,
        title: "POI title 1",
        thumb: notre,
        src: audio,
        scripts:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
      },
      {
        id: 102,
        title: "POI title 2",
        thumb: notre,
        src: audio,
        scripts:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
      },
      {
        id: 103,
        title: "POI title 3",
        thumb: notre,
        src: audio,
        scripts:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
      },
      {
        id: 104,
        title: "POI title 4",
        thumb: notre,
        src: audio,
        scripts:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
      },
      {
        id: 105,
        title: "POI title 5",
        thumb: notre,
        src: audio,
        scripts:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
      },
      {
        id: 106,
        title: "POI title 6",
        thumb: notre,
        src: audio,
        scripts:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
      },
      {
        id: 107,
        title: "POI title 7",
        thumb: notre,
        src: audio,
        scripts:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
      },
      {
        id: 108,
        title: "POI title 8",
        thumb: notre,
        src: audio,
        scripts:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
      },
      {
        id: 109,
        title: "POI title 9",
        thumb: notre,
        src: audio,
        scripts:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
      },
    ],
    coords: { lat: 48.85839827718221, lng: 2.294492029850034 },
    desc: "Eiffel Tower, French Tour Eiffel, Parisian landmark that is also a technological masterpiece in building-construction history. When the French government was organizing the International Exposition of 1889 to celebrate the centenary of the French Revolution, a competition was held for designs for a suitable monument. More than 100 plans were submitted, and the Centennial Committee accepted that of the noted bridge engineer Gustave Eiffel.",
  },
  {
    id: "notre_2",
    name: "Notre-Dame De Paris",
    img: notre,
    images: [
      { id: 1, img: notre_1 },
      { id: 2, img: notre_2 },
      { id: 3, img: notre_3 },
    ],
    coords: { lat: 48.853105929214976, lng: 2.3497845960845005 },
    desc: "Notre-Dame de Paris is a Roman Catholic cathedral in Paris, France. The church’s name means “Our Lady of Paris” in French. Also known as Notre-Dame Cathedral, it is the most famous of the Gothic cathedrals of the Middle Ages and is distinguished for its size, antiquity, and architectural interest.",
    audioLists: [
      {
        id: 101,
        title: "POI title 1",
        thumb: notre,
        src: audio,
        scripts:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
      },
      {
        id: 102,
        title: "POI title 2",
        thumb: notre,
        src: audio,
        scripts:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
      },
      {
        id: 103,
        title: "POI title 3",
        thumb: notre,
        src: audio,
        scripts:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
      },
      {
        id: 104,
        title: "POI title 4",
        thumb: notre,
        src: audio,
        scripts:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
      },
      {
        id: 105,
        title: "POI title 5",
        thumb: notre,
        src: audio,
        scripts:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
      },
      {
        id: 106,
        title: "POI title 6",
        thumb: notre,
        src: audio,
        scripts:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
      },
      {
        id: 107,
        title: "POI title 7",
        thumb: notre,
        src: audio,
        scripts:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
      },
      {
        id: 108,
        title: "POI title 8",
        thumb: notre,
        src: audio,
        scripts:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
      },
      {
        id: 109,
        title: "POI title 9",
        thumb: notre,
        src: audio,
        scripts:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
      },
    ],
  },
];

export const tabs = [
  { id: "map", text: "Map", icon: <BsMap /> },
  { id: "list", text: "List", icon: <BsListUl /> },
  { id: "keyboard", text: "Keyboard", icon: <BsKeyboard /> },
];
