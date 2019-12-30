import React from 'react';
import Search from '../Search';

export default {
  title: 'StreetWise',
};

export const toStorybook = () => <Search onLocationChange={() => {}}/>

toStorybook.story = {
  name: 'Search',
};
