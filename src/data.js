// @flow
export type DataItem = {
  id: string,
  name: string,
  url: string,
  keywords: ?Array<string>,
};

const data: Array<DataItem> = [
  {
    id: 'collective.lazysizes',
    name: 'collective.lazysizes',
    url: 'https://github.com/collective/collective.lazysizes',
    keywords: ['plone', 'plone4', 'plone5', 'collective', 'lazysizes', 'lazyload'],
  },
  {
    id: 'collective.perseo',
    name: 'collective.perseo',
    url: 'https://github.com/RedTurtle/collective.perseo',
    keywords: ['plone', 'plone4', 'plone5', 'redturtle', 'collective', 'perseo', 'seo', 'search', 'engine', 'optimization'],
  },
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
  {
    id: 'deployments.buildout.plone',
    name: 'deployments.buildout.plone',
    url: 'https://github.com/RedTurtle/deployments.buildout.plone',
    keywords: ['plone', 'plone4', 'plone5', 'redturtle', 'rt', 'buildout'],
  },
  {
    id: 'deployments.buildout.production',
    name: 'deployments.buildout.production',
    url: 'https://github.com/RedTurtle/deployments.buildout.production',
    keywords: ['plone', 'plone4', 'plone5', 'redturtle', 'rt', 'buildout', 'production'],
  },
  {
    id: 'enzyme',
    name: 'Enzyme',
    url: 'https://github.com/airbnb/enzyme',
    keywords: ['javascript', 'js', 'enzyme', 'testing', 'react', 'airbnb'],
  },
  {
    id: 'enzyme-to-json',
    name: 'Enzyme to json',
    url: 'https://github.com/adriantoine/enzyme-to-json',
    keywords: ['javascript', 'js', 'enzyme', 'json', 'testing', 'react', 'snapshot'],
  },
  {
    id: 'jest',
    name: 'Jest',
    url: 'https://github.com/facebook/jest',
    keywords: ['javascript', 'js', 'jest', 'testing', 'react', 'facebook', 'snapshot'],
  },
  {
    id: 'plone.app.imagecropping',
    name: 'plone.app.imagecropping',
    url: 'https://github.com/collective/plone.app.imagecropping',
    keywords: ['plone', 'plone5', 'collective', 'imagecropping', 'image'],
  },
  {
    id: 'redturtle.tiles.management',
    name: 'redturtle.tiles.management',
    url: 'https://github.com/RedTurtle/redturtle.tiles.management',
    keywords: ['plone', 'plone4', 'plone5', 'redturtle', 'rt', 'tiles', 'management', 'mosaic'],
  },
];

export default data;
