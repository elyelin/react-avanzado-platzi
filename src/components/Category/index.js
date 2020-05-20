import React from 'react';
import { Link, Image } from './styles';

const DEFAULT_IMAGE = '//media-cdn.tripadvisor.com/media/photo-s/07/d9/9c/ff/invierno-winter.jpg';

export const Category = ({ cover = DEFAULT_IMAGE, path = '#', emoji = '?' }) => (
  <Link to={path}>
    <Image src={cover} />
    {emoji}
  </Link>
);
