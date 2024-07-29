// import { useState, useEffect } from 'react';

// const useMediaQuery = (query) => {
//   const [matches, setMatches] = useState(window.matchMedia(query).matches);

//   useEffect(() => {
//     const mediaQueryList = window.matchMedia(query);
//     const listener = (event) => setMatches(event.matches);

//     mediaQueryList.addEventListener('change', listener);
//     return () => mediaQueryList.removeEventListener('change', listener);
//   }, [query]);

//   return matches;
// };

// export default useMediaQuery;

import { useEffect, useState } from 'react';

const useMediaQuery = (query) => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const mediaQueryList = window.matchMedia(query);

    const handleChange = (event) => {
      setMatches(event.matches);
    };

    // Initial check
    setMatches(mediaQueryList.matches);

    // Add event listener
    mediaQueryList.addEventListener('change', handleChange);

    // Cleanup event listener on unmount
    return () => {
      mediaQueryList.removeEventListener('change', handleChange);
    };
  }, [query]);

  return matches;
};

export default useMediaQuery;
