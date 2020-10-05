import React, { Component } from 'react';
import Header from '../../components/LandingPage/Header/Header';
import AboutSection from '../../components/LandingPage/AboutGameSection/AboutGameSection'
import AboutScoreBoardSection from '../../components/LandingPage/AboutScoreBoardSection/AboutScoreBoardSection'
import PlayGameSection from '../../components/LandingPage/PlayGameSection/PlayGameSection'

import './LandingPage.css'

export default class LandingPage extends Component {
  render() {
    return (
      <>
        <Header></Header>
        <AboutSection></AboutSection>
        <AboutScoreBoardSection></AboutScoreBoardSection>
        <PlayGameSection></PlayGameSection>
      </>
    )
  }
}
