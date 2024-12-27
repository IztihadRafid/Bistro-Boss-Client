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
            </div>
        </div>
        </div>
    );
};

export default Featured;