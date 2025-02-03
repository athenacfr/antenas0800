import {
  type CollectionEntry,
  type CollectionKey,
  type DataEntryMap,
  getEntry,
  render,
} from 'astro:content';
import * as R from 'remeda';

export const renderEntry = async <
  C extends keyof DataEntryMap,
  E extends keyof DataEntryMap[C] | (string & {}),
>(
  collection: C,
  id: E,
) => {
  const entry = await getEntry(collection, id);

  if (!entry) return null;

  const { Content } = await render(entry);

  return Content;
};

export const parseEntry = (entry: CollectionEntry<CollectionKey>) => ({
  ...entry,
  name: entry.id.split('/').splice(-1).join('/'),
  subpath: entry.id.split('/').slice(0, -1).join('/'),
});

export const getCollectionSubpaths = (
  entries: CollectionEntry<CollectionKey>[],
) =>
  R.pipe(
    entries,
    R.map((entry) => parseEntry(entry).subpath),
    R.unique(),
  );
