const UserCard = ({id, name, email}) => {
  return (
    <>
      <li
        key={id}
        className="bg-[#3C3D37] pl-3 p-4 rounded shadow hover:bg-[#2b2c27]"
      >
        <h2 className="font-semibold text-2xl">{name}</h2>
        <p className="text-sm text-shadow-white font-thin">{email}</p>
      </li>
    </>
  );
};

export default UserCard;
