import { FcGoogle } from 'react-icons/fc';

const OAuth = () => {
  return (
    <button className="flex items-center justify-center w-full bg-red-700 text-white px-7 py-3 gap-3 uppercase text-sm font-medium hover:bg-red-800 shadow-md">
      <FcGoogle className="text-2xl bg-white rounded-full" />
      Continue with Google
    </button>
  );
};

export default OAuth;
