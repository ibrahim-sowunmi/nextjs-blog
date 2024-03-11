import { NextResponse } from 'next/server'
const stripe = require("stripe")(`${process.env.STRIPE_SECRET_KEY}`);

const calculateOrderAmount = (items) => {
    // Replace this constant with a calculation of the order's amount
    // Calculate the order total on the server to prevent
    // people from directly manipulating the amount on the client
    return 1400;
};

export async function GET(request) {
    // const res = await request.json() // res now contains body
    return NextResponse.json(
        "Get TEST"
    )
}

export async function POST(request) {
    const response = await request.json()
    console.log("RESPONSE", response)
    const { items } = response;

    const paymentIntent = await stripe.paymentIntents.create({
        amount: calculateOrderAmount(items),
        currency: "eur",
        // In the latest version of the API, specifying the `automatic_payment_methods` parameter is optional because Stripe enables its functionality by default.
        automatic_payment_methods: {
            enabled: true,
        },
    });

    console.log(paymentIntent.client_secret)
    return NextResponse.json(
        { clientSecret: paymentIntent.client_secret }
    )

}
