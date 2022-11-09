import React from 'react';
import ReactDOM from 'react-dom/client';

import {createBrowserRouter , RouterProvider} from 'react-router-dom'
import { Home } from './pages/Home';
import './css/components.css'
import {GetStarted} from './pages/GetStarted';

const router = createBrowserRouter([
    {
        path: "/",
        element: (<Home />)
    },
    {
        path: "/getstarted",
        element: (<GetStarted />)
    }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <RouterProvider router={router} />
);
