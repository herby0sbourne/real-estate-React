import React, { useEffect, useState } from 'react';

const useToolTip = () => {
  const [isTooltipVisible, setIsTooltipVisible] = useState(false);

  const showTooltip = () => {
    setIsTooltipVisible(true);
  };

  useEffect(() => {
    let timer;
    if (isTooltipVisible) {
      timer = setTimeout(() => {
        setIsTooltipVisible(false);
      }, 2000);
    }

    return () => {
      clearTimeout(timer);
    };
  }, [isTooltipVisible]);

  return {
    isTooltipVisible,
    showTooltip,
  };
};

export default useToolTip;
