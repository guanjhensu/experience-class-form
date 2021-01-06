import React, { useState, useContext } from 'react';
import ModalContext from '../Modal/ModalContext';
import { suggestedLanguagesRegions, languagesRegions, currency } from './LanguageChoices';
import { Tabs, Tab, Title, Languages, Currencies } from './ChoiceStyle';

function Choice(){
	const tabs = [ 'Language and region', 'Currency' ];
	const [ activeTab, setActiveTab ] = useState(tabs[0]);
	const { handleModal } = useContext(ModalContext);
	
	return (
		<>
			<Tabs>{
				tabs.map( (tab, i) => 
					<Tab type='button' key={i} 
						onClick={ () => setActiveTab(tab) }
						active={ (activeTab === tab) ? true : false } >
						{tab}
					</Tab>
				)
			}</Tabs>
			<div>{
				(activeTab === tabs[0]) ? 
				<>
					<section>
						<Title>Suggested languages and regions</Title>
						<Languages>
							{ suggestedLanguagesRegions.map( (item, i) => 
								<li key={i}>
									{/* TODO: this anchor tag will GET a page refresh with selected language/region */}
									<a href='/#' onClick={handleModal}>
										<div>{item.language}</div>
										<div>{item.region}</div>
									</a>
								</li>
							) }
						</Languages>
					</section>
					<section>
						<Title>Choose a language and region</Title>
						<Languages>
							{ languagesRegions.map( (item, i) => 
								<li key={i}>
									<a href='/#' onClick={handleModal}>
										<div>{item.language}</div>
										<div>{item.region}</div>
									</a>
								</li>
							) }
						</Languages>
					</section>
				</>
				 : 
				<section>
					<Title>Choose a currency</Title>
					<Currencies>
						{ currency.map( (item, i) => 
							<li key={i}>
								<a href='/#' onClick={handleModal}>
									<div>{item.nation}</div>
									<div>{item.symbol}</div>
								</a>
							</li>
						) }
					</Currencies>
				</section>
			}</div>
		</>
	)
}
export default Choice;