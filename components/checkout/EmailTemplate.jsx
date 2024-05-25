
const EmailTemplate = ({ orderData }) => {
    const { city, country, email, firstName, lastName, phoneNumber, products, streetAddress, subTotal } = orderData;

    return (
        <>
            <h1>Order Confirmation - Your Purchase was Successful!</h1>
            <p>Dear {`${firstName} ${lastName}`},</p>
            <p>Thank you for shopping with us! {`We're`} excited to let you know that your order has been successfully placed.</p>
            <h2>Order Details:</h2>
            <p>Email: {`${email}`}</p>
            <p>Phone: {`${phoneNumber}`}</p>
            <p>Shipping Address: {`${streetAddress}, ${city}, ${country}`}</p>
            <h2>Items Purchased:</h2>
            {
                products.map((product, idx) => <>
                    <h3>
                        {idx + 1}.{product?.name}
                    </h3>
                    <p>Quantity: {product?.items}</p>
                    <p>Price: {product?.price}</p>
                </>)
            }
            <h2>Payment Summary:</h2>
            <p>Subtotal: {subTotal}</p>
            <p>Shipping: Free</p>
            <p>Total: {subTotal}</p>
        </>
    );
};

export default EmailTemplate;