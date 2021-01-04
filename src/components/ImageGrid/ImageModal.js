import React, { useState, useEffect } from 'react';
import UnsplashAPI from '../../api/UnsplashAPI';
import { Modal, ModalContent, TopNav, FullImage } from './ImageModalStyle';
import { Loading, ErrorMsg } from './ImageGridStyle';
import close from '../../icons/close.svg';

function ImageModal({ show, photo, closeModal }) {
	let showOrNot = show ? {} : { display: 'none' };
	const { photoId, index } = photo;
	const [ data, setPhotosResponse ] = useState(null);

	useEffect(() => {
		if(photoId) {
			UnsplashAPI.photos.get({ photoId: photoId })
			.then(result => setPhotosResponse(result))
			.catch(() => {
        alert('Something went wrong in Modal. Check your internet connection.');
      })
		}
	}, [photoId]);

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
				<Modal style={showOrNot}>
					<ModalContent>
						<TopNav>
							<button onClick={closeModal}>
								<div><img src={close} alt='close' /></div>
								<span>Close</span>
							 </button>
							<p>{index+1} / 5</p>
							<div></div>
						</TopNav>
						<FullImage>
							<img src={data.response.urls.full} alt={data.response.alt_description || 'full size image'} />
						</FullImage>
					</ModalContent>
				</Modal>
			</>
		)
	}
}

export default ImageModal;