import React, {FC} from 'react';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import CountryPage from "./pages/CountryPage/CountryPage";
import GeneralLayout from "./components/GeneralLayout/GeneralLayout";

const router = createBrowserRouter([
    {
        path: '/',
        element: <GeneralLayout isMain={true}><HomePage /></GeneralLayout>,
    },
    {
        path: '/country/:cca3',
        element: <GeneralLayout><CountryPage/></GeneralLayout>,
    },
]);

const AppRouter: FC = () => {
    return <RouterProvider router={router} />;
};

export default AppRouter;
