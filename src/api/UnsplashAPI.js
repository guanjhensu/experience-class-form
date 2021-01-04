import { createApi } from 'unsplash-js';
import config from '../config';

const UnsplashAPI = createApi({
  accessKey: config.UNSPLASH_ACCESS_KEY
});

export default UnsplashAPI;