import { useState } from 'react';
import UnsplashAPI from '../../api/UnsplashAPI';

function useHeadshot() {
	const [ data, setData ] = useState(null);

	const getHeadshot = ( photoId=null ) => {
		if(photoId){
			UnsplashAPI.photos.get({ photoId: photoId })
			.then(result => setData(result))
			.catch(() => {
				alert('Something went wrong when loading image from unsplash.')
			})
		}
	}

	return { data, getHeadshot };
}

export default useHeadshot;