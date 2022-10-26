import React from 'react';
import Header from './components/Header';
import WelcomeSection from './components/WelcomeSection';
import About from './components/About';
import Platform from './components/Platform';
import Service from './components/Service';
import Icons from './components/Icons';

const App = () => {
  const welcomeRef = React.useRef();

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
        <WelcomeSection onClickScroll={onClickScroll} />
        <About welcomeRef={welcomeRef} />
        <Platform />
        <Service />
      </main>
    </div>
  );
};

export default App;
