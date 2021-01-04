import React, { useState, useEffect } from 'react';
import { createApi } from 'unsplash-js';
import config from '../../config';
import { Grid, CreditPhotographer, Loading, Error } from './ImageGridStyle';

const api = createApi({
  accessKey: config.UNSPLASH_ACCESS_KEY
});

function ImageGrid() {
	const [ data, setPhotosResponse ] = useState(null);

	useEffect(() => {
    api.search
      .getPhotos({ 
      	query: 'cat',
      	page: 1,
  			perPage: 9, 
      	orientation: 'portrait' 
      })
      .then(result => {
        setPhotosResponse(result);
      })
      .catch(() => {
        console.log('something went wrong!');
      });
  }, []);

  if (data === null) {
    return (
    	<Loading>Loading...</Loading>
    )
  } else if (data.errors) {
    return (
      <Error>
        <div>{data.errors[0]}</div>
        <div>PS: Make sure to set your access token!</div>
      </Error>
    )
  } else {
    return (
    	<Grid>
    		{ data.response.results.slice(0, 5).map((photo, i) => {
    			const { urls, user } = photo;
    			return (
    				<div key={photo.id} className={`item-${i}`}>
	    				<a href={urls.full} target='_blank' rel='noopener noreferrer'>
	    					<img src={urls.regular} alt={photo.description} />
	    				</a>
	    				<CreditPhotographer
	    					href={`https://unsplash.com/@${user.username}`}
	    					target='_blank' rel='noopener noreferrer' >
	    					@{user.username}
	    				</CreditPhotographer>
    				</div>
    			)
    		}) }
    	</Grid>
    );
  }	
}

export default ImageGrid;