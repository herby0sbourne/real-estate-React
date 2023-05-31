import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {getListingById} from "../utils/firebase.js";
import Spinner from "../components/Spinner.jsx";
import Slider from "../components/Slider.jsx";

const Listing = () => {
  const [listing, setListing] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  const {id} = useParams()
  useEffect(() => {
    const fetchListingById = async () => {
      const listing = await getListingById(id)
      setListing(listing)
      setIsLoading(false)
    }

    fetchListingById()
  }, [id])
  console.log(listing)

  if (isLoading) {
    return <Spinner/>
  }
  return (
    <div>
      <Slider images={listing.imgUrls}/>
    </div>
  );
};

export default Listing;
