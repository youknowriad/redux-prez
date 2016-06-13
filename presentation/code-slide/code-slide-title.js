const React = require('react');

const styles = {
  position: 'absolute',
  left: '50%',
  top: '20px',
  transform: 'translate(-50%)',
  padding: '16px 40px',
  border: '5px solid #5DD572',
  fontSize: '1.5em',
  color: 'white',
  textTransform: 'uppercase',
  whiteSpace: 'nowrap'
};

class CodeSlideTitle extends React.Component {
  render() {
    return (
      <h1 style={styles}>{this.props.children}</h1>
    );
  }
}

export default CodeSlideTitle;
