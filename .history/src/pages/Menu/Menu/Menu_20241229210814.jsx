import React from 'react';
import { Helmet } from 'react-helmet-async';
import Cover from '../../Shared/Cover/Cover';
import menuImg from '../../../assets/menu/menu-bg.jpg';
import dessertImg from '../../../assets/menu/dessert-bg.jpeg';
import useMenu from '../../../Hooks/useMenu';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import MenuCategory from '../MenuCategory/MenuCategory';

const Menu = () => {
    const [menu,loading] = useMenu();
    const dessert = menu.filter(item=> item.category === 'dessert');
    const soup = menu.filter(item=>item.category=== 'soup');
    const salad = menu.filter(item=>item.category=== 'salad');
    const pizza = menu.filter(item=>item.category=== 'pizza');
    const offered = menu.filter(item=>item.category=== 'offered');
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Menu</title>
            </Helmet>
            {/* main cover */}
            <Cover img={menuImg} title={"our menu"}></Cover>

            {/* Offered menu items */}
            <SectionTitle subHeading="Don`t Miss" heading="Today`s Offer"></SectionTitle>
            <MenuCategory coverImg={dessertImg} items={offered}></MenuCategory>

            {/* Dessert Menu Items */}
    
            <MenuCategory items={dessert} title="Dessert" img={img}></MenuCategory>
            

           
        </div>
    );
};

export default Menu;