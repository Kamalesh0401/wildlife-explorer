// src/components/ViewLoader.jsx
import React, { Suspense } from 'react';
import { useParams } from 'react-router-dom';
import { componentMap } from '../AllComponents';
import Loader from '../Loader'; // Your existing Loader component
import NotFoundPage from '../../pages/NotFoundPage'; // Assume you have a 404 page

const ViewLoader = ({ componentName }) => {
    const params = useParams(); // Capture route parameters (e.g., :id)
    const Component = componentMap[componentName];

    return (
        <Suspense fallback={<Loader />}>
            {Component ? <Component {...params} /> : <NotFoundPage />}
        </Suspense>
    );
};

export default ViewLoader;