import { User } from '../models/User';

export async function createSession(): Promise<User> {
  let response = await fetch(`${process.env.REACT_APP_API_URL}/api/v1/session`, {
    method: 'post'
  })

  let user = await response.json();
  if(user) {
    setUserInLocalStorage(user);
  }

  return user;
}

export function getUserFromLocalStorageOrNull(): User | undefined {
  const user: string | null = localStorage.getItem(process.env.REACT_APP_LOCALSTORAGE_USER || 'user');

  if(user) {
    return JSON.parse(atob(user));
  } else {
    return undefined;
  }
}

function setUserInLocalStorage(user: string) {
  localStorage.setItem(process.env.REACT_APP_LOCALSTORAGE_USER || 'user', btoa(JSON.stringify(user)));
}
