import { FaTrash } from "react-icons/fa";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import useMenu from "../../../Hooks/useMenu";
import { FaRegPenToSquare } from "react-icons/fa6";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { Link } from "react-router-dom";

const ManageItems = () => {
    const [menu,loading,refetch] = useMenu();
    const axiosSecure = useAxiosSecure()
    const handleDeleteItem = (item) => {
        //
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then(async (result) => {
            if (result.isConfirmed) {
                const res = await axiosSecure.delete(`/menu/${item._id}`)
                // console.log(res.data);
                if (res.data.deletedCount > 0) {
                    refetch()
                      Swal.fire({
                        title: "Deleted!",
                        text: `${item.name}  has Deleted`,
                        icon: "success"
                      });
                }

            }
        });
    }
    return (
        <div>
            <SectionTitle heading="Manage All Items" subHeading="Hurry Up!"></SectionTitle>
            <div className="overflow-x-auto">
                <table className="table w-full bg-slate-100">
                    {/* head */}
                    <thead className="bg-slate-400 text-lg">
                        <tr>
                            <th>#</th>
                            <th>Item Image</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Update</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody className="text-lg">

                        {
                            menu.map((item, index) => <tr key={item._id}>
                                <td>{index + 1}</td>
                                <td>
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle h-12 w-12">
                                                <img
                                                    src={item.image}
                                                    alt="Food image" />
                                            </div>
                                        </div>

                                    </div>
                                </td>
                                <td className="">
                                    {item.name}
                                </td>
                                <td className="text-right">${item.price}</td>
                                <td>
                                    <Link to={`/dashboard/updateItem/${item._id}`}><button className="btn btn-ghost btn-lg"><FaRegPenToSquare className="text-xl text-red-500" />  </button></Link>
                                </td>
                                <td>
                                    <button onClick={() => handleDeleteItem(item)} className="btn btn-ghost btn-lg"><FaTrash className="text-xl text-red-500"></FaTrash> </button>
                                </td>
                            </tr>)
                        }


                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default ManageItems;