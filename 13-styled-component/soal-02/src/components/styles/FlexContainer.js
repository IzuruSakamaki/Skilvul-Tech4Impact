import styled from "styled-components";

const FlexContainer = styled.div.attrs((props) => {
  const direction = props.direction || "row";
  const justify = props.justify || "center";
  const align = props.align || "center";

  return {
    direction: direction,
    justify: justify,
    align: align,
  };
})`
  display: flex;
  height: 100vh;
  flex-flow: ${(props) => props.direction} wrap;
  justify-content: ${(props) => props.justify};
  align-items: ${(props) => props.align};
`;

export default FlexContainer;