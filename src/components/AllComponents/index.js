// src/components/AllComponents.js
import React from 'react';

export const componentMap = {
    Homepage: React.lazy(() => import('../../pages/Homepage')),
    ForestExplorer: React.lazy(() => import('../../pages/ForestPage')),
    ForestDetailsPage: React.lazy(() => import('../../pages/ForestDetailsPage')),
    ExploreParksPage: React.lazy(() => import('../../pages/ExploreParksPage')),
    WildlifePage: React.lazy(() => import('../../pages/WildlifePage')),
    WildlifeDetailsPage: React.lazy(() => import('../../pages/WildlifeDetailsPage')),
    ParkDetailsPage: React.lazy(() => import('../../pages/ParkDetailsPage')),
    AboutUsPage: React.lazy(() => import('../../pages/AboutUsPage')),
    ContactUsPage: React.lazy(() => import('../../pages/ContactUsPage')),
};