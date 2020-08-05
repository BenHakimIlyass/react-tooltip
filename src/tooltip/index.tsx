import React from "react";
import useMeasure from "react-use-measure";
import { animated } from "react-spring";

import { useTooltip } from "./useTooltip";
import { bypassBorders } from "./helper";

type Props = {
  children: JSX.Element | JSX.Element[];
  Component: any;
};

const Tooltip = ({ children, Component }: Props) => {
  const [hover, transitions] = useTooltip();
  const [ref, { top, height }] = useMeasure();

  return (
    <div>
      {transitions.map(
        ({ item, key, props }: any) =>
          item && (
            <animated.div
              style={{
                position: "absolute",
                ...props,
                ...bypassBorders(top, height)
              }}
              key={key}
            >
              <Component />
            </animated.div>
          )
      )}
      <div {...hover} style={{ position: "relative" }} ref={ref}>
        {children}
      </div>
    </div>
  );
};

export default Tooltip;
