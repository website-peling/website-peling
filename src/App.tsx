import { useState, useEffect } from 'react';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import QuizPage from './pages/QuizPage';
import ResourcesPage from './pages/ResourcesPage';

function App() {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const handleLocationChange = () => {
      setCurrentPath(window.location.pathname);
    };

    window.addEventListener('popstate', handleLocationChange);

    return () => {
      window.removeEventListener('popstate', handleLocationChange);
    };
  }, []);

  const renderPage = () => {
    switch (currentPath) {
      case '/':
        return <HomePage />;
      case '/about':
        return <AboutPage />;
      case '/quiz':
        return <QuizPage />;
      case '/resources':
        return <ResourcesPage />;
      case '/take-action':
        // Placeholder for a future take action page
        return <ResourcesPage />;
      default:
        return <HomePage />;
    }
  };

  return renderPage();
}

export default App;