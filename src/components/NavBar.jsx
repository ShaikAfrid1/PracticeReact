const NavBar = () => {
  return (
    <div>
      <nav className="bg-emerald-950 text-white flex justify-between items-center  p-10">
        <h1 className="text-2xl">Afrid Shaik</h1>
        <div className="flex items-center gap-8">
          <h3 className="text-xl ">About</h3>
          <h3 className="text-xl ">Contact Me</h3>
          <h3 className="text-xl ">Services</h3>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
