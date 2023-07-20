import aboutImage from "../assets/banner/googlevocie_title.png";
import Qrlogo from "../assets/Logo/362293611_596150325997627_n.jpg";
const About = () => {
  return (
    <div className="text-center mt-10">
      <h3 className="text-4xl font-bold mb-5 text-[#00796B]">ABOUT US</h3>
      <img
        className="w-[700px] h-72 mx-auto rounded-xl"
        src={aboutImage}
        alt="img"
      />
      <div className="lg:flex justify-center ml-10 mr-10 mt-10 mb-32 gap-5">
        <div>
          <h1 className="text-start text-2xl">
            Welcome to our website, where we offer a wide range of virtual
            communication solutions to meet your personal and business needs. We
            are a team of experienced professionals who understand the
            importance of reliable and secure communication in today’s world.
            <br />
            <br />
            Our main products are Google Voice, Text Now IDs, and verified US
            Gmail IDs.These services allow you to make and receive calls, send
            and receive texts, and access your email from anywhere in the world,
            using a virtual number or email address that is tied to your
            account. This means that you can stay connected with your contacts,
            clients, and customers, no matter where you are located. <br />
            <br />
            We take great pride in the quality and reliability of our services.
            All of our products are carefully tested and verified to ensure that
            they meet the highest standards of performance and security.br We
            also offer competitive prices and flexible plans to meet the needs
            of our diverse customer base. At our company, we believe in
            providing exceptional customer service. Our team is available to
            answer your questions and provide technical support whenever you
            need it. <br /> <br /> We strive to make your experience with us as
            seamless and stress-free as possible. Thank you for choosing our
            website for your virtual communication needs. We look forward to
            serving you and helping you stay connected in today’s fast-paced
            world.
          </h1>
        </div>
        <div>
          <div className="stats stats-vertical shadow">
            <div className="stat">
              <div className="stat-figure text-[#689f38]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block w-8 h-8 stroke-current"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  ></path>
                </svg>
              </div>
              <div className="stat">Total Customers</div>
              <div className="stat-value">100+</div>
              <div className="stat-desc">Jan 1st - Dec 1st</div>
            </div>

            <div className="stat">
              <div className="stat-figure text-[#689f38]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block w-8 h-8 stroke-current"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                  ></path>
                </svg>
              </div>
              <div className="stat">New Users</div>
              <div className="stat-value">42</div>
              <div className="stat-desc">↗︎ 400 (22%)</div>
            </div>

            <div className="stat">
              <div className="stat-figure text-[#689f38]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block w-8 h-8 stroke-current"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
                  ></path>
                </svg>
              </div>
              <div className="stat">New Registers</div>
              <div className="stat-value">12</div>
              <div className="stat-desc">↘︎ 90 (14%)</div>
            </div>
            <div className="stat">
              <div className="stat-figure text-[#689f38]">
                <img
                  className="w-32 mx-auto mt-10 rounded-2xl"
                  src={Qrlogo}
                  alt="img"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
