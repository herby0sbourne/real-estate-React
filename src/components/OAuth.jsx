import { FcGoogle } from 'react-icons/fc';
import { addUserToDatabase, signUpWithGooglePopup } from '../utils/firebase.js';
import { notify } from '../utils/notification.js';

const OAuth = ({ pushOnClick }) => {
  const handleOnclick = async () => {
    try {
      const { user } = await signUpWithGooglePopup();
      await addUserToDatabase(user);
      // console.log(user)
      pushOnClick();
    } catch (e) {
      notify('error', 'could not authorize with google');
      console.log(e);
    }
  };

  return (
    <button
      onClick={handleOnclick}
      type="button"
      className="flex items-center justify-center w-full bg-red-700 text-white px-7 py-3 gap-3 uppercase text-sm font-medium hover:bg-red-800 shadow-md"
    >
      <FcGoogle className="text-2xl bg-white rounded-full" />
      Continue with Google
    </button>
  );
};

export default OAuth;
