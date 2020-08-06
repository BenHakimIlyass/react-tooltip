import React from "react";
import styled from "styled-components";

import { Icon } from "./icon";
import Tooltip from "./tooltip";

export default function App() {
  return (
    <Wrapper>
      <Tooltip render={() => <Infos>Call me tooltip</Infos>}>
        <Icon />
      </Tooltip>

      <div style={{ marginTop: 150 }}>
        <Tooltip render={() => <Infos>Or call me popper</Infos>}>
          <Icon />
        </Tooltip>
      </div>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  font-family: sans-serif;
`;
const Infos = styled.div`
  position: absolute;
  width: 140px;
  height: 16px;
  text-align: center;
  border-radius: 4px;
  padding: 4px;
  color: white;
  line-height: 16px;
  font-size: 14px;
  font-weight: 600;
  background-color: #4f5560;
  box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.1), 0px 2px 4px rgba(0, 0, 0, 0.12);
`;
