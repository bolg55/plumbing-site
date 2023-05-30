import qs from 'qs';

export const getStrapiURL = (path = '') => {
  return `${import.meta.env.API_URL || 'http://localhost:1337'}${path}`;
};

// Helper to make GET requests to Strapi API

interface StrapiOptions {
  headers?: {
    'Content-Type': string;
  };
}

interface UrlParamsObject {}

export const fetchAPI = async (
  path: string,
  urlParamsObject?: UrlParamsObject,
  options: StrapiOptions = {}
) => {
  // Merge default and user options
  const mergedOptions = {
    headers: {
      'Content-Type': 'application/json',
    },
    ...options,
  };

  // Build request URL
  const queryString = qs.stringify(urlParamsObject);
  const requestUrl = `${getStrapiURL(
    `/api${path}${queryString ? `?${queryString}` : ''}`
  )}`;

  // Trigger API Call
  const response = await fetch(requestUrl, mergedOptions);

  if (!response.ok) {
    const errorMessage = `Error ${response.status}: ${response.statusText}`;
    throw new Error(errorMessage);
  }
  const data = await response.json();
  return data;
};
