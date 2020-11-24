import React, { ReactElement, useContext } from 'react'
import { Route, Redirect } from 'react-router-dom';

import { UserContext } from "../models/User";

export default function ProtectedRoute({ children, ...rest }: any): ReactElement {
  const { user } = useContext(UserContext);

  return (
    <Route
      {...rest}
      render={ ({ location }) => {
        if(user) {
          return (children);
        }  else {
          return(
            <Redirect to={{
                  pathname: '/sign_in',
                  state: { referrer: location }
                }}
              />
          )
        }}
      }
      />
  )
}
