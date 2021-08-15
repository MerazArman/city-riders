import React from 'react';
import { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { UserContext } from '../../App';

const PrivateRoute = ({ children, ...rest }) => {
    const [userLogged, setUserLogged] = useContext(UserContext);
    return (
        
            <Route
                {...rest}
                render={({ location }) =>
                    userLogged.email ? (
                        children
                    ) : (
                        <Redirect
                            to={{
                                pathname: "/login",
                                state: { from: location }
                            }}
                        />
                    )
                }
            />
      
    );
};

export default PrivateRoute;