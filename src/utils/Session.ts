interface User {
  first_name: String,
  last_name: String,
  image: String
}

export async function createSession(): Promise<User> {
  let response = await fetch('http://localhost:3001/api/v1/session', {
    method: 'post'
  })

  let user = await response.json();
  return user;
}
