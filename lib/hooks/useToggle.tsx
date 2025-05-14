import { useState } from 'react';

const useToggle = (toggleFlag: boolean) => {
  const [isShow, setisShow] = useState(toggleFlag);

  const handleToggle = () => {
    setisShow((prevVal) => !prevVal);
  };

  return { isShow, handleToggle };
};

export default useToggle;
