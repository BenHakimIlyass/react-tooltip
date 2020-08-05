import React from "react";

import { useTransition } from "react-spring";
export type Hover = {
  onMouseEnter: () => void;
  onMouseLeave: () => void;
};

export const useTooltip = (): [Hover, any] => {
  const [state, set] = React.useState(false);
  const transitions = useTransition(state, null, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 }
  });
  const handleHover = (): Hover => ({
    onMouseEnter: () => set(prev => !prev),
    onMouseLeave: () => set(prev => !prev)
  });
  return [handleHover(), transitions];
};
