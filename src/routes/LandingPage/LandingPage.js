import React, { Component } from 'react';
import Header from '../../components/LandingPage/Header/Header';
import AboutSection from '../../components/LandingPage/AboutGameSection/AboutGameSection'
import AboutScoreBoardSection from '../../components/LandingPage/AboutScoreBoardSection/AboutScoreBoardSection'
import GameTutorialSection from '../../components/LandingPage/GameTutorialSection/GameTutorialSection'
import PlayGameSection from '../../components/LandingPage/PlayGameSection/PlayGameSection'

export default class LandingPage extends Component {
  render() {
    return (
      <>
        <Header></Header>
        <AboutSection></AboutSection>
        <AboutScoreBoardSection></AboutScoreBoardSection>
        <GameTutorialSection></GameTutorialSection>
        <PlayGameSection></PlayGameSection>
      </>
    )
  }
}
