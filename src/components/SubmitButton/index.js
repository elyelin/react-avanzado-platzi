import React from 'react';
import { Button } from './styles';
//import { SemipolarLoading } from 'react-loadingg';
import PropTypes from 'prop-types';

export const SubmitButton = ({ children, disabled, onClick }) => {
  return (
    <Button disabled={disabled} onClick={onClick}>
      {children}
    </Button>
  );
};
/*<SemipolarLoading />*/

SubmitButton.propTypes = {
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired, // prop de tipo none, es cualquier cosa que react puede renderizar
};
