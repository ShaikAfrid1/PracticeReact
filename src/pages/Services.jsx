import { useContext } from "react";
import { Datacontext } from "../context/Datacontext";

const Services = () => {
  const name = useContext(Datacontext);

  return <div>Services {name}</div>;
};

export default Services;
