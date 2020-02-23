import React from 'react';
import SheetRegion from '../SheetRegion';
import utilitiesSvg from '../images/icon-transportation.svg';

export default {
  title: 'Sheet Region',
};

export const loadingData = () => (
  <SheetRegion title="A title" icon={utilitiesSvg}>
    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
    tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
    At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd
    gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
  </SheetRegion>
);
loadingData.story = {
  name: 'A Region'
};
