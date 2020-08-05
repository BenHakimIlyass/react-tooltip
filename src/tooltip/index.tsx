import React from "react";
import useMeasure from "react-use-measure";
import { animated } from "react-spring";
import * as CSS from "csstype";

import { useTooltip, Hover } from "./useTooltip";
import { bypassBorders } from "./helper";

type Props = {
  children: JSX.Element | JSX.Element[];
  Component: any;
};
type Hook = {
  hover: Hover;
  transitions: CSS.Properties;
};
const Tooltip = ({ children, Component }: Props) => {
  const [hover, transitions] = useTooltip();
  const [ref, bounds] = useMeasure();

  return (
    <div>
      {transitions.map(
        ({ item, key, props }: any) =>
          item && (
            <animated.div
              style={{
                position: "absolute",
                ...props,
                ...bypassBorders(bounds)
              }}
              key={key}
            >
              <Component />
            </animated.div>
          )
      )}
      <div {...hover} ref={ref}>
        {children}
      </div>
    </div>
  );
};

export default Tooltip;
