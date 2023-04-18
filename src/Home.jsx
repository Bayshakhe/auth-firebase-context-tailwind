import React, { useContext } from 'react';
import { AuthContext } from './providers/AuthProviders';

const Home = () => {
    const user = useContext(AuthContext);
console.log({user})
    return (
        <div>
            This is home { user && user.displayName}
        </div>
    );
};

export default Home;