import React from 'react';
import ResultsList from './index';
import { shallow } from 'enzyme';

const results = [
  {
    id: 'collective.tiles.advancedstatic',
    name: 'collective.tiles.advancedstatic',
    url: 'https://github.com/collective/collective.tiles.advancedstatic',
    keywords: ['plone', 'plone5', 'collective', 'static', 'tiles', 'advanced'],
  },
  {
    id: 'collective.tiles.collection',
    name: 'collective.tiles.collection',
    url: 'https://github.com/collective/collective.tiles.collection',
    keywords: ['plone', 'plone5', 'collective', 'collection', 'tiles'],
  },
];

it('matches previous snapshot', () => {
  expect(shallow(<ResultsList results={results} />)).toMatchSnapshot();
});
