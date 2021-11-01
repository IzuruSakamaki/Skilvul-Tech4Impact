import { CardContainer, CardImage, CardBody, CardPrice, CardProductName } from "./styles/Card";

import Button from "./Button";

const Card = ({ imageUrl, price, productName }) => {
    return (
        <CardContainer width="250px">
            <CardImage src={imageUrl} />
            <CardBody>
                <CardPrice>{price}</CardPrice>
                <CardProductName>{productName}</CardProductName>
                <Button fullWidth />
            </CardBody>
        </CardContainer>
    );
};
export default Card;