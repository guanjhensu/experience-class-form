import React, { useState, useEffect } from 'react';
import { Grid, CreditPhotographer, Loading, ErrorMsg } from './ImageGridStyle';
import UnsplashAPI from '../../api/UnsplashAPI';
import ImageModal from './ImageModal';

function ImageGrid() {

	const [ data, setPhotosResponse ] = useState(null);
	const [ showModal, setShowModal ] = useState(false);
	const [ selectedPhoto, setSelectedPhoto ] = useState({ photoId: null, index: 0 });

	useEffect(() => {
    UnsplashAPI.search
      .getPhotos({ 
      	query: 'painter',
      	page: 1,
  			perPage: 5, 
      	orientation: 'portrait' 
      })
      .then(result => {
        setPhotosResponse(result);
      })
      .catch(() => {
        alert('Something went wrong when loading images. Check your internet connection.');
      })
  }, []);

  const openModal = (photoId, index) => {
  	setSelectedPhoto({ photoId: photoId, index: index });
  	setShowModal(true);
  }

  if (data === null) {
    return <Loading>Loading...</Loading>
  } else if (data.errors) {
    return (
      <ErrorMsg>
        <div>{data.errors[0]}</div>
        <div>PS: Make sure to set your access token!</div>
      </ErrorMsg>
    )
  } else {
    return (
    	<>
	    	<Grid>
	    		{ data.response.results.slice(0, 5).map((photo, i) => {
	    			const { urls, user } = photo;
	    			return (
		    				<div key={photo.id} className={`item-${i}`} >
		    						<img src={urls.regular} alt={photo.description}
		    						onClick={() => openModal(photo.id, i)} />
			    				<CreditPhotographer
			    					href={`https://unsplash.com/@${user.username}`}
			    					target='_blank' rel='noopener noreferrer' >
			    					@{user.username}
			    				</CreditPhotographer>
		    				</div>
	    			)
	    		}) }
	    	</Grid>
	    	<ImageModal 
	    		show={showModal} 
	    		photo={selectedPhoto} 
	    		closeModal={() => setShowModal(false)} />
    	</>
    );
  }	
}

export default ImageGrid;