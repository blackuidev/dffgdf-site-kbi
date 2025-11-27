import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Index from '../pages/Index';
import NotFound from '../pages/NotFound';

const RoutesConfig = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default RoutesConfig;
