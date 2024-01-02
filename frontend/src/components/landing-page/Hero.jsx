import { Link } from "react-router-dom";
import { Button } from "../Button";

import { RiTreeFill } from "react-icons/ri";

const LandingPageHero = () => {
  return (
    <div className="landing-head-comp bg-transparent text-center h-lvh w-full text-white flex flex-col items-center justify-center">
      <div className="landing-heading bg-transparent text-8xl text-bold flex flex-row text-green-500">
        Grow <RiTreeFill />
        More
      </div>
      <div className="bg-transparent pt-6">
        <Link to="/Home" className="navigation-link">
          <Button
            ButtonType="btn--outline"
            content="GET STARTED"
            ButtonSize="btn--medium"
          ></Button>
        </Link>
      </div>
    </div>
  );
};

export default LandingPageHero;
