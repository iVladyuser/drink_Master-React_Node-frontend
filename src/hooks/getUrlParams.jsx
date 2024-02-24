export const getUrlParams = () => {
  const urlSearchParams = new URLSearchParams(window.location.search);

  const queryParams = {};
  for (const [key, value] of urlSearchParams.entries()) {
    queryParams[key] = value;
  }

  return queryParams;
};
