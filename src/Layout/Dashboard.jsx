import { FaBook, FaClipboardList, FaHome, FaListUl, FaShoppingCart } from "react-icons/fa";
import { ImSpoonKnife } from "react-icons/im";
import { IoMdMenu } from "react-icons/io";
import { MdEmail, MdGroups, MdOutlineRateReview, MdOutlineShoppingBag, MdOutlineWorkHistory } from "react-icons/md";
import { SlCalender } from "react-icons/sl";
import { NavLink, Outlet } from "react-router-dom";
import useAdmin from "../Hooks/useAdmin";
import useCart from "../Hooks/useCart";

const Dashboard = () => {
    // const isAdmin = true;
    const [isAdmin] = useAdmin()
    const [cart] = useCart()
    return (
        <div className="flex">
            {/* side bar */}
            <div className="w-72 px-8 min-h-screen text-white bg-amber-800">
                <div className="my-10">
                <h1 className="uppercase text-3xl font-bold font-serif">Bistro Boss</h1>
                <h3 className="uppercase text-xl font-semibold  font-serif">Restaurent</h3>
                </div>
                <ul className="menu text-lg">
                    {
                        isAdmin ? <> <li>
                            <NavLink to="/dashboard/adminHome"><FaHome></FaHome> Admin Home</NavLink>
                        </li>
                            <li>
                                <NavLink to="/dashboard/addItems"><ImSpoonKnife />Add Items</NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/manageItems"><FaListUl />Manage Items</NavLink>
                            </li>
                           
                            <li>
                                <NavLink to="/dashboard/users"><MdGroups />All Users</NavLink>
                            </li>
                           </> : //IF NOT ADMIN
                            <> <li>
                                <NavLink to="/dashboard/userHome"><FaHome></FaHome> User Home</NavLink>
                            </li>
                                <li>
                                    <NavLink to="/dashboard/reservation"><SlCalender />Reservation</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dashboard/cart"><FaShoppingCart></FaShoppingCart>My Cart ({cart.length})</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dashboard/review"><MdOutlineRateReview />Add Review</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dashboard/paymentHistory"><MdOutlineWorkHistory />Payment History</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dashboard/bookings"><FaClipboardList />My Bookings</NavLink>
                                </li></>
                    }
                    {/* Shared Navlinks */}
                    <div className="divider"></div>
                    <li>
                        <NavLink to="/"><FaHome></FaHome>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/order/salad"><IoMdMenu />Menu</NavLink>
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