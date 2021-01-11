import { createApi } from 'unsplash-js';

const UnsplashAPI = createApi({
  accessKey: process.env.UNSPLASH_ACCESS_KEY
});

export default UnsplashAPI;