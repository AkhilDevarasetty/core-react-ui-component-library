import { useState } from 'react';

const useToggle = (toggleFlag?: boolean) => {
  const [isShow, setisShow] = useState(toggleFlag);

  const handleToggle = (toggleParam?: boolean) => {
    if (
      toggleParam !== undefined &&
      !(toggleParam && typeof toggleParam === 'object' && 'nativeEvent' in toggleParam)
    ) {
      setisShow(toggleParam);
    } else {
      setisShow((prevVal) => !prevVal);
    }
  };

  return { isShow, handleToggle };
};

export default useToggle;
