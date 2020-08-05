import React from "react";
import styled from "styled-components";

import { Icon } from "./icon";
import Tooltip from "./tooltip";

export default function App() {
  return (
    <Wrapper>
      <div style={{ marginLeft: 300 }}>
        <Tooltip title="Im a tooltip" Component={() => <Infos>lol</Infos>}>
          <Icon style={{ marginTop: 10 }} />
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
