export const isPathnameEqual = (hrefA: string, hrefB: string) => {
  try {
    const urlA = new URL(hrefA, import.meta.env.SITE);
    const urlB = new URL(hrefB, import.meta.env.SITE);

    return urlA.pathname === urlB.pathname;
  } catch {
    return false;
  }
};
