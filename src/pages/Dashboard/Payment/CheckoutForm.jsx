import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import useCart from "../../../Hooks/useCart";
import useAuth from "../../../Hooks/useAuth";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const CheckoutForm = () => {
    const stripe = useStripe();
    const elements = useElements();
    const [error, setError] = useState("");
    const [transactionId,setTransactionId]= useState('')
    const [clientSecret, setClientSecret] = useState("")
    const axiosSecure = useAxiosSecure();
    const { user } = useAuth()
    const navigate = useNavigate()
    const [cart,refetch] = useCart()
    const totalPrice = cart.reduce((total, item) => total + item.price, 0)
    useEffect(() => {
        if(totalPrice>0){
            axiosSecure.post('/create-payment-intent', { price: totalPrice })
            .then(res => {
                console.log(res.data.clientSecret);
                setClientSecret(res.data.clientSecret)
            })
        }
    }, [axiosSecure, totalPrice])

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!stripe || !elements) {
            return;
        }
        const card = elements.getElement(CardElement);
        if (card === null) {
            return;
        }
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        })
        if (error) {
            console.log("Payment Error: ", error);
            setError(error.message)
        }
        else {
            console.log("Payment Mehtod: ", paymentMethod);
            setError("")
        }

        //Confirm Payment
        const {paymentIntent, error:confirmError } = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: card,
                billing_details: {
                    email: user?.email || 'anonymous',
                    name: user?.displayName || 'anonymous'
                }
            }
        })
        if(confirmError){
            console.log('confirm error');
        }
        else{
            console.log('payment intent', paymentIntent);
            if(paymentIntent.status === 'succeeded'){
                console.log('transaction id', paymentIntent.id);
                setTransactionId(paymentIntent.id)

                //now save the payment in the database
                const payment= {
                    email: user.email,
                    price : totalPrice,
                    transactionId: paymentIntent.id,
                    date: new Date(), // utc date convert .user moment js
                    cartIds: cart.map(item=> item._id),
                    menuItemIds : cart.map(item=>item.menuId),
                    status : 'pending'
                }
              const res= await axiosSecure.post('/payments',payment);
              console.log('payment saved',res.data);
              
              if(res.data?.paymentResult?.insertedId){
                refetch()
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Paid Succesfully",
                    showConfirmButton: false,
                    timer: 1500
                  });
                  navigate('/dashboard/paymentHistory')
              }
            }
        }
    }
    return (

        <div className="border-2 border-amber-700 rounded-lg bg-slate-50 p-16">
            <form onSubmit={handleSubmit}>

                <CardElement className="border-2  p-10 "
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#0f0f0f',
                                '::placeholder': {
                                    color: '#52290e',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button type="submit" className="hover:bg-amber-500 hover:text-amber-950 rounded-xl text-white font-bold px-8 py-4 bg-amber-700 my-10" disabled={!stripe || !clientSecret}>Pay</button>
                <p className="text-red-500">{error}</p>
                    {transactionId && <p className="text-green-600 ">Your Transaction id: {transactionId}</p>}
            </form>
        </div>
    );
};

export default CheckoutForm;