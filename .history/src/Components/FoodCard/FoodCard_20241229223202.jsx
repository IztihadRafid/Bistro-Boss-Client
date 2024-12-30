
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
                <div className="card-actions justify-end">
                    <button className="btn btn-outline">Add to Cart</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;