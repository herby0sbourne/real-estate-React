const getLocation = async (address) => {
  let geoLocation = {};

  const res = await fetch(
    `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${
      import.meta.env.VITE_GEOCODE_API_KEY
    }`
  );
  const data = await res.json();

  if (data.status !== 'OK') {
    throw new Error('error getting location');
  }

  geoLocation.lat = data.results[0]?.geometry.location.lat ?? 0;
  geoLocation.lng = data.results[0]?.geometry.location.lng ?? 0;

  return geoLocation;
};

export default getLocation;
