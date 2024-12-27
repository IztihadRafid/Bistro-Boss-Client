

const MenuItem = ({item}) => {
    const {name,image, price,recipe} =item
    return (
        <div>
            <img className="w-[120px]" src={image} alt="" />
            <div>
                <h3 className="uppercase">{name}-----------</h3>
                <p>{recipe}</p>
            </div>
            <p>{price}</p>
        </div>
    );
};

export default MenuItem;