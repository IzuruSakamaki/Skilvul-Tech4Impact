import styled from "styled-components";

const CardContainer = styled.div.attrs((props) => {
  const width = props.width || "100%";

  return {
    width: width,
  };
})`
  border: 1px solid rgba(192, 192, 192, 0.5);
  border-radius: 0.5em;
  margin: 5px;
  width: ${(props) => props.width};
  -webkit-box-shadow: 0px 5px 5px 0px rgba(0, 0, 0, 0.25);
  -moz-box-shadow: 0px 5px 5px 0px rgba(0, 0, 0, 0.25);
  box-shadow: 0px 5px 5px 0px rgba(0, 0, 0, 0.25);
`;

const CardImage = styled.img`
  width: 100%;
  height: 250px;
  border-top-left-radius: 0.5em;
  border-top-right-radius: 0.5em;
`;

const CardBody = styled.div`
  padding: 1em;
  text-align: center;
`;

const CardPrice = styled.h5`
  font: 600 1.25em sans-serif;
  margin: 0;
  margin-bottom: 0.5em;
`;

const CardProductName = styled(CardPrice).attrs({
  as: "h6",
})`
  color: gray;
`;

export { CardContainer, CardImage, CardBody, CardPrice, CardProductName };