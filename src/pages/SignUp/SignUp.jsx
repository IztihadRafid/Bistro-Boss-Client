import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";

const SignUp = () => {
    const { register, handleSubmit,reset ,watch, formState: { errors }, } = useForm()
    const { createUser,updateUserProfile } = useContext(AuthContext)
    const navigate = useNavigate()
    const location = useLocation()
    const onSubmit = (data) => {
        // console.log(data);
        createUser(data.email, data.password)
            .then(result => {
                const LoggedUser = result.user;
                console.log(LoggedUser);
                updateUserProfile(data.name, data.photoURL)
                .then(()=>{
                    console.log("user profile updated");
                    reset();
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Profile Updated Successfully",
                        showConfirmButton: false,
                        timer: 1500
                      });
                      navigate('/')
                })
                .catch(error=>{
                    console.log(error);
                })
            })
    }

    return (
        <div>
            <Helmet>
                <title>Bistro Boss | SignUP</title>
            </Helmet>
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Sign Up! </h1>
                        <p className="py-6 text-2xl">
                            Welcome to our Restaurent. Please Register
                        </p>
                    </div>
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" {...register("name", { required: true })} name="name" placeholder="Name" className="input input-bordered" />
                                {errors.name && <span className="text-red-600 text-center">Name is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input type="text" {...register("photoURL", { required: true })}  placeholder="Photo URL" className="input input-bordered" />
                                {errors.photoURL && <span className="text-red-600 text-center">Photo is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" {...register("email", { required: true })} name="email" placeholder="Email" className="input input-bordered" />
                                {errors.email && <span className="text-red-600 text-center">Email is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" {...register("password", {
                                    required: true, minLength: 5, maxLength: 15,
                                    pattern: /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{6,}$/
                                })} name="password" placeholder="Password" className="input input-bordered" />
                                {errors.password?.type === 'required' && <p className="text-red-600 text-center">Password is required</p>}
                                {errors.password?.type === 'minLength' && <p className="text-red-600 text-center">Password must be 6 characters</p>}
                                {errors.password?.type === 'maxLength' && <p className="text-red-600 text-center">Password must be less than 15 characters</p>}
                                {errors.password?.type === 'pattern' && <p className="text-red-600 text-center">Password must have one uppercase, lowercase, number and special character</p>}
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">

                                <input className="btn btn-primary" type="submit" value="Sign Up" />
                            </div>
                        </form>
                        <p className='text-center my-5'>Already Have Account? <Link className='text-blue-600' to="/login">Sign In</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;