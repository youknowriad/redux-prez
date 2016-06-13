import React from "react"

import { Heading } from "spectacle"
import CodeSlide from "../code-slide/code-slide"
import Preview from "../utils/preview"

const code = require("raw!../code/event-dispatcher.example")
import run from "../preview/step-3"

const EventDispatcher = () => (
  <Preview run={run}>
    <Heading fit>(In)dépendance state/render</Heading>
    <CodeSlide
      slide-index="event-dispatcher"
      transition={[]}
      lang="js"
      code={code}
      ranges={[
        { loc: [26, 29], title: "Subscribe", note: "prend un listener en param" },
        { loc: [30, 35], title: "Subscribe", note: "retourne un \"unsubcribe\"" },
        { loc: [39, 41], title: "Dispatch", note: "notifie les listeners" },
        { loc: [51, 54], title: "Update the boostrap" }
      ]}
    />
  </Preview>
)

export default EventDispatcher
