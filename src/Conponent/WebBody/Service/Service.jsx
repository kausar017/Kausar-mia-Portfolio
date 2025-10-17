import { useEffect, useState } from "react";

function Service() {
  const [ServiceData, setServiceData] = useState([]);

  useEffect(() => {
    fetch("/public/Service.json")
      .then((res) => res.json())
      .then((data) => setServiceData(data))
      .catch((error) => console.error(error));
  }, []);

  console.log(ServiceData);

  return (
    <>
      <div className="bg-black text-white py-20">
        <div className="text-3xl font-bold text-center">Our Service</div>

        <div className="container mx-auto grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-6 justify-items-center mt-10 px-5">
          {ServiceData.map((data, index) => (
            <div
              key={index}
              className="card w-full max-w-96 bg-[#0D0D0D] shadow-2xl mx-auto hover:scale-105 transition-transform duration-300 cursor-pointer"
            >
              <figure className="px-10 pt-10">
                <img
                  src={data?.image}
                  alt={data?.title}
                  className="w-24"
                />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title text-2xl text-[#ED2519]">{data?.title}</h2>
                <p>{data?.description}</p>
                {/* <div className="card-actions">
                  <button className="btn btn-primary">Buy Now</button>
                </div> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Service;
