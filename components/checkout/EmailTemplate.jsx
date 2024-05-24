
const EmailTemplate = ({ orderData }) => {
    const { city, country, email, firstName, lastName, phoneNumber, products, streetAddress } = orderData;

    return (
        <>
            <h1><span>{`${firstName} ${lastName}`}</span> Thanks for buying from us!</h1>
            <p>Name: {`${firstName} ${lastName}`}</p>
            <p>Email: {`${email}`}</p>
            <p>Phone: {`${phoneNumber}`}</p>
            <p>Location: {`${city}, ${country}`}</p>
            <p>Address: {`${streetAddress}`}</p>
            {
                products.map((product, idx) => <>
                    <p>{idx + 1}.{product?.name} X{product?.items} price {product?.price}</p>
                </>)
            }
        </>
    );
};

export default EmailTemplate;