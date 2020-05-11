import React from "react";
import { Anchor, Image } from "./styles";

const DEFAULT_IMAGE =
  "https://media-cdn.tripadvisor.com/media/photo-s/07/d9/9c/ff/invierno-winter.jpg";

export const Category = ({ cover = DEFAULT_IMAGE, path, emoji = "?" }) => (
  <Anchor href={path}>
    <Image src={cover} />
    {emoji}
  </Anchor>
);
