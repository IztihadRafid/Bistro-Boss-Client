import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import featuredImg from "../../../assets/home/featured.jpg"
import './Featured.css'
const Featured = () => {
    return (
        <div className="featured-item bg-fixed text-white pt-8 my-20">
            <SectionTitle heading={"Featured Item"} subHeading={"Check It Out"}></SectionTitle>
        <div className="flex justify-center bg-slate-500 bg-opacity-40 items-center pb-20 pt-12 px-36">
            <div>
                <img src={featuredImg} alt="" />
            </div>
            <div className="md:ml-10">
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