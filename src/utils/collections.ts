import {
  type CollectionEntry,
  type CollectionKey,
  type DataEntryMap,
  getCollection,
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

export type ExtendedCollection = ReturnType<typeof extendCollection>;
export type ExtendedCollectionEntry = ExtendedCollection[number];

export const extendCollection = <C extends keyof DataEntryMap>(
  entries: CollectionEntry<C>[],
) => {
  return R.pipe(
    entries,
    R.flatMap((post) => {
      const path = post.id;

      const subpaths = path
        .split('/')
        .map((_, index, array) => array.slice(0, index).join('/'));

      return [
        ...(path !== 'index' ? [{ path }] : []),
        ...subpaths.map((subpath) => ({ path: subpath })),
      ];
    }),
    R.uniqueBy((entry) => entry.path),
    R.map((entry) => {
      const post = entries.find((post) => post.id === (entry.path || 'index'));
      const name = entry.path.split('/').slice(-1).join('/');

      return { ...entry, name, post };
    }),
    R.sort((a, b) =>
      !a.post?.data.year
        ? -1
        : b.post?.data.year
          ? b.post.data.year - a.post.data.year
          : 0,
    ),
    (array) =>
      R.map(array, (entry) => {
        const related = array.filter((currentEntry) => {
          const dir = `/${currentEntry.path}`.split('/').at(-2);

          return dir === entry.path && currentEntry.path !== entry.path;
        });

        return { ...entry, related };
      }),
    // R.sort((entry) => (entry.related ? 1 : -1)),
  );
};
