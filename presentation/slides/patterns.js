import React from "react"

import { Appear, Heading, List, ListItem, Text } from "spectacle"

const Patterns = () => (
  <div>
    <Heading size={1} lineHeight={1} textColor="tertiary">
      Good patterns
    </Heading>
    <List textColor="primary">
      <ListItem padding="0.5em 0 0">
        <Appear>
          <Text textColor="primary">
            Ne pas oublier la valeur par défaut dans les reducer
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
            Action creators : le seul endroit ou on peut avoir des fonctions "impures"
          </Text>
        </Appear>
      </ListItem>
      <ListItem padding="0.4em 0 0">
        <Appear>
          <Text textColor="primary">
            Utiliser un fichier de constantes pour les action types
          </Text>
        </Appear>
      </ListItem>
      <ListItem padding="0.4em 0 0">
        <Appear>
          <Text textColor="primary">
            Bien exploiter ES6/7 features :
            spread, Object.assign, decomposition, shorthand syntax
          </Text>
        </Appear>
      </ListItem>
    </List>
  </div>
)

export default Patterns
