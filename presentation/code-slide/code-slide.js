import React from "react"

import CodeSlideTitle from "./code-slide-title"
import CodeSlideNote from "./code-slide-note"

import clamp from "lodash.clamp"
import padStart from "lodash.padstart"

import getHighlightedCodeLines from "./getHighlightedCodeLines"
import calculateScrollCenter from "./calculateScrollCenter"
import scrollToElement from "./scrollToElement"

function startOrEnd(index, loc) {
  if (index === loc[0]) {
    return "start"
  } else if (index - 1 === loc[1]) {
    return "end"
  } else {
    return null
  }
}

function calculateOpacity(index, loc) {
  return (loc[0] <= index && loc[1] > index) ? 1 : 0.2
}

function getLineNumber(index) {
  return "<span class=\"token comment\">" + padStart(index + 1, 3) + ".</span> "
}

const style = {
  position: "relative",
  textAlign: "left",
  overflow: "hidden",
  color: "white",
  height: "646px",
  margin: 0,
  padding: "25% 0",
  whiteSpace: "pre-wrap",
  wordBreak: "break-word",
  fontSize: "0.8em"
}

class CodeSlide extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      active: this.getStorageItem() || 0
    }
    this.scrollActiveIntoView = this.scrollActiveIntoView.bind(this)
    this.onResize = this.onResize.bind(this)
    this.onKeyDown = this.onKeyDown.bind(this)
    this.onStorage = this.onStorage.bind(this)
  }

  componentDidMount() {
    document.addEventListener("keydown", this.onKeyDown)
    window.addEventListener("storage", this.onStorage)
    window.addEventListener("resize", this.onResize)
    this.scrollActiveIntoView(true)

    requestAnimationFrame(() => {
      this.scrollActiveIntoView(true)
    })
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.onKeyDown)
    window.removeEventListener("resize", this.onResize)
    window.removeEventListener("storage", this.onStorage)
    localStorage.removeItem(this.getStorageId())
  }

  getStorageId() {
    return "code-slide:" + this.props.slideIndex
  }

  getStorageItem() {
    return +localStorage.getItem(this.getStorageId())
  }

  setStorageItem(value) {
    return localStorage.setItem(this.getStorageId(), "" + value)
  }

  goTo(active, skipLocalStorage) {
    this.setState({ active }, this.scrollActiveIntoView)
    if (!skipLocalStorage) {
      this.setStorageItem(active)
    }
  }

  scrollActiveIntoView(skipAnimation) {
    const {container, start, end} = this.refs
    const scrollTo = calculateScrollCenter(start, end, container)
    scrollToElement(container, 0, scrollTo, {
      duration: skipAnimation ? 1 : 1000
    })
  }

  onResize() {
    this.scrollActiveIntoView(true)
  }

  onKeyDown(e) {
    const prev = this.state.active
    let active = null

    if (e.which === 38) {
      active = prev - 1
    } else if (e.which === 40) {
      active = prev + 1
    }

    if (active !== null) {
      e.preventDefault()
      active = clamp(active, 0, this.props.ranges.length - 1)
      this.goTo(active)
    }
  }

  onStorage(e) {
    if (e.key === this.getStorageId()) {
      this.goTo(+e.newValue, true)
    }
  }

  render() {
    const {code, lang, ranges, ...rest} = this.props
    const {active} = this.state

    const range = ranges[active] || {}
    const loc = range.loc || []

    const lines = getHighlightedCodeLines(code, lang).map((line, index) => {
      return <div
        key={index}
        ref={startOrEnd(index, loc)}
        dangerouslySetInnerHTML={{ __html: getLineNumber(index) + line }}
        style={{ opacity: calculateOpacity(index, loc) }}/>
    })

    return (
      <div style={{ position: "relative" }}>
        {range.title && <CodeSlideTitle>{range.title}</CodeSlideTitle>}

        <pre ref="container" style={style}>
          <code>{lines}</code>
        </pre>

        {range.note && <CodeSlideNote>{range.note}</CodeSlideNote>}
      </div>
    )
  }
}

export default CodeSlide
