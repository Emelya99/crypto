import Header from './components/Header';
import WelcomeSection from './components/WelcomeSection';

const App = () => {
  return (
    <div>
      <Header />
      <main>
        <WelcomeSection />
        <div>footer</div>
      </main>
    </div>
  );
};

export default App;
