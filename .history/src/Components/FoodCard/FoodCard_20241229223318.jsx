
const FoodCard = ({item}) => {
    const {name,image, price,recipe} =item
    return (
        <div className="card bg-base-100 w-96 shadow-xl">
            <figure>
                <img
                    src={image}
                    alt="foodcard" />
            </figure>
            <div className="card-body  text-center">
                <h2 className="card-title font-bold">{name}</h2>
                <p>{recipe}</p>
                <div className="card-actions justify-center">
                    <button className="btn btn-outline border-0 border-yellow-600 text-yellow-600 border-b-4 ">Add to Cart</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;