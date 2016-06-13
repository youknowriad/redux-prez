import React from "react"

import { Heading } from "spectacle"
import CodeSlide from "../code-slide/code-slide"

const code = require("raw!../code/extract-selectors.example")

const ExtractSelectors = () => (
  <div>
    <Heading fit>{`Extract Selectors`}</Heading>
    <CodeSlide
      slide-index="selectors"
      transition={[]}
      lang="js"
      code={code}
      ranges={[
        { loc: [0, 7], title: "État actuel" },
        { loc: [8, 13], title: "Extraire le selecteur" },
        { loc: [14, 17], title: "Utiliser le selecteur" },
        { loc: [18, 24], title: "Memoize" }
      ]}iv
    />
  </div>
)

export default ExtractSelectors
