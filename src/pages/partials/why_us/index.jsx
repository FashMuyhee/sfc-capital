import "./style.css";
import bar from "../../../assets/images/bar.png";
import leaf from "../../../assets/images/leaf.png";
import sun from "../../../assets/images/sun.png";

const Box = ({ img, title, subtitle }) => (
  <div className="w-full  box justify-evenly	flex flex-col items-center">
    <div className="box-icon shadow rounded items-center justify-center flex">
      <img src={img} alt={title} />
    </div>
    <div>
      <h3 className="text-center text-blue" style={{ fontSize: 25 }}>
        {title}
      </h3>
    </div>
    <div>
      <p className="text-center text-gray-2" style={{ fontSize: 14 }}>
        {subtitle}
      </p>
    </div>
  </div>
);
const WhyUsSection = () => {
  return (
    <div className="why-us-section  md:mt-52  mt-28 flex flex-col items-center justify-center">
      <div>
        <p className="text-center why-us-text">
          Your guide to financial wellness
        </p>
      </div>
      <div className="container reason-wrapper grid grid-cols-1 md:grid-cols-3 md:gap-x-14 gap-y-14 mt-36">
        <Box
          title="Invest for growth"
          subtitle="Invest with us and see your wealth grow"
          img={bar}
        />
        <Box 
          title="Think of the rainy day"
          subtitle="Get ready for the rainy day. Invest today in our growth instrument."
          img={sun}
        />
        <Box
          title="Grow your knowledge"
          subtitle="Learn how to get more from your money with easy-to-understand articles and videos from financial experts."
          img={leaf}
        />
      </div>
    </div>
  );
};

export default WhyUsSection;
