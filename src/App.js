import React from 'react';
import Header from './components/Header';
import WelcomeSection from './components/WelcomeSection';
import About from './components/About';
import Platform from './components/Platform';
import Service from './components/Service';
import Icons from './components/Icons';

const App = () => {
  const welcomeRef = React.useRef();
  const [windowHeight, setWindowHeight] = React.useState(window.innerHeight);

  const handleResize = () => {
    setWindowHeight(window.innerHeight);
  };

  React.useEffect(() => {
    window.addEventListener('resize', handleResize, false);

    return () => {
      window.removeEventListener('resize', handleResize, false);
    };
  }, []);

  const onClickScroll = (e) => {
    e.preventDefault();
    welcomeRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="wrapper">
      <div className="main-background">
        <Icons name="bg" />
      </div>
      <Header />
      <main>
        <WelcomeSection onClickScroll={onClickScroll} windowHeight={windowHeight} />
        <About welcomeRef={welcomeRef} />
        <Platform />
        <Service />
      </main>
    </div>
  );
};

export default App;
