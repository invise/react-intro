var example = [
    'class Counter extends React.Component {',
    '  constructor (props) {',
    '    super(props)',
    ' ',
    '    this.state = { count: props.initialCount }',
    '  }',
    ' ',
    '  render () {',
    '    return (',
    '      <div onClick={ev => this.tick()}>',
    '        Clicks: {this.state.count}',
    '      </div>',
    '    )',
    '  }',
    ' ',
    '  tick () {',
    '    this.setState({ count: this.state.count + 1 })',
    '  }',
    '}',
    ' ',
    'Counter.propTypes = { initialCount: React.PropTypes.number }',
    'Counter.defaultProps = { initialCount: 0 }'
]

export default example.join('\n')
