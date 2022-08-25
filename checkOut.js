import { loadStripe } from "@stripe/stripe-js";

export async function checkOut( priceId){
    let stripePromise = null

    const getStripe=()=>{
        if(!stripePromise){
            // stripePromise=loadStripe(process.env.NEXT_PUBLIC_API_KEY)
            stripePromise=loadStripe("pk_test_51LaO2eA9zEY10SLQAIc3AG7GlVkJiyqpAgUq9qOtlOg1rWkXO8KqqOycNcjhnJydPtiqnb0RSQj6owmecSlOGO0d005Ber42sB")

        }
        return stripePromise
    }
    const stripe = await getStripe()

    await stripe.redirectToCheckout({
        mode: "payment",
        lineItems: [
            {
                // price: process.env.price_5,
                price: priceId,
                quantity: 1
            }
         ],
        successUrl: `${window.location.origin}?session_id={CECKOUT_SESSION_ID}`,
        cancelUrl: window.location.origin
    })
}