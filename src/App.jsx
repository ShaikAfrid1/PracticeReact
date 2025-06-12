import React, { useState } from "react";

const App = () => {
  const [userName, setUserName] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    setUserName("");
    console.log("submitted", userName);
  };

  return (
    <div className="min-h-screen min-w-screen bg-gray-600 text-white">
      <form
        onSubmit={(e) => {
          submitHandler(e);
        }}
      >
        <input
          value={userName}
          onChange={(e) => {
            setUserName(e.target.value);
          }}
          placeholder="Enter Your Name"
          className="px-4 py-3 border-b rounded-2xl text-xl m-5"
          type="text"
        />
        <button className="px-4 m-5 py-3 rounded text-2xl font-semibold bg-emerald-500 hover:bg-emerald-600 active:w-28">
          submit
        </button>
      </form>
    </div>
  );
};

export default App;
