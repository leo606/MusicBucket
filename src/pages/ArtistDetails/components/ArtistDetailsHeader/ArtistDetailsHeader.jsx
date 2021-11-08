import React from 'react';
import { useSelector } from 'react-redux';
import ArtistDetailsHeaderStyled from './ArtistDetailsHeader.styled';

function ArtistDetailsHeader() {
  const { name, disambiguation } = useSelector(({ artist }) => artist);

  return (
    <ArtistDetailsHeaderStyled>
      <h1>{name}</h1>
      <h3>{disambiguation}</h3>
    </ArtistDetailsHeaderStyled>
  );
}

export default ArtistDetailsHeader;
