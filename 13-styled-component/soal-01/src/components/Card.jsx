import { CardContainer, CardImage, CardBody, CardPrice, CardProductName } from "./styles/Card";

import Button from "./Button";

const Card = () => {
    return (
        <CardContainer width="500px">
            <CardImage src="https://images.unsplash.com/photo-1521369909029-2afed882baee?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80" />
            <CardBody>
                <CardPrice>Rp 200000</CardPrice>
                <CardProductName>Hat</CardProductName>
                <Button fullWidth />
            </CardBody>
        </CardContainer>
    );
};
export default Card;