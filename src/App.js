import './App.css';
import iconChat from './assets/images/icon-chat.png';
import iconMoney from './assets/images/icon-money.png';
import iconSecurity from './assets/images/icon-security.png';
import FeatureItem from './components/FeatureItem.tsx';
import Footer from './components/Footer.tsx';
import NavBar from './components/NavBar.tsx';

function App() {
  return (
    <>
    <NavBar/>
    <main>
      <div className="hero">
        <section className="hero-content">
          <h2 className="sr-only">Promoted Content</h2>
          <p className="subtitle">No fees.</p>
          <p className="subtitle">No minimum deposit.</p>
          <p className="subtitle">High interest rates.</p>
          <p className="text">Open a savings account with Argent Bank today!</p>
        </section>
      </div>
      <section className="features">
        <h2 className="sr-only">Features</h2>
        <FeatureItem
          source={iconChat}
          title={'You are our #1 priority'}
          text={' Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes.'}
          alt= {'Chat Icon'}
        />
        <FeatureItem
          source={iconMoney}
          title={'More savings means higher rates'}
          text={'The more you save with us, the higher your interest rate will be!'}
          alt= {'Money Icon'}
        />
        <FeatureItem
          source={iconSecurity}
          title={'Security you can trust'}
          text={'We use top of the line encryption to make sure your data and money is always safe.'}
          alt= {'Security Icon'}
        />
      </section>
    </main>
    <Footer/>
  </>
  );
}

export default App;
