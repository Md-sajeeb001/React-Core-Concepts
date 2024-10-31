import { useState } from "react";

const useInputHook = (defaultValu = null) => {
  const [value, setValue] = useState(defaultValu);

  const handelValue = (e) => {
    setValue(e.target.value)
  };
  return [value, handelValue];
};

export default useInputHook;
