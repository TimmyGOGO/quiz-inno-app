import React, { useEffect, useState } from 'react';

import QuizScreen from './quizScreen/QuizScreen';
import { RouterProvider, createBrowserRouter, Outlet } from 'react-router-dom';
import './Application.scss';

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Start screen</div>,
  },
  {
    path: "/quiz",
    Component: QuizScreen,
  },
  {
    path: "/finish",
    element: <div>Finish screen</div>,
  }
]);

const Application: React.FC = () => {
  return (
    <RouterProvider router={router} />
  );
};

export default Application;
