import React from "react"

import { Heading, List, ListItem, Appear, Link, Text } from "spectacle"

const GoingFurther = () => (
  <div>
    <Heading textAlign="left">Et après</Heading>
    <List textColor="primary">
      <ListItem padding="0.5em 0 0">
        <Appear>
          <Text textColor="primary">
            <Link href="https://github.com/gaearon/redux-devtools">DevTools and Time Travel</Link>
          </Text>
        </Appear>
      </ListItem>
      <ListItem padding="0.5em 0 0">
        <Appear>
          <Text textColor="primary">
            <Link href="https://github.com/yelouafi/redux-saga">Redux Saga</Link>
          </Text>
        </Appear>
      </ListItem>
      <ListItem padding="0.5em 0 0">
        <Appear>
          <Text textColor="primary">
            <Link href="http://riadbenguella.com/understand-how-unidirectional-data-flow-can-improve-your-code-quality-angular-js-redux-example/">Redux and AngularJS</Link>
          </Text>
        </Appear>
      </ListItem>
      <ListItem padding="0.5em 0 0">
        <Appear>
          <Text textColor="primary">
            Videos de Dan Abramov : <Link href="https://egghead.io/courses/getting-started-with-redux">Getting Started</Link> and <Link href="https://egghead.io/courses/building-react-applications-with-idiomatic-redux">Ideomatic Redux</Link>
          </Text>
        </Appear>
      </ListItem>
    </List>
  </div>
)

export default GoingFurther
