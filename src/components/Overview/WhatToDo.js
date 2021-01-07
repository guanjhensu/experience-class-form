import React, { useState } from 'react';
import { Title, Explanation, ReadMore } from './WhatToDoStyle';

function WhatToDo() {
	const [ expand, setExpand ] = useState(false);

	return (
		<>
			<Title>What you'll do</Title>
			<Explanation expand={expand}>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas congue libero non maximus vestibulum. Duis eleifend porttitor blandit. Nam tempus interdum magna eu porta. Donec enim risus, porttitor ac magna sed, tincidunt ultrices diam. Morbi semper purus sed nunc feugiat placerat. Vivamus quis tincidunt justo. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Fusce bibendum ligula vulputate magna tincidunt sagittis.<br/>
				Maecenas nibh tellus, imperdiet at felis ac, fringilla lacinia nisi. Ut auctor neque dui, vitae vulputate erat bibendum vitae. Sed eleifend diam at lorem posuere tincidunt. Nullam aliquet sollicitudin maximus. Vestibulum sit amet odio turpis. Mauris nec nisl bibendum, semper orci eget, sagittis justo. Quisque fringilla, ipsum sit amet ornare tincidunt, ex magna varius diam, posuere porttitor nunc odio vel mi. Phasellus lacus eros, luctus at sapien in, vulputate sodales nunc. Suspendisse potenti. Quisque faucibus egestas nibh. Curabitur id consectetur est, et maximus purus.<br/>
				Nam placerat ultricies augue non condimentum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed metus leo, posuere at aliquam in, consequat in diam. In sed nisl dui. Fusce nec magna id dui iaculis molestie. Proin quis nulla auctor, viverra leo at, vehicula arcu. Donec eu aliquet sapien, eget rhoncus magna.<br/>
				Aenean et tempus nunc, sed porttitor massa. Praesent hendrerit sapien a neque mollis, in interdum augue molestie. Etiam tristique nisi ac turpis faucibus, consectetur dictum urna scelerisque. Etiam lobortis sem sed elementum feugiat. Pellentesque interdum nulla enim, eu placerat justo pharetra accumsan. In eget vulputate enim, non laoreet dolor. Nunc fringilla mattis odio, sed feugiat odio tristique vel. Aenean non vulputate arcu. Nulla vestibulum, neque id facilisis bibendum, justo enim dignissim purus, sed suscipit metus purus at justo. Proin tincidunt facilisis neque vel accumsan.<br/>
				Fusce ullamcorper ultrices arcu nec consectetur. Aliquam varius ut nibh et euismod. Morbi a nisi sodales, dignissim enim a, dictum arcu. Vestibulum arcu orci, volutpat vitae laoreet et, fermentum ac leo. Morbi pharetra ipsum ac malesuada sagittis. Nulla a vulputate eros. In id ipsum in augue sagittis tincidunt. Nunc maximus urna dui, ac finibus velit interdum a. Ut scelerisque justo turpis, eu maximus nunc pellentesque vitae. Suspendisse sagittis tristique nulla quis lobortis. Etiam sed magna ex. Vestibulum eget ligula ultrices, hendrerit nulla in, pulvinar ex. Fusce fringilla mauris sit amet felis molestie eleifend id accumsan lectus.
			</Explanation>
			<ReadMore onClick={() => setExpand(true)} appear={!expand}>read more</ReadMore>
		</>
	)
}

export default WhatToDo;