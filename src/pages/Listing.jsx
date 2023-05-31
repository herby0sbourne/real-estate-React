import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { FaShare } from 'react-icons/fa';
import { getListingById } from '../utils/firebase.js';
import Spinner from '../components/Spinner.jsx';
import Slider from '../components/Slider.jsx';
import useToolTip from '../hooks/useToolTip.jsx';
import ListingDetails from '../components/ListingDetails.jsx';

const Listing = () => {
  const [listing, setListing] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const { isTooltipVisible, showTooltip } = useToolTip();

  const { id } = useParams();
  useEffect(() => {
    const fetchListingById = async () => {
      const listing = await getListingById(id);
      setListing(listing);
      setIsLoading(false);
    };

    fetchListingById();
  }, [id]);
  console.log(listing);

  if (isLoading) {
    return <Spinner />;
  }
  return (
    <div>
      <Slider images={listing.imgUrls} />
      <div
        className="fixed top-[10%] right-[3%] z-10 bg-white cursor-pointer rounded-full w-12 h-12 flex justify-center items-center"
        onClick={() => {
          navigator.clipboard.writeText(window.location.href);
          showTooltip();
        }}
      >
        <FaShare className="text-xl text-slate-500" />
        {isTooltipVisible && (
          <p className="fixed top-[23%] right-[5%] font-bold border-gray-400 rounded-md bg-white p-2">
            Linked copied
          </p>
        )}
      </div>
      <div className="flex flex-col md:flex-row bg-white max-w-6xl lg:mx-auto p-4 rounded-lg shadow-lg lg:space-x-5 ">
        {/* <div className="bg-pink-300 w-full h-[200px] lg-[400px]"></div> */}
        <ListingDetails listing={listing} />
        <div className="bg-blue-300 w-full h-[200px] lg-[400px] z-10 overflow-x-hidden"></div>
      </div>
    </div>
  );
};

export default Listing;
