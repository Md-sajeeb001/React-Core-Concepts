import { useState } from "react";

const useFromHook = (defaultValu = null) => {
  const [value, setValue] = useState(defaultValu);

//   const handelChange = (e) => {
//     setValue(e.target.value)
//   };

  const onChange = (e) => {
    setValue(e.target.value)
  };
  return {
    value,
    onChange
  }
};

export default useFromHook;
