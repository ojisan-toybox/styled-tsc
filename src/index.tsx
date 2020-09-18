import * as React from "react";
import styled from "styled-components";

const Component = () => {
  return (
    <div>
      hello world
      <StyledComponent>aa</StyledComponent>
    </div>
  );
};

const StyledComponent = styled.div`
  color: red;
`;
