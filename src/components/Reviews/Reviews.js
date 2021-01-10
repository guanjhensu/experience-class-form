import React, { useState, useEffect, useContext } from 'react';
import { ReviewsStyle, Rating, Comment, Divider } from './ReviewsStyle';
import UnsplashAPI from '../../api/UnsplashAPI';
import star from '../../icons/star.svg';
import user from '../../icons/user.svg';

function Reviews({ rating, numberOfReviews }) {
	const [ comments, setComments ] = useState([]);

	useEffect(() => {
		fetch('https://jsonplaceholder.typicode.com/comments?postId=1')
		.then(response => response.json())
		.then(comments => setComments(comments))
		.catch(()=> alert('something went wrong when loading comments'))
	}, []);

	// generate fake user images in comments section
	const [ userPhotos, setUserPhotos ] = useState(null);
	useEffect(() => {
		UnsplashAPI.search
      .getPhotos({ 
      	query: 'people',
      	page: 1,
  			perPage: 5, 
      	orientation: 'portrait' 
      })
			.then(result => setUserPhotos(result))
			.catch(() => {
				alert('Something went wrong when loading image from unsplash.')
			})
	}, []);

	return (
		<>
			<ReviewsStyle>
				<Rating>
					<img src={star} alt='rating' />
					<span>{rating.toFixed(1)}</span>
					<span>({numberOfReviews} reviews)</span>
				</Rating>
				<div id='comments'>
					{comments.map((comment, i)=>{
						return (
							<Comment key={i}>
								<div>
									<img src={ (!userPhotos) ? user : userPhotos.response.results[i].urls.thumb	} 
										alt='user' />
									<span>
										<p>{comment.name}</p>
										<p>December 2020</p>
									</span>
								</div>
								<p>{comment.body}</p>
							</Comment>
						)
					})}
				</div>
			</ReviewsStyle>
			<Divider></Divider>
		</>
	)
}

export default Reviews;