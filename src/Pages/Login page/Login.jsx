import { Link } from "react-router-dom";
import loginImg from "../../assets/login page/bg-login.png";
const Login = () => {
    return (
        <div className="hero min-h-screen ">
  <div className="hero-content flex-col lg:flex-row">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold text-center">Login now!</h1>
      <img src={loginImg} alt="" />
    </div>
    <div className="flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <div className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="text" placeholder="email" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="text" placeholder="password" className="input input-bordered" />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn bg-[#689f38] hover:bg-[#6db82d] border-0 text-white">Login</button>
        </div>
        <div className="mt-2">
            <h2>New to here ? please <Link to="/register"><span className="font-bold text-[#00796B] underline">REGISTER</span></Link></h2>
        </div>
      </div>
    </div>
  </div>
</div>
    );
};

export default Login;