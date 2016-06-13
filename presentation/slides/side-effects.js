import React from "react"

import { Appear, Heading, List, ListItem, Text } from "spectacle"

const SideEffects = () => (
  <div>
    <Heading fit size={1} lineHeight={1} textColor="tertiary">
      Et les "side effects" dans tout ça ?
    </Heading>
    <List textColor="primary">
      <ListItem padding="1em 0 0">
        <Appear>
          <Text textColor="primary">
            Redux n'a pas d'opinition sur ça (débrouille toi)
          </Text>
        </Appear>
      </ListItem>
      <ListItem padding="1em 0 0">
        <Appear>
          <div>
            <Text textColor="primary">
              Plusieurs solutions possibles : welcome middlewares
            </Text>
            <Text textColor="primary">
              Dispatch anything
            </Text>
            <List>
              <ListItem>A promise</ListItem>
              <ListItem>{'A thunk (function)'}</ListItem>
              <ListItem>An observable ...</ListItem>
            </List>
          </div>
        </Appear>
      </ListItem>
    </List>
  </div>
)

export default SideEffects
