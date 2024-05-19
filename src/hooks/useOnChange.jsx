import { useState } from "react";

const useOnChange = (initial) => {
  const [value, setValue] = useState(initial ?? "");

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return [value, handleChange];
};
export default useOnChange;
