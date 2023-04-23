import { useContext, useEffect, useRef, useState } from 'react';
import { signUserOut, updateUserProfile } from '../utils/firebase';
import { UserContext } from '../context/UserContext';
import { notify } from '../utils/notification';

const Profile = () => {
  const { currentUser } = useContext(UserContext);
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
      await updateUserProfile(formValues);
      notify('success', 'profile updated successfully');
    } catch (error) {
      notify('error', 'Error updating Profile');
    }
  };

  useEffect(() => {
    if (!changeDetail) return;
    ref.current.focus();
  }, [changeDetail]);

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
              disabled={!changeDetail}
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
        </div>
      </section>
    </>
  );
};

export default Profile;
