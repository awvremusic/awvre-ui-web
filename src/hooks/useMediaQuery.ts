import { useState, useEffect } from 'react';

export const useMediaQuery = (query: string) => {
  const [matches, setMatches] = useState<boolean>(false);
  useEffect(() => {
    if (window) {
      const mediaQuery = window.matchMedia(query);
      const listener = () => setMatches(mediaQuery.matches);
      mediaQuery.addEventListener('change', listener);
      return () => mediaQuery.removeEventListener('change', listener);
    }

    return () => {};
  }, [query]);

  return matches;
};
