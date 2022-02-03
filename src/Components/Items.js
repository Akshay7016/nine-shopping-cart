import React from "react";

import {
    Card,
    CardImg,
    CardBody,
    CardText,
    CardTitle,
    Button
} from "reactstrap"

const Items = ({addInCart, product}) => {
    return(
        <Card className="mt-2 mb-1">
            <CardImg top height="250" width="100%" src={product.smallImage}/>

            <CardBody className="text-center">
                <CardTitle className="font-weight-bold">{product.productName}</CardTitle>
                <CardText className="secondary">
                    Price: Rs {product.productPrice}
                </CardText>

                <Button className="btn-success" onClick={() => addInCart(product)}>
                    Add to cart
                </Button>
            </CardBody>
        </Card>
    )
}

export default Items;