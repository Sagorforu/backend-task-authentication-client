import { useEffect, useState } from "react";

const HotelCards = () => {
  const [hotels, setHotels] = useState([]);

  useEffect(() => {
    fetch("https://backend-task-server.vercel.app/hotels")
      .then((res) => res.json())
      .then((data) => setHotels(data))
      .catch((error) => console.log("error fetching hotels", error));
  }, []);

  const openModal = (hotelId) => {
    const modal = document.getElementById(`my_modal_${hotelId}`);
    modal && modal.showModal();
  };

  return (
    <div className="my-10 mx-5">
      <div>
        <h1 className="text-center text-5xl font-semibold">All Hotels</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-10">
        {hotels.map((hotel, index) => (
          <div key={index}>
            <div className="card w-full image-full">
              <figure>
                <img src={hotel?.imageUrl} alt="Shoes" />
              </figure>
              <div className="card-body">
                <h2 className="card-title text-4xl font-bold">{hotel?.name}</h2>
                <p className="text-xl font-semibold">
                  Location: {hotel?.location}
                </p>
                <p className="-mt-40 text-lg">{hotel?.description}</p>
                <div className="card-actions justify-end">
                  <button
                    onClick={() => openModal(hotel._id)}
                    className="btn border-gray-100 text-semibold"
                  >
                    Food Menu
                  </button>
                </div>
              </div>
            </div>
            <dialog
              id={`my_modal_${hotel._id}`}
              className="modal"
              style={{
                width: "500px",
                maxWidth: "1000px",
                height: "300px", 
                position: "fixed",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                padding: "20px",
                borderRadius: "8px",
                boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.1)",
              }}
            >
              <form method="dialog" className="modal-box">
                <button
                  className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                  onClick={() => (hotel._id)}
                >
                  ✕
                </button>
                <h3 className="font-bold text-lg mb-6">{hotel.name} Food Menu</h3>
                <div className="list-disc pl-2 mb-4">
                  {hotel.foodMenu.map((item, index) => (
                    <p key={index} className="font-semibold">{index + 1}. {item}</p>
                  ))}
                </div>
              </form>
            </dialog>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HotelCards;
