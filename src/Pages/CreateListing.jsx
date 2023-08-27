import { useState } from "react";

export default function CreateListing() {
  const [formData, setFormData] = useState({
    type: "rent",
    name: "",
    bedrooms: 1,
    bathrooms: 1,
  });
  const { type, name, bedrooms, bathrooms } = formData;
  function onChange() {}
  return (
    <main className="max-w-md px-2 mx-auto">
      <h1 className="text-3xl text-center mt-6 font-bold">Create a Listing</h1>
      <form>
        <p className="text-lg mt-6 font-semibold">Sell / Rent</p>
        <div className="flex ">
          <button
            type="button"
            id="type"
            value="sale"
            onClick={onChange}
            className={`px-7 py-3 mr-3 font-medium text-sm uppercase shadow-md rounded hover:shadow-lg focus:shadow-lg active:shadow-lg transition duration-150 ease-in-out w-full ${
              type === "rent"
                ? "bg-[#F8F5E4] text-black"
                : "bg-[#3F497F] text-white"
            }`}
          >
            sell
          </button>
        </div>
        <div>
          <button
            type="button"
            id="type"
            value="sale"
            onClick={onChange}
            className={`px-7 py-3 ml-3 font-medium text-sm uppercase shadow-md rounded hover:shadow-lg focus:shadow-lg active:shadow-lg transition duration-150 ease-in-out w-full ${
              type === "sale"
                ? "bg-[#F8F5E4] text-black"
                : "bg-[#3F497F] text-white"
            }`}
          >
            rent
          </button>
        </div>
        <p className="text-lg mt-6 font-semibold">Name</p>
        <input
          type="text"
          id="name"
          value={name}
          onChange={onChange}
          placeholder="Enter the name"
          maxLength="32"
          minLength="10"
          required
          className="w-full px-4 py-2 text-xl text-[#3F497F] bg-[#F8F5E4] border border-gray-300 rounded transition duration-150 ease-in-out focus:text-[#3F497F] focus:bg-[#F8F5E4] focus:border-slate-600 mb-6"
        />
        <div className="flex space-x-6 mb-6">
          <div>
            <p className="text-lg font-semibold">Bedrooms</p>
            <input
              type="number"
              id="bedrooms"
              value={bedrooms}
              onChange={onChange}
              min="1"
              max="20"
              className="w-full px-4 py-2 text-xl text-center text-[#3F497F] bg-[#F8F5E4] border border-gray-300 rounded transition duration-150 ease-in-out focus:text-[#3F497F] focus:bg-[#F8F5E4] focus:border-slate-600"
              required
            />
          </div>
          <div>
            <p className="text-lg font-semibold">Bathrooms</p>
            <input
              type="number"
              id="bathrooms"
              value={bathrooms}
              onChange={onChange}
              min="1"
              max="20"
              className="w-full px-4 py-2 text-xl text-center text-[#3F497F] bg-[#F8F5E4] border border-gray-300 rounded transition duration-150 ease-in-out focus:text-[#3F497F] focus:bg-[#F8F5E4] focus:border-slate-600"
              required
            />
          </div>
        </div>
      </form>
    </main>
  );
}
