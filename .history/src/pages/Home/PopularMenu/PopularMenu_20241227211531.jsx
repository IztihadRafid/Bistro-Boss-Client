import { useEffect, useState } from "react";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";

const PopularMenu = () => {
    const [menu,settMenu] = useState([])
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