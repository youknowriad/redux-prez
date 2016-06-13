import React from "react"

import { Heading } from "spectacle"
import CodeSlide from "../code-slide/code-slide"

const code = require("raw!../code/extract-action-creators.example")

const ExtractActionCreators = () => (
  <div>
    <Heading fit>{`Extract Action Creators`}</Heading>
    <CodeSlide
      slide-index="action-creators"
      transition={[]}
      lang="js"
      code={code}
      ranges={[
        { loc: [0, 6], title: "État actuel" },
        { loc: [7, 11], title: "Extraire l'action creator" },
        { loc: [12, 15], title: "Utiliser l'action creator" },
        { loc: [16, 20], title: "BindActionCreators" }
      ]}iv
    />
  </div>
)

export default ExtractActionCreators
