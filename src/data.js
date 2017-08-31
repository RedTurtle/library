// @flow
export type DataItem = {
  id: string,
  name: string,
  url: string,
  keywords: ?Array<string>,
};

const data: Array<DataItem> = [
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
];

export default data;
