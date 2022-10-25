import Header from './components/Header';
import WelcomeSection from './components/WelcomeSection';
import About from './components/About';

const App = () => {
  return (
    <div>
      <Header />
      <main>
        <WelcomeSection />
        <About />
      </main>
    </div>
  );
};

export default App;
