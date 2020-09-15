import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => (
    <div>
        <h2 className='notFound'>Y'a rien ici ! 
            <Link to="/"> 
             Go Home
            </Link>
        </h2>
    </div>
);

export default NotFound;

