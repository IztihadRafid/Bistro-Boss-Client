
const FoodCard = ({item}) => {
    const {name,image, price,recipe} =item
    return (
        <div className="card bg-base-200 w-96 border-base-100">
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
                    <button className="btn btn-outline border-0 border-yellow-600 text-yellow-600 border-b-4 px-8 bg-slate-300 uppercase ">Add to Cart</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;