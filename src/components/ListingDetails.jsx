import React from 'react';

const ListingDetails = ({ listing }) => {
  return (
    <div className="bg-pink-300 w-full h-[200px] lg-[400px]">
      <p>
        {listing.name} - $ {!listing.offers ? listing.price : listing.discountPrice}
      </p>
    </div>
  );
};

export default ListingDetails;
