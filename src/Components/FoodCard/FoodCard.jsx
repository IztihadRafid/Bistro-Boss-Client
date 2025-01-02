import Swal from "sweetalert2";
import useAuth from "../../Hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import useCart from "../../Hooks/useCart";

const FoodCard = ({ item }) => {
    const { _id, name, image, price, recipe } = item;
    const { user } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const axiosSecure = useAxiosSecure();
    const [,refetch] = useCart()
    const handleAddToCart = () => {
        // console.log(food,user.email);
        if(user && user.email){
            // send cart item to database
            const cartItem={
                menuId: _id,
                email: user.email,
                name,
                image,
                price
            }
            axiosSecure.post('/carts',cartItem)
            .then(res=>{
                console.log(res.data);
                if(res.data.insertedId){
                    Swal.fire({
                        position: "top-center",
                        icon: "success",
                        title: `${name} Added to the Cart`,
                        showConfirmButton: false,
                        timer: 1500
                      });
                      //refetch cart
                      refetch()
                }
            })
            .catch()
        }
        else{

            //Sending Login page if not logged in
            Swal.fire({
                title: "You are not logged in!",
                text: "Please Login first",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, Log in"
              }).then((result) => {
                if (result.isConfirmed) {
                  //send user to login page
                  navigate('/login', {state: {from: location} })
                }
              });
        }
    }
    return (
        <div className="card bg-base-200 w-96 shadow-xl">
            <figure>
                <img
                    src={image}
                    alt="foodcard" />
            </figure>
            <p className="bg-slate-900 text-white absolute right-0 mr-4 mt-4 px-4">${price}</p>
            <div className="card-body  text-center">
                <h2 className="card-title font-bold">{name}</h2>
                <p>{recipe}</p>
                <div className="card-actions justify-center">
                    <button onClick={handleAddToCart} className="btn btn-outline border-0 border-yellow-600 text-yellow-600 border-b-4 px-8 bg-slate-300 uppercase ">Add to Cart</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;