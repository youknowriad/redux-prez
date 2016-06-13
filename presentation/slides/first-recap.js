import React from "react"

import { Appear, Heading, Code, List, ListItem, Text } from "spectacle"

const FirstRecap = () => (
  <div>
    <Heading size={1} lineHeight={1} textColor="tertiary">
      Petit récapitulatif
    </Heading>
    <List textColor="primary">
      <ListItem padding="1em 0 0">
        <Appear>
          <div>
            <Text textColor="primary">
              Une fonction <Code textColor="primary" textSize="0.7em">render = state => html</Code>
            </Text>
            <Text textColor="primary" textSize="0.6em">
              qui peut appeler de petits eventHandler
            </Text>
          </div>
        </Appear>
      </ListItem>
      <ListItem padding="1em 0 0">
        <Appear>
          <div>
            <Text textColor="primary">
              Une fonction <Code textColor="primary" textSize="0.7em">reducer = (state, action) => state</Code>
            </Text>
            <Text textColor="primary" textSize="0.6em">
              + Utilitaire <Code textColor="primary" textSize="1em">combineReducers</Code>
            </Text>
          </div>
        </Appear>
      </ListItem>
      <ListItem textColor="primary" padding="1em 0 0">
        <Appear>
          <Text textColor="primary">
            Un bootstrap : createStore and subscribe
          </Text>
        </Appear>
      </ListItem>
    </List>
  </div>
)

export default FirstRecap
