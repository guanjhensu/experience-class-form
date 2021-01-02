import React, { useState } from 'react';
import { Modal, ModalContent, ButtonClose, Tabs, Tab, Title, Languages, Currencies } from './LanguageModalElements';
import { suggestedLanguagesRegions, languagesRegions, currency } from './LanguageModalChoices';
import close from './close.svg';

function LanguageModal({ show, closeModal }){
	const modalShowOrNot = show ? {display: 'block'} : {display: 'none'};
	return (
		<Modal style={modalShowOrNot}>
			<ModalContent>
				<ButtonClose type='button' onClick={closeModal}>
					<img src={close} alt='close-modal' style={{width: 12}}/>
				</ButtonClose>
				{ Choice(closeModal) }
			</ModalContent>
		</Modal>
	)
}

function Choice(closeModal){
	const tabs = [ 'Language and region', 'Currency' ];
	const [ activeTab, setActiveTab ] = useState(tabs[0]);

	const afterChosen = () => {
		closeModal();
		setActiveTab(tabs[0]);
	}
	
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
									<a href='/#' onClick={afterChosen}>
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
									<a href='/#' onClick={afterChosen}>
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
								<a href='/#' onClick={afterChosen}>
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

export default LanguageModal;