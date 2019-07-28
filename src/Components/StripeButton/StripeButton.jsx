import React from 'react';
import StripeCheckout from 'react-stripe-checkout';


const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_NIOK946VO15OT2Lb8fYRQkVU00EIFBbiVV';


    // the token is what is sent to the backend to process the payment.
    const onToken= (token) => {
        alert("Payment Successful");
        console.log(token)
    }
    return (
        <div>
            <StripeCheckout
                label={`Pay Now $${price}.00`}
                name="Crown Clothing Co."
                billingAddress
                shippingAddress
                image='https://svgshare.com/i/CUz.svg'
                description={`Your total is $${price}`}
                amount={priceForStripe}
                panelLabel={'Pay Now'}
                token={onToken}
                stipeKey={publishableKey}
            />
        </div>
    )
}

export default StripeCheckoutButton;