import { toast } from 'react-toastify';

export const notify = (type, message, id = null) => {
  const options = {
    autoClose: 5000,
    position: 'bottom-center',
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: 'dark',
  };

  if (id) {
    toast.update(id, {
      render: `${message}`,
      type: `${type}`,
      isLoading: false,
      ...options,
    });
    return;
  }

  return toast[type](`${message}`, { ...options });
};
