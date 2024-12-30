import React from 'react';
import { Helmet } from 'react-helmet-async';
import Cover from '../../Shared/Cover/Cover';
import menuImg from '../../../assets/menu/menu-bg.jpg';
import dessertImg from '../../../assets/menu/dessert-bg.jpeg';
import pizzaImg from '../../../assets/menu/pizza-bg.jpg';
import saladImg from '../../../assets/menu/salad-bg.jpg';
import soupImg from '../../../assets/menu/soup-bg.jpg';
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

            Offered menu items
            <SectionTitle subHeading="Don`t Miss" heading="Today`s Offer"></SectionTitle>
            <MenuCategory items={offered}></MenuCategory>

            {/* Dessert Menu Items */}
            <MenuCategory items={dessert} title="Dessert" img={dessertImg}></MenuCategory>

            {/* pizza menu item */}
            <MenuCategory items={pizza} title="Pizza" img={pizzaImg}></MenuCategory>

            {/* salad menu items*/}
            <MenuCategory item={salad} title="Salad" img={saladImg}></MenuCategory>   

            

           
        </div>
    );
};

export default Menu;