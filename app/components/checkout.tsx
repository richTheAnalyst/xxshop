
import { useCart } from "../context/CartContext";



const handleCheckout = async () => {
    const { cart } = useCart();
    const response = await fetch("/api/paystack",{
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            cart,
            email: "put the user mail here",
        }),
    })
    const data = await response.json();

    if(data.url){
        window.location.href = data.url
    }
};

export default handleCheckout;


