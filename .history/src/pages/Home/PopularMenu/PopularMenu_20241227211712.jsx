import { useEffect, useState } from "react";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";

const PopularMenu = () => {
    const [menu,setMenu] = useState([])
    useEffect(()=>{
        fetch("menu.json")
        .then(res=>{res.json()})
        .then(data=>setMenu(data))
    },[])
    return (
      <section>
        <SectionTitle heading={"From Our Menu"} subHeading={"Popular Items"}>

        </SectionTitle>
        <p>{menu.length}</p>
      </section>
    );
};

export default PopularMenu;