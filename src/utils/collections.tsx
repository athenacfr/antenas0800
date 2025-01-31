import { type DataEntryMap, getEntry, render } from 'astro:content';

export const renderEntry = async <
  C extends keyof DataEntryMap,
  E extends keyof DataEntryMap[C] | (string & {}),
>(
  collection: C,
  id: E,
) => {
  const grafiaEntry = await getEntry(collection, id);

  if (!grafiaEntry) throw new Error('Entry not found');

  const { Content } = await render(grafiaEntry);

  return Content;
};
