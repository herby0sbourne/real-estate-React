import { useContext, useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { FcHome } from 'react-icons/fc';
import { notify } from '../utils/notification';
import { UserContext } from '../context/UserContext';
import ListingItem from '../components/ListingItem';
import { signUserOut, updateUserProfile, userListing } from '../utils/firebase';

const Profile = () => {
  const { currentUser } = useContext(UserContext);
  const [userListings, setUserListings] = useState([]);
  const [loading, setLoading] = useState(false);
  const [formValues, setFormValues] = useState({
    name: currentUser.displayName,
    email: currentUser.email,
  });

  const ref = useRef(null);
  const [changeDetail, setChangeDetail] = useState(false);

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setFormValues((preValues) => ({ ...preValues, [name]: value }));
  };

  const handleOnClick = () => {
    changeDetail && updateUser();
    setChangeDetail(!changeDetail);
  };

  const updateUser = async () => {
    try {
      await updateUserProfile(formValues.name);
      notify('success', 'profile updated successfully');
    } catch (error) {
      notify('error', 'Error updating Profile');
    }
  };

  useEffect(() => {
    if (!changeDetail) return;
    ref.current.focus();
  }, [changeDetail]);

  useEffect(() => {
    setLoading(true);
    const fetchUserListings = async () => {
      const listings = await userListing();
      setUserListings(listings);
      setLoading(false);
    };

    fetchUserListings();
  }, []);

  return (
    <>
      <section className="max-w-6xl mx-auto flex justify-center items-center flex-col">
        <h1 className="text-3xl text-center mt-6 font-bold">Welcome</h1>
        <div className="w-full md:w-[50%] mt-6 px-3">
          <form className="flex flex-col gap-6">
            <input
              type="text"
              name="name"
              ref={ref}
              value={formValues.name}
              disabled={!changeDetail}
              onChange={handleOnChange}
              className="w-full px-4 py-2 text-xl text-gray-700 bg-white border border-gray-300 rounded transition ease-in-out"
            />
            <input
              type="email"
              name="email"
              value={formValues.email}
              disabled
              onChange={handleOnChange}
              className="w-full px-4 py-2 text-xl text-gray-700 bg-white border border-gray-300 rounded transition ease-in-out"
            />

            <div className="flex items-center justify-between whitespace-nowrap text-sm sm:text-lg">
              <p>
                Do you want to Edit?{' '}
                <button
                  onClick={handleOnClick}
                  className="btn-base text-red-600 hover:text-red-700 transition ease-in-out duration-200"
                  type="button"
                >
                  {changeDetail ? 'Apply Changes' : 'Edit'}
                </button>
              </p>
              <button
                className="btn-base text-blue-600 hover:text-blue-700 transition ease-in-out duration-200"
                type="button"
                onClick={signUserOut}
              >
                Sign out
              </button>
            </div>
          </form>
          <button className=" hover:shadow-lg w-full uppercase bg-blue-600 text-white shadow-md hover:bg-blue-700 transition duration-150 ease-in active:bg-blue-800">
            <Link
              to={'/create-listing'}
              className="flex justify-center items-center gap-3 text-sm font-medium"
            >
              <FcHome className="text-3xl bg-red-200 rounded-full p-1 border-2" />
              <p>Sell Or Rent</p>
            </Link>
          </button>
        </div>
      </section>
      <div className="max-w-6xl px-3 mt-6 mx-auto">
        {!loading && userListings.length > 0 && (
          <>
            <h2 className="text-2xl text-center font-semibold">My Listing</h2>
            <ul>
              {userListings.map((listing) => {
                return <ListingItem key={listing.id} listing={listing} />;
              })}
            </ul>
          </>
        )}
      </div>
    </>
  );
};

export default Profile;
