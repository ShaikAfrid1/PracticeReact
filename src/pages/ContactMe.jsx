import { useContext } from "react";
import { Datacontext } from "../context/Datacontext";

const ContactMe = () => {
  const data = useContext(Datacontext);

  return <div>contact me {data}</div>;
};

export default ContactMe;
