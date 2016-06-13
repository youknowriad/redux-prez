import React from "react"

import { Appear, Heading, Text, Image } from "spectacle"

const images = {
  sencha: require("../../assets/sencha.png"),
  dojo: require("../../assets/dojo.png"),
  backbone: require("../../assets/backbone.png"),
  angular: require("../../assets/angular.png"),
  ember: require("../../assets/ember.png")
}

const Spa = () => (
  <div>
    <Heading size={1} fit lineHeight={1} textColor="primary">
      Comment on écrit une SPA ?
    </Heading>
    <Appear>
      <Text margin="1em 0 0" size={2} lineHeight={1} textColor="primary" textAlign="left">
        Desktop Like Applications
        <Image src={images.sencha} style={{ maxHeight: "80px", verticalAlign: "middle", paddingLeft: "1em" }} />
        <Image src={images.dojo} style={{ maxHeight: "80px", verticalAlign: "middle", paddingLeft: "1em" }} />
      </Text>
    </Appear>
    <Appear>
      <Text margin="0.5em 0 0" size={2} lineHeight={1} textColor="primary" textAlign="left">
        Backend Like Pattern (MVC)
        <Image src={images.backbone} style={{ maxHeight: "80px", verticalAlign: "middle", paddingLeft: "1em" }} />
      </Text>
    </Appear>
    <Appear>
      <Text margin="0.5em 0 0" size={2} lineHeight={1} textColor="primary" textAlign="left">
        MVW (AngularJS, EmberJS)
        <Image src={images.angular} style={{ maxHeight: "80px", verticalAlign: "middle", paddingLeft: "1em" }} />
        <Image src={images.ember} style={{ maxHeight: "80px", verticalAlign: "middle", paddingLeft: "1em" }} />
      </Text>
    </Appear>
  </div>
)

export default Spa
