import { useState } from "react";
import Perks from "./Perks";
import axios from "axios";
import { Navigate } from "react-router-dom";
import { useUserContext } from "../contexts/UserContext.jsx";
import PhotoUploader from "./PhotoUploader.jsx";
const NewPlace = () => {
  const { user } = useUserContext();
  const [title, setTitle] = useState("");
  const [city, setCity] = useState("");
  const [photos, setPhotos] = useState([]);
  const [perks, setPerks] = useState([]);
  const [description, setDescription] = useState("");
  const [extras, setExtras] = useState("");
  const [price, setPrice] = useState("");
  const [checkin, setCheckin] = useState("");
  const [checkout, setCheckout] = useState("");
  const [guests, setGuests] = useState("");
  const [redirect, setRedirect] = useState(false);
  const [photoLink, setPhotoLink] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      title &&
      city &&
      photos.length > 0 &&
      description &&
      extras &&
      price &&
      checkin &&
      checkout &&
      guests
    ) {
      try {
        const newPlace = await axios.post("/places", {
          owner: user._id,
          title,
          city,
          photos,
          description,
          extras,
          perks,
          price,
          checkin,
          checkout,
          guests,
        });
        setRedirect(true);
      } catch (error) {
        console.error(JSON.stringify(error));
        alert("Error when creating a new Place");
      }
    } else {
      alert("Fill all fields before registering");
    }
  };

  if (redirect) return <Navigate to="/account/places" />;
  return (
    <form onSubmit={handleSubmit} className="flex w-full flex-col gap-6 px-8">
      <div className="flex flex-col gap-1">
        <label htmlFor="title" className="ml-2 text-2xl font-bold">
          Title
        </label>
        <input
          type="text"
          placeholder="type your add title"
          className="rounded-full border border-gray-300 px-4 py-2"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="city" className="ml-2 text-2xl font-bold">
          Address
        </label>
        <input
          type="text"
          placeholder="type your Address"
          className="rounded-full border border-gray-300 px-4 py-2"
          id="city"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
      </div>
      <PhotoUploader {...{ photoLink, setPhotoLink, setPhotos, photos }} />
      <div className="flex flex-col gap-1">
        <label htmlFor="description" className="ml-2 text-2xl font-bold">
          Description
        </label>
        <textarea
          placeholder="Type Your Ad Description"
          className="h-56 resize-none rounded-2xl border border-gray-300 px-4 py-2"
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="perks" className="ml-2 text-2xl font-bold">
          Amenities
        </label>
        <Perks {...(perks, setPerks)} />
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="extras" className="ml-2 text-2xl font-bold">
          Extras
        </label>
        <textarea
          placeholder="Type Your Ad extras"
          className="h-56 resize-none rounded-2xl border border-gray-300 px-4 py-2"
          id="extras"
          value={extras}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <div className="flex flex-col gap-1">
        <h2 className="ml-2 text-2xl font-bold">Price and Restrictions</h2>
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4">
          <div className="flex flex-col gap-2">
            <label className="ml-2 text-xl font-bold" htmlFor="price">
              Price
            </label>
            <input
              type="number"
              placeholder="500"
              className="rounded-full border border-gray-300 px-4 py-2"
              id="price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="ml-2 text-xl font-bold" htmlFor="checkin">
              Check in
            </label>
            <input
              type="Text"
              placeholder="16:00"
              className="rounded-full border border-gray-300 px-4 py-2"
              id="checkin"
              value={checkin}
              onChange={(e) => setCheckin(e.target.value)}
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="ml-2 text-xl font-bold" htmlFor="checkout">
              Check out
            </label>
            <input
              type="text"
              placeholder="16:00"
              className="rounded-full border border-gray-300 px-4 py-2"
              id="checkout"
              value={checkout}
              onChange={(e) => setCheckout(e.target.value)}
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="ml-2 text-xl font-bold" htmlFor="guests">
              Nº Invited
            </label>
            <input
              type="number"
              placeholder="4"
              className="rounded-full border border-gray-300 px-4 py-2"
              id="guests"
              value={guests}
              onChange={(e) => setGuests(e.target.value)}
            />
          </div>
        </div>
      </div>
      <button className="hover:bg-primary-600 bg-primary-400 min-w-44 cursor-pointer rounded-full px-4 py-2 text-white transition">
        Register
      </button>
    </form>
  );
};

export default NewPlace;
