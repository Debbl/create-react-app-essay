import React from 'react';
import { useRoutes } from 'react-router-dom';
import About from '../pages/about';
import Home from '../pages/home';

export default function AppRoutes() {
  const AppRoutes = useRoutes([
    {
      path: 'about',
      element: <About />
    },
    {
      path: 'home',
      element: <Home />
    }
  ])

  return AppRoutes;
}