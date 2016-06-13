import React from "react"

import { Heading } from "spectacle"
import CodeSlide from "../code-slide/code-slide"
import Preview from "../utils/preview"

const code = require("raw!../code/rewrite-react.example")
import run from "../preview/step-7"

const RewriteInReact = () => (
  <Preview run={run}>
    <Heading fit>{`Réécrire le render en React`}</Heading>
    <CodeSlide
      slide-index="rewrite-react"
      transition={[]}
      lang="js"
      code={code}
      ranges={[
        { loc: [40, 41], title: "Le composant TodoList" },
        { loc: [50, 57], title: "Le composant TodoList", note: "Action Toggle" },
        { loc: [59, 66], title: "Le composant TodoList", note: "String to JSX" },
        { loc: [70, 71], title: "Le composant FilterLinks" },
        { loc: [77, 84], title: "Le composant FilterLinks", note: "Action Filter" },
        { loc: [87, 93], title: "Le composant FilterLinks", note: "String to JSX" },
        { loc: [99, 100], title: "Le composant NewTodoForm" },
        { loc: [101, 110], title: "Le composant NewTodoForm", note: "Action newTodo" },
        { loc: [113, 117], title: "Le composant NewTodoForm", note: "String to JSX" },
        { loc: [121, 128], title: "Le composant App" },
        { loc: [130, 131], title: "Le render" }
      ]}
    />
  </Preview>
)

export default RewriteInReact
