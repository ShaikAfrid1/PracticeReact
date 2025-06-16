import { useContext } from "react";
import { Datacontext } from "../context/Datacontext";

const About = () => {
  const user = useContext(Datacontext);
  return <div>About {user}</div>;
};

export default About;
