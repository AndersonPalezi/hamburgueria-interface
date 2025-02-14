import React from "react";
import { createBrowserRouter } from "react-router-dom";
import { Login } from "../containers/Login/index";
import { Register } from "../containers/Register";
import { Home } from "../containers/Home/index.jsx";
import { PrivateRoute } from "./private-route.jsx";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <PrivateRoute component={Home} />,
    },
    {
        path: "/login",
        element: <Login />,
    },
    {
        path: "/cadastro",
        element: <Register />,
    },
]);
