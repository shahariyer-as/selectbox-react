import { useEffect, useState } from "react";

const useGetAllSelectors = () => {
  const [selectors, setSelectors] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/selectors")
      .then((res) => res.json())
      .then((data) => setSelectors(data));
  }, []);
  return [selectors, setSelectors];
};
export default useGetAllSelectors;
