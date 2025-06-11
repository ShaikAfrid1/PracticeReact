const UserCard = ({ id, name, email, isActive }) => {
  return (
    <>
      <li
        key={id}
        className={`pl-3 p-4 rounded shadow 
        ${isActive ? "bg-green-800 hover:bg-green-600" : "bg-[#3C3D37]"} 
        hover:bg-[#2b2c27]`}
      >
        <h2 className="font-semibold text-2xl">{name}</h2>
        <p className="text-sm text-shadow-white font-thin">{email}</p>
      </li>
    </>
  );
};

export default UserCard;
