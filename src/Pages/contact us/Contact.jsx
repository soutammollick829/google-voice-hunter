const Contact = () => {
  return (
    <div className="-mt-2 lg:mx-10 mb-32">
      <div
        className="hero lg:min-h-screen"
        style={{
          backgroundImage:
            "url(https://www.bu.edu/parentsprogram/files/pexels-charlotte-may-5965930-650x433.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="lg:flex items-center gap-8 text-center lg:text-start">
          <div className="lg:w-1/2">
            <h1 className="mb-5 text-5xl font-bold text-white ml-10 mt-5">Contact us</h1>
            <div>
              <div className="">
                <div className="card-body">
                  <div className="form-control">
                    <label className="label">
                      <span className="text-white">Name</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Your name..."
                      className="input input-bordered"
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="text-white">Email</span>
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="Your email..."
                      className="input input-bordered"
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="text-white">Subject</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Type here"
                      className="input input-bordered"
                    />
                  </div>
                  <label className="label">
                      <span className="text-white">Your message</span>
                    </label>
                  <textarea placeholder="Fell free message me" className="textarea textarea-bordered textarea-md w-full" ></textarea>
                  <div className="form-control mt-6">
                    <button className="btn btn-outline  bg-[#689f38] hover:bg-[#92d458] border-0">send</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2 text-lg space-y-3 mt-10 text-white">
            <h3>Telegram : https://t.me/GoogleVoiceHunter</h3>
            <h3>Whats app : +8801611975125</h3>
            <h3>Facebook : https://www.facebook.com/profile.php?id=100029163254747&mibextid=ZbWKwL</h3>
            <h3>Instagram : https://instagram.com/nguraju?igshid=ZDc4ODBmNjlmNQ==</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
