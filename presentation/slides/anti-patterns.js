import React from "react"

import { Appear, Heading, List, ListItem, Text } from "spectacle"

const AntiPatterns = () => (
  <div>
    <Heading size={1} lineHeight={1} textColor="tertiary">
      Bad patterns
    </Heading>
    <List textColor="primary">
      <ListItem padding="0.5em 0 0">
        <Appear>
          <Text textColor="primary">
            {"Attention à l'immutabilité : new Date()"}
          </Text>
        </Appear>
      </ListItem>
      <ListItem padding="0.4em 0 0">
        <Appear>
          <Text textColor="primary">
            Les reducers sont des fonctions pures
          </Text>
        </Appear>
      </ListItem>
      <ListItem padding="0.4em 0 0">
        <Appear>
          <Text textColor="primary">
            Pas de dispatch dans un subscribe (boucle)
          </Text>
        </Appear>
      </ListItem>
    </List>
  </div>
)

export default AntiPatterns
