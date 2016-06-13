// Import React
import React from "react"

// Import Spectacle Core tags
import {
  Deck,
  Slide,
  Spectacle
} from "spectacle"

import { Title, WhoAmI, ES6, Spa, Forget, FromScratch,
  AddReducer, EventDispatcher, IntroduceRedux, MultipleActions,
  CombineReducers, FirstRecap, ReactSlide, RewriteInReact,
  ReactRedux, ExtractActionCreators, ExtractSelectors,
  SideEffects, SideEffectsExamples, GoingFurther,
  Patterns, AntiPatterns } from "./slides"

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader"

// Import theme
import createTheme from "spectacle/lib/themes/default"

// Require CSS
require("normalize.css")
require("spectacle/lib/themes/default/index.css")


const images = {
  riad: require("../assets/riadlydia.jpg"),
  flow: require("../assets/flow.gif")
}

preloader(images)

const theme = createTheme({
  primary: "#FFFFFF",
  secondary: "#232633",
  tertiary: "#5DD572"
})

export default class Presentation extends React.Component {
  render() {
    return (
      <Spectacle theme={theme} progress="pacman">
        <Deck transition={["zoom", "slide", "fade"]} transitionDuration={0}>
          <Slide bgColor="secondary">
            <Title />
          </Slide>
          <Slide transition={["slide"]} bgColor="secondary" bgImage={images.riad.replace("/", "")} bgDarken={0.75}>
            <WhoAmI />
          </Slide>
          <Slide transition={["slide"]} bgColor="secondary">
            <ES6 />
          </Slide>
          <Slide transition={["slide"]} bgColor="secondary" notes="1- Like Swing, 2- SF2, Rails, 3- Two way data-binding">
            <Spa />
          </Slide>
          <Slide transition={["slide"]} bgColor="black" notes="créons notre propre modèle">
            <Forget />
          </Slide>
          <Slide transition={["slide"]} bgColor="secondary" notes="Une TODO list from scratch sans frameworks">
            <FromScratch />
          </Slide>
          <Slide transition={["slide"]} bgColor="secondary" notes="Une fonction pure <br /> Timeout dans l'example">
            <AddReducer />
          </Slide>
          <Slide transition={["slide"]} bgColor="secondary" notes="Supprimer le refresh en utilisant un event dispatcher. Qu'est ce qu'un event dispatcher ?">
            <EventDispatcher />
          </Slide>
          <Slide transition={["slide"]} bgColor="secondary" notes="Pas de fonctions globales. <br /> Wrapper l'event dispatcher et la mise à jour du state <br /> et ajout du getState (50% de redux ?)">
            <IntroduceRedux />
          </Slide>
          <Slide transition={["slide"]} bgColor="secondary" notes="Ajoutons le toggleTodo. <br /> Pour le moment les eventHandler sont globaux.">
            <MultipleActions />
          </Slide>
          <Slide transition={["slide"]} bgColor="secondary" notes="Composition : Appeler les sous reducers avec un sous state <br /> Généraliser le pattern">
            <CombineReducers />
          </Slide>
          <Slide transition={["slide"]} bgColor="secondary" notes="Les concepts principaux de redux ont été abordé">
            <FirstRecap />
          </Slide>
          <Slide transition={["slide"]} bgColor="secondary" notes="React en 5mn :P">
            <ReactSlide />
          </Slide>
          <Slide transition={["slide"]} bgColor="secondary" notes="Composant à partir du render, plus d'event handler global">
            <RewriteInReact />
          </Slide>
          <Slide transition={["slide"]} bgColor="secondary" notes="Composant trop grand, séparer logique et affichage : pattern (react-redux)">
            <ReactRedux />
          </Slide>
          <Slide transition={["slide"]} bgColor="secondary" notes="Concepts facultatifs">
            <ExtractActionCreators />
          </Slide>
          <Slide transition={["slide"]} bgColor="secondary">
            <ExtractSelectors />
          </Slide>
          <Slide transition={["slide"]} bgColor="secondary" notes="Side effects : tout ce qui est pas pure : async api etc... <br> Mécanisme pour étendre redux">
            <SideEffects />
          </Slide>
          <Slide transition={["slide"]} bgColor="secondary">
            <SideEffectsExamples />
          </Slide>
          <Slide transition={["slide"]} bgImage={images.flow.replace("/", "")} bgSize="contain" bgRepeat="no-repeat" bgDarken="0.2">
            <div>© @vyacheslav_de</div>
          </Slide>
          <Slide transition={["slide"]} bgColor="secondary" notes="Redux est très bas niveau. Il faut le comprendre et l'adapter">
            <GoingFurther />
          </Slide>
          <Slide transition={["slide"]} bgColor="secondary">
            <Patterns />
          </Slide>
          <Slide transition={["slide"]} bgColor="secondary">
            <AntiPatterns />
          </Slide>
        </Deck>
      </Spectacle>
    )
  }
}
