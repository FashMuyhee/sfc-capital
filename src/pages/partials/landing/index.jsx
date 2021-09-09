
import "./style.css";
export default function LandingSection() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-24 landing-container">
      <div className="sm:w-full landing-text-wrapper flex flex-col justify-between">
        <div>
          <h2 className="text-left landing-text text-lg">
            Our Mission is to Empower your Financial Freedom
          </h2>
        </div>
        <div>
          <p className="text-left landing-subtitle">
            We help make dreams happen. Come to us with your dreams of a better
            future and we will make it happen
          </p>
        </div>
        <div>
          <button className="bg-yellow border-yellow hover:bg-white border text-blue  font-bold py-2 rounded w-48">
            Get started now
          </button>
        </div>
      </div>
      <div className="sm:w-full" />
    </div>
  );
}
