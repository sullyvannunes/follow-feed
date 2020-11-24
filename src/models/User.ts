import { createContext } from 'react';

export type User = {
	firstName: string,
	lastName: string,
	imageUrl: string,
	token: string
}

export const UserContext = createContext<any>({ xablau: 'xablau' });
