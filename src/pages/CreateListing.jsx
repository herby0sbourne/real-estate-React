import React, { useState } from 'react';

const CreateListing = () => {
  const [formValues, setFormValues] = useState({
    saleOrRent: 'rent',
    name: '',
    bedRooms: 1,
    bathRooms: 1,
    parking: false,
    furnished: false,
    address: '',
    description: '',
    offer: false,
    price: 0,
    discountPrice: 0,
  });

  const handleOnChange = (e) => {
    const { name, value } = e.target;

    setFormValues((preValue) => ({
      ...preValue,
      [name]: value,
    }));
  };

  const parkingCheckbox = () => {
    setFormValues((preValue) => ({
      ...preValue,
      parking: !formValues.parking,
    }));
  };
  const furnishedCheckbox = () => {
    setFormValues((preValue) => ({
      ...preValue,
      furnished: !formValues.furnished,
    }));
  };
  const offerCheckbox = () => {
    setFormValues((preValue) => ({
      ...preValue,
      offer: !formValues.offer,
    }));
  };

  return (
    <main className="max-w-md px-2 mx-auto">
      <h1 className="text-3xl text-center mt-6 font-bold">Create Listing</h1>
      <form className="checklist">
        <p className="text-lg mt-6 font-semibold">Sell / Rent</p>
        <div className="flex gap-7">
          <div className="w-full">
            <input
              type="checkbox"
              name="saleOrRent"
              id="sale"
              value="sale"
              checked={formValues.saleOrRent === 'sale'}
              onChange={handleOnChange}
            />
            <label
              htmlFor="sale"
              className={` ${
                formValues.saleOrRent === 'sale'
                  ? 'bg-slate-600 text-white'
                  : 'bg-white text-black'
              } px-7 py-3 text-sm uppercase shadow-md rounded hover:shadow:lg focus:shadow-lg active:shadow-lg transition duration-0-150 ease-in-out w-full block text-center cursor-pointer`}
            >
              Sale
            </label>
          </div>
          <div className="w-full">
            <input
              type="checkbox"
              name="saleOrRent"
              id="rent"
              value="rent"
              checked={formValues.saleOrRent === 'rent'}
              onChange={handleOnChange}
            />
            <label
              htmlFor="rent"
              className={` ${
                formValues.saleOrRent === 'rent'
                  ? 'bg-slate-600 text-white'
                  : 'bg-white text-black'
              } px-7 py-3 text-sm uppercase shadow-md rounded hover:shadow:lg focus:shadow-lg active:shadow-lg transition duration-150 ease-in-out w-full block text-center cursor-pointer`}
            >
              Rent
            </label>
          </div>
        </div>
        <div className="mb-6">
          <p className="text-lg mt-6 font-semibold">Name</p>
          <input
            type="text"
            name="name"
            value={formValues.name}
            onChange={handleOnChange}
            placeholder="Property Name"
            maxLength="32"
            minLength="10"
            required
            className="block w-full px-4 py-2 text-xl text-gray-700 bg-white border-gray-300 rounded transition duration-150 ease-in-out focus:text-gray-700"
          />
        </div>
        <div className="flex gap-7">
          <div className="w-full">
            <p className="text-lg font-semibold">Bed</p>
            <input
              className="px-4 py-2 text-xl text-gray-700 bg-white border-gray-300 rounded transition duration-150 ease-in-out focus:text-gray-700 w-full text-center"
              type="number"
              name="bedRooms"
              value={formValues.bedRooms}
              min="1"
              max="50"
              pattern="[0-9]+"
              onChange={handleOnChange}
              required
            />
          </div>
          <div className="w-full">
            <p className="text-lg font-semibold">Baths</p>
            <input
              className="px-4 py-2 text-xl text-gray-700 bg-white border-gray-300 rounded transition duration-150 ease-in-out focus:text-gray-700 w-full text-center"
              type="number"
              name="bathRooms"
              value={formValues.bathRooms}
              min="1"
              max="50"
              pattern="[0-9]+"
              onChange={handleOnChange}
              required
            />
          </div>
        </div>
        <p className="text-lg mt-6 font-semibold">Parking Spot</p>
        <div className="flex gap-7">
          <div className="w-full">
            <input
              type="checkbox"
              name="parking"
              id="parkingYes"
              value={true}
              checked={formValues.parking === true}
              onChange={parkingCheckbox}
            />
            <label
              htmlFor="parkingYes"
              className={` ${
                formValues.parking === true
                  ? 'bg-slate-600 text-white'
                  : 'bg-white text-black'
              } px-7 py-3 text-sm uppercase shadow-md rounded hover:shadow:lg focus:shadow-lg active:shadow-lg transition duration-0-150 ease-in-out w-full block text-center cursor-pointer`}
            >
              Yes
            </label>
          </div>
          <div className="w-full">
            <input
              type="checkbox"
              name="parking"
              id="parkingNo"
              value={false}
              checked={formValues.parking === false}
              onChange={parkingCheckbox}
            />
            <label
              htmlFor="parkingNo"
              className={` ${
                formValues.parking === false
                  ? 'bg-slate-600 text-white'
                  : 'bg-white text-black'
              } px-7 py-3 text-sm uppercase shadow-md rounded hover:shadow:lg focus:shadow-lg active:shadow-lg transition duration-150 ease-in-out w-full block text-center cursor-pointer`}
            >
              No
            </label>
          </div>
        </div>
        <p className="text-lg mt-6 font-semibold">Furnished</p>
        <div className="flex gap-7">
          <div className="w-full">
            <input
              type="checkbox"
              name="furnished"
              id="furnishedYes"
              value={true}
              checked={formValues.furnished === true}
              onChange={furnishedCheckbox}
            />
            <label
              htmlFor="furnishedYes"
              className={` ${
                formValues.furnished === true
                  ? 'bg-slate-600 text-white'
                  : 'bg-white text-black'
              } px-7 py-3 text-sm uppercase shadow-md rounded hover:shadow:lg focus:shadow-lg active:shadow-lg transition duration-0-150 ease-in-out w-full block text-center cursor-pointer`}
            >
              Yes
            </label>
          </div>
          <div className="w-full">
            <input
              type="checkbox"
              name="furnished"
              id="furnishedNo"
              value={false}
              checked={formValues.furnished === false}
              onChange={furnishedCheckbox}
            />
            <label
              htmlFor="furnishedNo"
              className={` ${
                formValues.furnished === false
                  ? 'bg-slate-600 text-white'
                  : 'bg-white text-black'
              } px-7 py-3 text-sm uppercase shadow-md rounded hover:shadow:lg focus:shadow-lg active:shadow-lg transition duration-150 ease-in-out w-full block text-center cursor-pointer`}
            >
              No
            </label>
          </div>
        </div>
        <p className="text-lg mt-6 font-semibold">Offers</p>
        <div className="flex gap-7">
          <div className="w-full">
            <input
              type="checkbox"
              name="offers"
              id="offers"
              value={formValues.offer}
              checked={formValues.offer === false}
              onChange={offerCheckbox}
            />
            <label
              htmlFor="offers"
              className={` ${
                formValues.offer === false
                  ? 'bg-slate-600 text-white'
                  : 'bg-white text-black'
              } px-7 py-3 text-sm uppercase shadow-md rounded hover:shadow:lg focus:shadow-lg active:shadow-lg transition duration-0-150 ease-in-out w-full block text-center cursor-pointer`}
            >
              {formValues.offer ? 'Yes' : 'No'}
            </label>
          </div>
        </div>
        <p className="text-lg mt-6 font-semibold">Address</p>
        <div className="flex gap-7">
          <div className="w-full">
            <textarea
              className="w-full px-4 py-2 text-xl text-gray-700 bg-white border-gray-300 rounded transition duration-150 ease-in-out focus:text-gray-700"
              name="address"
              value={formValues.address}
              onChange={handleOnChange}
            />
          </div>
        </div>
        <p className="text-lg mt-6 font-semibold">Description</p>
        <div className="flex gap-7">
          <div className="w-full">
            <textarea
              className="w-full px-4 py-2 text-xl text-gray-700 bg-white border-gray-300 rounded transition duration-150 ease-in-out focus:text-gray-700"
              name="description"
              value={formValues.description}
              onChange={handleOnChange}
            />
          </div>
        </div>
        <div className="mb-6">
          <p className="text-lg mt-6 font-semibold">Regular Price</p>
          <div className="flex items-center gap-5">
            <input
              type="number"
              name="price"
              value={formValues.price}
              onChange={handleOnChange}
              // placeholder="Property Cost"
              min="1000"
              max="400000000"
              required
              className="block w-half px-4 py-2 text-xl text-gray-700 bg-white border-gray-300 rounded transition duration-150 ease-in-out focus:text-gray-700"
            />
            {formValues.saleOrRent === 'rent' && <span>$ / Month</span>}
          </div>
        </div>
        <div className="mb-6">
          <p className="text-lg mt-6 font-semibold">Discounted Price</p>
          <div className="flex items-center gap-5">
            <input
              type="number"
              name="discountPrice"
              value={formValues.discountPrice}
              onChange={handleOnChange}
              min="1000"
              max="400000000"
              required={formValues.offer}
              className="block w-half px-4 py-2 text-xl text-gray-700 bg-white border-gray-300 rounded transition duration-150 ease-in-out focus:text-gray-700"
            />
            {formValues.saleOrRent === 'rent' && <span>$ / Month</span>}
          </div>
        </div>
        <div className="mb-6">
          <p className="text-lg mt-6 font-semibold">Images</p>
          <p className="text-md mb-3 text-gray-600">
            The first image will be the cover image (max 6)
          </p>
          <div className="flex items-center gap-5">
            <input
              type="file"
              name="images"
              accept=".jpg,.png,.jpeg"
              required
              multiple
              className="block w-full px-4 py-2 text-xl text-gray-700 bg-white border-gray-300 rounded transition duration-150 ease-in-out focus:text-gray-700"
            />
          </div>
        </div>
        <button
          type="submit"
          className="bg-blue-600 w-full text-white font-medium hover:bg-blue-800 mb-5 uppercase text-sm transition duration-150 ease-in-out shadow-md hover:shadow-lg"
        >
          Create Listing
        </button>
      </form>
    </main>
  );
};

export default CreateListing;
