import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { FaShare } from 'react-icons/fa';
import { getListingById } from '../utils/firebase.js';
import Spinner from '../components/Spinner.jsx';
import Slider from '../components/Slider.jsx';
import useToolTip from '../hooks/useToolTip.jsx';

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
    </div>
  );
};

export default Listing;
