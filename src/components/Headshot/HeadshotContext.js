import React, { createContext } from 'react';
import useHeadshot from './useHeadshot';

const HeadshotContext = createContext();

export const HeadshotProvider = ({ children }) => {
	const { data, getHeadshot } = useHeadshot();

	return (
		<HeadshotContext.Provider value={{ data, getHeadshot }}>
			{ children }
		</HeadshotContext.Provider>
	)
}

export default HeadshotContext;