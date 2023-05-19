import React from 'react';
import Moment from 'react-moment';
import { Link, useNavigate } from 'react-router-dom';
import { MdLocationOn, MdEdit } from 'react-icons/md';
import { FaTrash } from 'react-icons/fa';
import price from '../utils/PriceConverter';

const ListingItem = ({ listing, profile, onEdit, onDelete }) => {
  const { discountPrice } = listing;
  const navigate = useNavigate();

  const handleEdit = () => {
    navigate(`/edit-listing/${listing.id}`);
  };

  const handleDelete = () => {
    const result = confirm('Are you sure you want to delete?');
    if (!result) return;

    onDelete();
  };

  return (
    <li className="bg-white flex flex-col justify-between shadow-md hover:shadow-xl rounded-md overflow-hidden transition-shadow duration-150 relative">
      <Link to={`/category/${listing.saleOrRent}/${listing.id}`}>
        <div>
          <img
            className="h-[170px] hover:scale-105 transition-scale duration-200 ease-in"
            src={listing.imgUrls[0]}
            alt=""
            loading="lazy"
          />
          <Moment
            className="absolute top-2 left-2 bg-[#3377cc] text-white uppercase text-xs font-semibold rounded-md px-2 py-1 shadow-lg"
            fromNow
          >
            {listing.createdAt?.toDate()}
          </Moment>
        </div>
        <div className="w-full p-[10px]">
          {/* card info */}
          <span className="flex items-center gap-1">
            <MdLocationOn className="h-4 w-4 text-green-600" />{' '}
            <p className="font-semibold text-sm mb-[2px] text-gray-600 truncate">
              {listing.address}
            </p>
          </span>
          <p className="font-semibold m-0 text-xl truncate">{listing.name}</p>
          <div className="text-[#457b9d] mt-2 font-semibold">
            ${price(discountPrice || listing.price)}{' '}
            {listing.saleOrRent === 'rent' && '/ Month'}
          </div>
          <div className=" mt-[10px]">
            <div className="flex ite gap-3">
              <p className="font-bold text-xs">{listing.bedRooms} Beds</p>
              <p className="font-bold text-xs">{listing.bathRooms} Baths</p>
            </div>
          </div>
        </div>
      </Link>
      {profile && (
        <div className="flex gap-3 absolute bottom-2.5 right-2.5 text-[14px]">
          <MdEdit className="cursor-pointer" onClick={handleEdit} />
          <FaTrash className="cursor-pointer text-red-500" onClick={handleDelete} />
        </div>
      )}
    </li>
  );
};

export default ListingItem;
