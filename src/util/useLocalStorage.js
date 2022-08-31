import { useState, useEffect } from "react";

export const useLocalStorage = (storageKey, fallbackState) => {
  const [value, setValue] = useState( 
    (
      localStorage.getItem(storageKey) ? 
        JSON.parse(localStorage.getItem(storageKey)) : 
        fallbackState
    )
  ); // doesn't this just make a copy of the initial data in storage? confuse

  useEffect(() => {
    localStorage.setItem(storageKey, JSON.stringify(value));
    console.log("useLocalStorage");
    // console.log(JSON.parse(localStorage.getItem(storageKey)));
  }, [value, storageKey]);

  return [value, setValue];
};