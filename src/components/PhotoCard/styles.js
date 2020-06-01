import styled from 'styled-components';
import { fadeIn } from '../../styles/animation';

export const Article = styled.article`
  min-height: 100px;
`;

export const ImgWrapper = styled.div`
  border-radius: 8px 25px;
  display: block;
  height: 0px;
  overflow: hidden;
  padding: 56.25% 0px 0px;
  position: relative;
  width: 100%;
`;
//56.25%
export const Img = styled.img`
  ${fadeIn()}
  box-shadow: 2px 5px 5px rgba(0, 0, 0, 0, 0.13);
  height: 90%;
  object-fit: cover;
  position: absolute;
  top: 0;
  width: 100%;
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  padding-top: 8px;
  & svg {
    margin-right: 4px;
  }
`;
