import { Form, Link, useNavigate } from "react-router-dom";
import loginImg from "../../assets/login page/bg-login.png";

import { useForm } from "react-hook-form";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";

const Login = () => {
  const {signIn} = useContext(AuthContext);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    signIn(data.email, data.password)
    .then((result )=> {
      const loggedUser = result.user;
      console.log(loggedUser);
      Swal.fire(
        'Welcome to Google voice hunter',
        'Login successful!',
        'success'
      )
    })
    reset()
    navigate('/')
  };

  return (
    <div className="hero min-h-screen ">
      <div className="hero-content flex-col lg:flex-row">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold text-center">Login now!</h1>
          <img src={loginImg} alt="" />
        </div>
        <div className="flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <Form onSubmit={handleSubmit(onSubmit)} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                {...register("email", { required: true })}
                placeholder="email"
                className="input input-bordered"
              />
              {errors.email && <span className="mt-2 text-red-500">@Email is required</span>}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                {...register("password", { required: true, minLength: 6 })}
                placeholder="password"
                className="input input-bordered"
              />
              {errors.password?.type === "required" && (
                <p className="mt-2 text-red-500" role="alert">Please set your password</p>
              )}
              {errors.password?.type === "minLength" && (
                <p className="mt-2 text-red-500" role="alert">Password must be 6 ****** characters</p>
              )}
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <input
                type="submit"
                value="Login"
                className="btn bg-[#689f38] hover:bg-[#6db82d] border-0 text-white"
              />
            </div>
            <div className="mt-2">
              <h2>
                New to here ? please{" "}
                <Link to="/register">
                  <span className="font-bold text-[#00796B] underline">
                    REGISTER
                  </span>
                </Link>
              </h2>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Login;
