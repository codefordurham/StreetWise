import React from 'react';
import Search from '../Search';

export default {
  title: 'Search Form',
};

export const toStorybook = () => <Search onLocationChange={() => {}}/>

toStorybook.story = {
  name: 'Search',
};
