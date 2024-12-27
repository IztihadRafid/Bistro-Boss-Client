import { useEffect } from "react";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";

const PopularMenu = () => {
    useEffect(()=>{
        fetch("menu.json")
        .then(res=>{res.json()})
        .then(data=>console.log(data))
    },[])
    return (
      <section>
        <SectionTitle heading={"From Our Menu"} subHeading={"Popular Items"}>

        </SectionTitle>
      </section>
    );
};

export default PopularMenu;