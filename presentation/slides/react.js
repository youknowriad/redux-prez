import React from "react"

import { Appear, Heading, Code, List, ListItem, Text, Layout, Fill, CodePane } from "spectacle"

const code = require("raw!../code/react.example")

const ReactSlide = () => (
  <div>
    <Heading fit size={1} lineHeight={1} textColor="tertiary">
      Et si on écrivait un peu de React
    </Heading>
    <Layout>
      <Fill>
        <List textColor="primary" padding="0 1em 0 0">
          <ListItem>
            <Appear>
              <Text textColor="primary">
                Un arbre de composants
              </Text>
            </Appear>
          </ListItem>
          <ListItem padding="1em 0 0">
            <Appear>
              <div>
                <Text textColor="primary">
                  Un composant est une fonction pure
                </Text>
                <Code textColor="primary" textSize="0.6em">
                  component = props => element
                </Code>
              </div>
            </Appear>
        </ListItem>
          <ListItem padding="1em 0 0">
            <Appear>
              <Text textColor="primary">
                Un composant peut avoir un state interne
              </Text>
            </Appear>
          </ListItem>
        </List>
      </Fill>
      <Fill>
        <div style={{padding: "2em 0 0"}}>
          <Appear>
            <CodePane
              lang="js"
              source={code}
            />
          </Appear>
        </div>
      </Fill>
    </Layout>
  </div>
)

export default ReactSlide
