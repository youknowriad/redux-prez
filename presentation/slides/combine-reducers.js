import React from "react"

import { Heading } from "spectacle"
import CodeSlide from "../code-slide/code-slide"
import Preview from "../utils/preview"

const code = require("raw!../code/combine-reducers.example")
import run from "../preview/step-6"

const CombineReducers = () => (
  <Preview run={run}>
    <Heading fit>{`Combiner plusieurs reducers`}</Heading>
    <CodeSlide
      slide-index="combine-reducer"
      transition={[]}
      lang="js"
      code={code}
      ranges={[
        { loc: [2, 8], title: "Mise à jour du state initial" },
        { loc: [9, 10], title: "Renommer reducer en todos" },
        { loc: [26, 33], title: "Filter Reducer" },
        { loc: [34, 40], title: "Combiner les reducers", note: "À la main" },
        { loc: [41, 48], title: "Combiner les reducers" },
        { loc: [50, 51], title: "Combiner les reducers", node: "En utilisant la fonction combineReducers" },
        { loc: [51, 52], title: "Combiner les reducers", node: "ES6" },
        { loc: [55, 62], title: "Le render", note: "Calculer les todos visibles" },
        { loc: [75, 80], title: "Le render", note: "Afficher le formulaire de filtrage" },
        { loc: [80, 86], title: "Le render", note: "Afficher le formulaire de filtrage" },
        { loc: [111, 118], title: "L'action" }
      ]}
    />
  </Preview>
)

export default CombineReducers
