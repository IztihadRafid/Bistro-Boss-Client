import { FaClipboardList, FaHome, FaShoppingCart } from "react-icons/fa";
import { IoMdMenu } from "react-icons/io";
import { MdEmail, MdOutlineRateReview, MdOutlineShoppingBag, MdOutlineWorkHistory } from "react-icons/md";
import { SlCalender } from "react-icons/sl";
import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
    return (
       <div className="flex">
        {/* side bar */}
        <div className="w-64 min-h-screen bg-amber-400">
            <ul className="menu">
                <li>
                    <NavLink to="/dashboard/userHome"><FaHome></FaHome> User Home</NavLink>
                </li>
                <li>
                    <NavLink to="/dashboard/reservation"><SlCalender />Reservation</NavLink>
                </li>
                <li>
                    <NavLink to="/dashboard/cart"><FaShoppingCart></FaShoppingCart>My Cart</NavLink>
                </li>
                <li>
                    <NavLink to="/dashboard/review"><MdOutlineRateReview />Add Review</NavLink>
                </li>
                <li>
                    <NavLink to="/dashboard/paymentHistory"><MdOutlineWorkHistory />Payment History</NavLink>
                </li>
                <li>
                    <NavLink to="/dashboard/bookings"><FaClipboardList />My Bookings</NavLink>
                </li>
                <div className="divider"></div>
                <li>
                    <NavLink to="/"><FaHome></FaHome>Home</NavLink>
                </li>
                <li>
                    <NavLink to="/order/salad"><IoMdMenu />Menu</NavLink>
                </li>
                <li>
                    <NavLink to="/"><MdOutlineShoppingBag />Shop</NavLink>
                </li>
                <li>
                    <NavLink to="/"><MdEmail />Contact</NavLink>
                </li>
            </ul>
        </div>
        {/* dashboard content */}
        <div className="flex-1 p-8">
            <Outlet></Outlet>
        </div>
       </div>
    );
};

export default Dashboard;