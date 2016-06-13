const React = require('react');

const style = {
  position: 'absolute',
  bottom: '4em',
  width: '100%',
  padding: '20px',
  background: 'black',
  color: 'white',
  fontFamily: 'monospace',
  textAlign: 'left'
};

class CodeSlideNote extends React.Component {
  render() {
    return (
      <div style={style}>
        {this.props.children}
      </div>
    );
  }
}

export default CodeSlideNote;
