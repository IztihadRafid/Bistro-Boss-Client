import { useForm } from "react-hook-form";
import SectionTitle from "../../Components/SectionTitle/SectionTitle";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`
const AddItems = () => {
    const { register, handleSubmit,reset } = useForm()
    const axiosPublic = useAxiosPublic();
    const axiosSecure = useAxiosSecure()
    const onSubmit = async (data) => {
        // console.log(data)
        // image upload to imgbb then get url
        const imageFile = { image: data.image[0] }
        const res = await axiosPublic.post(image_hosting_api, imageFile, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
        if (res.data.success) {
            //send the menu data to the server with image url
           const menuItem = {
                name: data.name,
                catagory: data.catagory,
                price: parseFloat(data.price),
                recipe: data.recipe,
                image: res.data.data.display_url
            }
            const menuRes = await axiosSecure.post("/menu", menuItem);
            console.log(menuRes.data);
            if (menuRes.data.insertedId) {
                //show success popup
                reset();
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `${data.name} is added to the menu.`,
                    showConfirmButton: false,
                    timer: 1500
                  });

            }
        }
         console.log(res.data);

    }
    return (
        <div>
            <SectionTitle heading="Add An Item" subHeading="What's New">
            </SectionTitle>
            <div className="max-w-4xl mx-auto bg-gray-200 px-10 py-10 rounded-lg">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <label className="form-control my-6 max-w-3xl">
                        <div className="label">
                            <span className="label-text">Recipe Name</span>
                        </div>
                        <input {...register("name", { required: true })} type="text" placeholder="Recipe name" className="input input-bordered " />
                    </label>
                    <div className="lg:flex gap-6 lg:max-w-3xl ">
                        {/* category */}
                        <div className="lg:w-1/2">
                            <label className="form-control my-6">
                                <div className="label">
                                    <span className="label-text">Category</span>
                                </div>
                                <select defaultValue="default" {...register("category", { required: true })} className="select select-bordered w-full ">
                                    <option disabled value="default">Select a Category</option>
                                    <option value="salad">Salad</option>
                                    <option value="pizza">Pizza</option>
                                    <option value="soup">Soup</option>
                                    <option value="dessert">Dessert</option>
                                    <option value="drinks">Drinks</option>

                                </select>
                            </label>
                        </div>
                        {/* price */}
                        <div className="lg:w-1/2">
                            <label className="form-control  my-6">
                                <div className="label">
                                    <span className="label-text">Price</span>
                                </div>
                                <input {...register("price", { required: true })} type="number" placeholder="Price" className="input input-bordered w-full" />
                            </label>
                        </div>

                    </div>
                    {/* recipe details */}
                    <label className="form-control my-6">
                        <div className="label">
                            <span className="label-text">Recipe Details</span>
                        </div>
                        <textarea {...register("recipe", { required: true })} className="textarea textarea-bordered h-24" placeholder="Type Details"></textarea>
                    </label>
                    <div className="form-control my-6">
                        <input {...register("image", { required: true })} type="file" className="file-input w-full max-w-xs" />
                    </div>
                    <button className="hover:bg-amber-500 hover:text-amber-950 rounded-xl text-white font-bold px-8 py-4 bg-amber-700">Add Item</button>
                </form>
            </div>
        </div>
    );
};

export default AddItems;