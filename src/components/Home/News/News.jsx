import image1 from "../../../assets/news image/market-roundup-20___media_library_original_720_405.jpg";
import image2 from "../../../assets/news image/71DEz+xIFzL.png";
import image3 from "../../../assets/news image/E4GmrwYWUAEIH1I.jpg";
import image4 from "../../../assets/product posters/364036364_113994325112264_5784391397888696761_n.jpg";
import { Slide } from "react-awesome-reveal";

const News = () => {
  return (
    <div className="mb-28">
      <h2 className="text-center text-3xl font-bold text-[#00796B] mb-10 underline">
        News
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mx-10">
        <Slide>
          <div>
            <img src={image1} alt="img" />
            <h2 className="text-[#00796B] text-xl font-bold">
              Bitcoin Mining Firm Sphere 3D Sues Gryphon Digital Over Spoofing
              Attack – Here’s What Happened
            </h2>
            <p>
              Bitcoin mining firm Sphere 3D is suing Gryphon Digital Mining, its
              business partner, for losing about $500,000 worth of Bitcoin due
              to a spoofing attack. The firm accused Gryphon CEO Rob Chang of
              sending 18 Bitcoin to a fraudster who pretended to be Sphere 3D’s
              CFO in January. another eight Bitcoin were transferred using the
              same method, according to a Saturday{" "}
              <a
                className="underline font-bold text-[#689f38] lg:tooltip"
                data-tip="Click me"
                href="https://finance.yahoo.com/news/sphere-3d-files-litigation-against-193000246.html?guccounter=1&guce_referrer=aHR0cHM6Ly9ndmNvdW50ZXIuY29tLw&guce_referrer_sig=AQAAAFCUCs4z2V17fcXI9gJg7cFjv7IvyQ1dI5PTNosNdxYx1mwBx3ZHuiWg6OMLmjE0JCqs1vwCoxTqPVDQdZiuw_PUGqcETzDn0H38s8rscfd7TAVDvwtUPFg4Kux4Xb4uDl9KJ9j3vwqcseGaFPqrnnKZjfFFuyAWbqbO7RoKN31L"
              >
                press release
              </a>{" "}
              .
            </p>
          </div>
        </Slide>
        <div>
          <img src={image2} alt="img" />
          <a
            className="text-lg text-[#689f38] lg:tooltip"
            data-tip="Click me"
            href="https://www.investing.com/"
          >
            Investing.com - Financial Markets Worldwide
          </a>
          <span className="loading loading-bars loading-xs text-blue-500"></span>
          <span className="loading loading-bars loading-sm text-yellow-500"></span>
          <span className="loading loading-bars loading-md text-red-500"></span>
          <span className="loading loading-bars loading-lg text-[#689f38]"></span>
        </div>
        <Slide direction="right">
          <div className="space-y-4">
            <img src={image3} alt="img" />
            <img src={image4} alt="img" />
          </div>
        </Slide>
      </div>
    </div>
  );
};

export default News;
