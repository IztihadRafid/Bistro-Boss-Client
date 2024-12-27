import { useEffect, useState } from "react";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import MenuItem from "../../Shared/MenuItem/MenuItem";

const PopularMenu = () => {
    const [menu,setMenu] = useState([]);
    useEffect(()=>{
        fetch("menu.json")
        .then(res=>res.json())
        .then(data=>{
            const popularItems = data.filter(item=> item.category ==="popular");
            setMenu(popularItems)
        })
    },[])
    return (
      <section>
        <SectionTitle heading={"From Our Menu"} subHeading={"Popular Items"}></SectionTitle>

        <div className="grid grid-cols-2">
            {
                menu.map(item => <MenuItem key={item._id}item={item}></MenuItem>)
            }
        </div>
      </section>
    );
};

export default PopularMenu;