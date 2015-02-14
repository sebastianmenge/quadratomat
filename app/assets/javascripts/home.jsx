var App = React.createClass({
  displayName: "App",

  onChange: function() {
    this.setState(CanvasStore.getState())
  },
  componentDidMount: function() {
    CanvasStore.addListener('change', this.onChange)
  },
  componentWillUnmount: function() {
    CanvasStore.removeListener('change')
  },
  getInitialState: function(){
    return CanvasStore.getState();
  },

  render: function() {
    return <div>
      <Menu dim={this.state.dim} colorCfg={this.state.colorCfg}/>
      <Canvas dim={this.state.dim} colorCfg={this.state.colorCfg} squares={this.state.squares}/>
    </div>
  }
})

window.onload = function() {
  CanvasStore.init(function() {
    React.render(<App/>, document.getElementById('app'))
  })
}
