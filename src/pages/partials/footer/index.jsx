import "./style.css";
import apple from "../../../assets/images/apple.png";
import android from "../../../assets/images/android.png";
import world from "../../../assets/images/world.png";
import downloadLine from "../../../assets/images/download-line.png";

const Box = ({ img, title, download }) => (
  <div className="w-full md:w-4/12  box justify-evenly flex flex-col items-center bg-green">
    <img src={img} alt={title} />
    <div className="justify-around flex flex-row items-center">
      {download ? <img src={download} alt='"download' /> : <div />}
      <p>{title}</p>
    </div>
  </div>
);
const FooterSection = () => {
  return (
    <footer className="footer-section  md:mt-52  mt-28 flex flex-col items-center justify-center bg-blue">
      <div className="footer-title grid grid-cols-1 md:grid-cols-2 md:gap-x-14 gap-y-14 mt-48">
        <h2>Our channels</h2>
        <p>Get access to sfs life using any of the following plaforms</p>
      </div>
      <div className="container reason-wrapper flex flex-row items-center justify-between mt-10 mb-16 md:gap-x-16 sm:flex-wrap md:flex-no-wrap	">
        {/* <div className="flex flex-row items-center justify-between bg-green download-link md:w-2/3"> */}
        <div className="md:w-2/3 flex flex-row items-center justify-between md:flex-no-wrap flex-wrap">
          <Box
            img={android}
            download={downloadLine}
            title="Download on Play Store"
          />
          <Box
            img={apple}
            download={downloadLine}
            title="Download on App Store"
          />
          <Box img={world} title="Get Started Online" />
        </div>
        <div className="bg-green md:w-1/4">
          <Box img={apple} />
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
