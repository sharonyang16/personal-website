import { useState } from 'react';

const useExpand = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return {
    isExpanded,
    setIsExpanded,
  };
};

export default useExpand;
