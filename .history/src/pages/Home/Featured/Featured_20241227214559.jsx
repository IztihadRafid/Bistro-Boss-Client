import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import featuredImg from "../../../assets/home/featured.jpg"

const Featured = () => {
    return (
        <div>
            <SectionTitle heading={"Featured Item"} subHeading={"Check It Out"}></SectionTitle>
        <div>
            <div>
                <img src={featuredImg} alt="" />
            </div>
            <div>
                <p>Aug 20, 2025</p>
                <p className="uppercase">Where Can i GET SOME</p>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum incidunt, molestias eos porro maiores quia tenetur aliquid ullam dolores nobis quisquam earum, perspiciatis accusamus adipisci voluptatem maxime placeat odit quas provident eaque fugit. Vero aut natus quidem beatae expedita similique veniam. Explicabo minima modi facere ipsum laborum consequatur incidunt cumque.</p>
                <button className="btn btn-outline">Order Now</button>
            </div>
        </div>
        </div>
    );
};

export default Featured;