import { createApi } from 'unsplash-js';

const UnsplashAPI = createApi({
  accessKey: process.env.REACT_APP_UNSPLASH_ACCESS_KEY
});

export default UnsplashAPI;