import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";


const Register = () => {
    const {createUser} = useContext(AuthContext);
    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
      } = useForm()
      const onSubmit = data => {
        console.log(data);
        createUser(data.email, data.password)
        .then(result =>{
            const loggedUser = result.user;
            console.log(loggedUser);
            reset()
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Register successful',
                showConfirmButton: false,
                timer: 1500
              })
              navigate('/login')
        })
      };

    return (
        <div className="hero min-h-screen">
  <div className="hero-content flex-col">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold text-center mb-5 text-slate-600">Register now!</h1>
      
    </div>
    <div className="flex-shrink-0 w-[518px] shadow-2xl bg-base-100 mt-7 mb-32">
      <form onSubmit={handleSubmit(onSubmit)}className="card-body">
        <div className="flex gap-5 w-full">
        <div className="form-control">
          <label className="label">
            <span className="label-text">First name</span>
          </label>
          <input type="text" {...register("firstName", { required: true })} placeholder="First name" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Last name</span>
          </label>
          <input type="text" {...register("last name", { required: true })} placeholder="Last name" className="input input-bordered" />
        </div>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" {...register("email", { required: true })} placeholder="email" className="input input-bordered" />
          {errors.exampleRequired && <span>Email address is required</span>}
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" {...register("password",{ required: true, minLength: 6 })} placeholder="password" className="input input-bordered"/>
          {errors.password?.type === "required" && (
                <p className="mt-2 text-red-500" role="alert">Please set your password</p>
              )}
              {errors.password?.type === "minLength" && (
                <p className="mt-2 text-red-500" role="alert">Password must be 6 ****** characters</p>
              )}
        </div>
        <div className="form-control mt-6">
        <button type="submit" className="btn bg-[#689f38] hover:bg-[#6db82d] border-0 text-white hover:text-black">REGISTER</button>
        </div>
        <div className="mt-2">
            <h2>New to here ? please <Link to="/login"><span className="font-bold text-[#00796B] underline">LOGIN</span></Link></h2>
        </div>
        </form> 
    </div>
  </div>
</div>
    );
};

export default Register;