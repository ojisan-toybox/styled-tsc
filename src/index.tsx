import * as React from "react";
import styled from "styled-components";

class Hello extends React.Component {
  render() {
    return React.createElement("div", null, `Hello`);
  }
}

const Component: React.FC = () => {
  return (
    <div>
      hello world
      <Hello></Hello>
    </div>
  );
};

const StyledComponent = styled.div`
  color: red;
`;
