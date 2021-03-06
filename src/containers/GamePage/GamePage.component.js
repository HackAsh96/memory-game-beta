import React from 'react';
import {Link} from 'react-router-dom';
import Game from '../../components/Game/Game';
import GameLogoComponent from '../../components/GameLogoComponent/GameLogoComponent';
// import SpoonImageComponent from '../../components/SpoonImageComponent/SpoonImageComponent';
import Timer from '../../components/Timer/Timer';
import SubmitButton from '../../components/SubmitButton/SubmitButton';
import ForkImageComponent from '../../components/ForkImageComponent/ForkImageComponent';
import Footer from '../../components/FooterComponent/FooterComponent';

export const GamePage = () => (
  <section className="home bodycontainer">
    <div className="bodywrapper">
      <div className="homelogocontainer">
        <div className="homelogo">
          <GameLogoComponent />
        </div>
        <ForkImageComponent />
        {/* <Game level="easy" /> */}
        <Timer />
        <Game />
        {/* <SpoonImageComponent /> */}
      </div>
      <div className="quitGame">
        <Link to='/'>
        <SubmitButton buttonTitle="Quit Game" />
        </Link>
      </div>
    </div>
      <Footer />
  </section>
);
