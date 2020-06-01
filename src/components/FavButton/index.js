import React from 'react';
import { MdFavoriteBorder, MdFavorite } from 'react-icons/md';
import { Button } from './styles';
import PropTypes from 'prop-types';

export const FavButton = ({ liked, likes, onClick }) => {
  const Icon = liked ? MdFavorite : MdFavoriteBorder;

  return (
    <Button onClick={onClick}>
      <Icon size="30px" /> {likes} likes!
    </Button>
  );
};

FavButton.propTypes = {
  liked: PropTypes.bool.isRequired, // prop de tipo Boolean
  likes: PropTypes.number.isRequired, // prop de tipo number
  onClick: PropTypes.func.isRequired, // prop de tipo function
};
