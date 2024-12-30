import { useState } from "react";
import orderCover from "../../../assets/shop/order.jpg"
import Cover from "../../Shared/Cover/Cover";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useMenu from "../../../Hooks/useMenu";
const Order = () => {
    const [tabIndex,setTabIndex] = useState(0);
    const [menu,loading] = useMenu();
    const dessert = menu.filter(item=> item.category === 'dessert');
    const soup = menu.filter(item=>item.category=== 'soup');
    const salad = menu.filter(item=>item.category=== 'salad');
    const pizza = menu.filter(item=>item.category=== 'pizza');
    const offered = menu.filter(item=>item.category=== 'offered');
    return (
        <div>
            <Cover img={orderCover} title={"Order Food"}></Cover>
            <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                <TabList>
                    <Tab>Salad</Tab>
                    <Tab>Pizza</Tab>
                    <Tab>Soups</Tab>
                    <Tab>Desserts</Tab>
                    <Tab>Drinks</Tab>
                </TabList>
                <TabPanel></TabPanel>
                <TabPanel></TabPanel>
                <TabPanel></TabPanel>
                <TabPanel></TabPanel>
                <TabPanel></TabPanel>
            </Tabs>
        </div>
    );
};

export default Order;