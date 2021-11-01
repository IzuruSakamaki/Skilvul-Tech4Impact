import styled from "styled-components";

const StyledButton = styled.button.attrs((props) => {
  const color = props.outline ? "lightblue" : "white";
  const bgColor = props.outline ? "white" : "lightblue";
  const fullWidth = props.fullWidth ? "100%" : "auto";
  const colorOnHover = props.outline ? "lightblue" : "cornflowerblue";

  return {
    color: color,
    bgColor: bgColor,
    fullWidth: fullWidth,
    colorOnHover: colorOnHover,
  };
})`
  cursor: pointer;
  padding: 0.5em 1.5em;
  font: 1.25em sans-serif;
  border: 1px solid ${(props) => props.color};
  background-color: ${(props) => props.bgColor};
  color: ${(props) => props.color};
  width: ${(props) => props.fullWidth};
  &:hover {
    border: 1px solid ${(props) => props.colorOnHover};
    background-color: ${(props) => props.colorOnHover};
    color: white;
  }
`;

export default StyledButton;