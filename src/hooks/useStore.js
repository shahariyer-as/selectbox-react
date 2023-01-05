import { useState } from "react";

const getDataStore = () => {
  const data = sessionStorage.getItem("input-selector");
  if (data) {
    return JSON.parse(data);
  } else {
    return [];
  }
};
const useStore = () => {
  const [selectors, setSelectors] = useState(getDataStore());
  return [selectors, setSelectors];
};
export default useStore;
