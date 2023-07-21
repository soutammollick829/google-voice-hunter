import { Link } from "react-router-dom";

const Register = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col ">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold mt-10 mb-3">Register now!</h1>
    </div>
    <div className="card flex-shrink-0 w-full shadow-2xl  mb-32">
      <div className="card-body">
        <div className="flex gap-4">
        <div className="form-control">
          <label className="label">
            <span className="label-text">First name</span>
          </label>
          <input type="text" placeholder="name" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Last name</span>
          </label>
          <input type="text" placeholder="name" className="input input-bordered" />
        </div>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" className="input input-bordered" />
        </div>
        <div className="form-control mt-6">
          <button className="btn bg-[#689f38] hover:bg-[#6db82d] border-0 text-white">Register</button>
        </div>
        <div className="mt-2">
            <h2>Already have an account? please <Link to="/login"><span className="font-bold text-[#00796B] underline">LOGIN</span></Link></h2>
        </div>
      </div>
    </div>
  </div>
</div>
    );
};

export default Register;