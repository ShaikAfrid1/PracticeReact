import { Datacontext } from "./Datacontext";

const UserContext = (props) => {
  //   console.log(props.children);

  const user = "Afrid";

  return (
    <div>
      <Datacontext.Provider value={user}>{props.children}</Datacontext.Provider>
    </div>
  );
};

export default UserContext;
