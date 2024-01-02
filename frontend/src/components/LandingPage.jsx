import ParticleAnimation from "./ParticleAnimation";

import animationConfig from "../json/particles.json";

const LandingPage = () => {
  return <ParticleAnimation config={animationConfig} />;
};

export default LandingPage;
