import React from 'react';
import Header from './components/Header';
import WelcomeSection from './components/WelcomeSection';
import About from './components/About';
import Platform from './components/Platform';

const App = () => {
  const welcomeRef = React.useRef();

  const onClickScroll = (e) => {
    e.preventDefault();
    welcomeRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div>
      <Header />
      <main>
        <WelcomeSection onClickScroll={onClickScroll} />
        <About welcomeRef={welcomeRef} />
        <Platform />
      </main>
    </div>
  );
};

export default App;
