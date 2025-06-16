import { useEffect, useState } from "react";
import axios from "axios";
import Card from "../components/Card";
const Home = () => {
  const [datas, setDatas] = useState([]);

  const data = [
    {
      name: "Aryan Shah",
      image:
        "https://plus.unsplash.com/premium_photo-1707932495000-5748b915e4f2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bW9kZWxzfGVufDB8fDB8fHww",
      age: 27,
      city: "Mumbai",
      profession: "Frontend Developer",
    },
    {
      name: "Divya Iyer",
      image:
        "https://images.unsplash.com/photo-1604514628550-37477afdf4e3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fG1vZGVsc3xlbnwwfHwwfHx8MA%3D%3D",
      age: 24,
      city: "Chennai",
      profession: "UX Designer",
    },
    {
      name: "Raghav Rao",
      image:
        "https://images.unsplash.com/photo-1566802842272-e694af42eb29?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjF8fG1vZGVsc3xlbnwwfHwwfHx8MA%3D%3D",
      age: 30,
      city: "Hyderabad",
      profession: "Data Analyst",
    },
    {
      name: "Meera Kapoor",
      image:
        "https://images.unsplash.com/photo-1617922236117-2697cb394593?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fG1vZGVsc3xlbnwwfHwwfHx8MA%3D%3D",
      age: 26,
      city: "Delhi",
      profession: "Marketing Specialist",
    },
    {
      name: "Karan Patel",
      image:
        "https://images.unsplash.com/photo-1569210538317-4d53f92a0e21?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDZ8fG1vZGVsc3xlbnwwfHwwfHx8MA%3D%3D",
      age: 28,
      city: "Ahmedabad",
      profession: "Software Engineer",
    },
  ];

  const dataHandler = async () => {
    const res = await axios.get(
      "https://picsum.photos/v2/list?page=2&limit=30"
    );
    setDatas(res.data);
  };

  useEffect(() => {
    dataHandler();
  }, []);

  return (
    <>
      <div>
        {data.map((e, idx) => {
          return (
            <Card
              key={idx}
              name={e.name}
              age={e.age}
              city={e.city}
              image={e.image}
              prof={e.profession}
            />
          );
        })}
      </div>

      <div>
        <div className="p-5 mt-5 flex flex-col  text-black bg-gray-950">
          {datas.map((e, idx) => {
            return (
              <div
                key={idx}
                className="bg-gray-50 flex justify-between items-center m-5 p-5"
              >
                <img
                  className="object-cover h-40"
                  src={e.download_url}
                  alt=""
                />
                <h1>{e.author}</h1>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Home;
