import { Fragment } from "react";
import { Button } from "../../../component";
import "./style.css";
export default function LandingSection() {
  return (
    <Fragment>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-24 landing-container">
        {/* section message */}
        <div className="w-full landing-text-wrapper flex flex-col justify-between">
          <div>
            <h2 className="text-left landing-text text-lg">
              Our Mission is to Empower your Financial Freedom
            </h2>
          </div>
          <div>
            <p className="text-left landing-subtitle">
              We help make dreams happen. Come to us with your dreams of a
              better future and we will make it happen
            </p>
          </div>
          <div>
            <button className="bg-yellow border-yellow hover:bg-white border text-blue  font-bold py-2 rounded w-48">
              Get started now
            </button>
          </div>
        </div>
        <div className="sm:w-full" />
        {/* calculator section */}
      </div>
      {/* calculator */}
      <div className="container border rounded-sm	border-gray calculator-wrapper grid grid-cols-1 md:grid-cols-4 gap-2 mt-36 shadow-sm">
        <div className="w-full">
          <select className="input block w-full mt-1 rounded-md bg-gray border-gray focus:border-blue focus:bg-white focus:ring-0">
            <option>Select Product</option>
          </select>
        </div>
        <div className="w-full">
          <input
            type="text"
            class="input block w-full mt-1 rounded-md bg-gray border-gray focus:border-blue focus:bg-white"
            placeholder="How much do want to invest?"
          />
        </div>
        <div className="sm:w-full">
          <select className="input block w-full mt-1 rounded-md bg-gray border-gray focus:border-blue focus:bg-white focus:ring-0">
            <option>For How long?</option>
          </select>
        </div>
        <div className="w-full">
          <Button
            title="Calculate"
            textColor="text-white"
            bgColor="bg-green"
            extraClass="input w-full"
          />
        </div>
      </div>
    </Fragment>
  );
}
