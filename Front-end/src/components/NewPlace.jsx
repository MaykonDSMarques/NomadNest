import { useState } from "react";
import Perks from "./Perks";

const NewPlace = () => {
  const [title, setTitle] = useState("");
  const [city, setCity] = useState("");
  const [photos, setPhotos] = useState("");
  const [description, setDescription] = useState("");
  const [extras, setExtras] = useState("");
  const [price, setPrice] = useState("");
  const [checkin, setCheckin] = useState("");
  const [checkout, setCheckout] = useState("");
  const [guests, setGuests] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };
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
      <div className="flex flex-col gap-1">
        <label htmlFor="photos" className="ml-2 text-2xl font-bold">
          Pictures
        </label>
        <div className="flex gap-2">
          <input
            type="text"
            placeholder="Add a Picture with a link"
            className="grow rounded-full border border-gray-300 px-4 py-2"
            id="photos"
            value={photos}
            onChange={(e) => setPhotos(e.target.value)}
          />
          <button className="transition-transition cursor-pointer rounded-full border border-gray-300 bg-gray-300 px-4 py-2 hover:bg-gray-200">
            Send Picture
          </button>
        </div>
        <div className="mt-2 grid grid-cols-5 gap-4">
          <label
            htmlFor="file"
            className="flex aspect-square cursor-pointer items-center justify-center gap-2 rounded-2xl border border-gray-300"
          >
            <input type="file" id="file" className="hidden" />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5m-13.5-9L12 3m0 0 4.5 4.5M12 3v13.5"
              />
            </svg>
            Upload
          </label>
        </div>
      </div>
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
        <Perks />
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
