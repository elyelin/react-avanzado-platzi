import React from 'react';
import { ListOfPhotoCards } from '../container/ListOfPhotoCards';
import { ListOfCategories } from '../components/ListOfCategories';
import { Layout } from '../components/Layout';

const HomePage = ({ categoryId }) => {
  return (
    <Layout
      title={'Tu app de fotos de invierno'}
      subtitle={
        'Con Wintergram encontraras fotosde los lugares mas hermosos para vacaciones de inverno'
      }>
      <ListOfCategories />
      <ListOfPhotoCards categoryId={categoryId} />
    </Layout>
  );
};

export const Home = React.memo(HomePage, (prevProps, props) => {
  return prevProps.categoryId === props.categoryId;
});
