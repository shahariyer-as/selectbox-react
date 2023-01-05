import { useEffect, useState } from "react";

const useGetAllSelectors = () => {
  const [inputSelect, setInputSelect] = useState([]);
  useEffect(() => {
    fetch("https://selectbox-react-server.vercel.app/")
      .then((res) => res.json())
      .then((data) => setInputSelect(data));
  }, []);
  return [inputSelect, setInputSelect];
};
export default useGetAllSelectors;
