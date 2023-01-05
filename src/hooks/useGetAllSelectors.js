import { useEffect, useState } from "react";

const useGetAllSelectors = () => {
  const [inputSelect, setInputSelect] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/selectors")
      .then((res) => res.json())
      .then((data) => setInputSelect(data));
  }, []);
  return [inputSelect, setInputSelect];
};
export default useGetAllSelectors;
