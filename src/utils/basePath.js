export const getAssetPath = (path = '') => {
  const cleanPath = path.replace(/^\//, '');
  return `${import.meta.env.BASE_URL}${cleanPath}`;
};


