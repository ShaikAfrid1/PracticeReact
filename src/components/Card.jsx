const Card = (props) => {
  return (
    <div className="m-10 bg-fuchsia-200 text-black inline-block p-6 text-center rounded">
      <img
        className="ml-8 h-32 w-32 rounded-full object-cover mb-3"
        src={props.image}
        alt=""
      />
      <h1 className="text-2xl font-semibold mb-4">{props.name}</h1>
      <h4 className="text-blue-400">{props.prof}</h4>
      <h2>
        {props.age}, {props.city}
      </h2>
      <button className="mt-5 hover:bg-emerald-600 active:w-30 bg-emerald-500 text-white px-4 py-2 rounded font-medium">
        Add Friend
      </button>
    </div>
  );
};

export default Card;
