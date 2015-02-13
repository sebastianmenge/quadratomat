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
      <Menu dim={this.state.dim}/>
      <Canvas dim={this.state.dim} colorCfg={this.state.colorCfg}/>
    </div>
  }
})


var CanvasStore = {
  _data: {
    dim: {
      w: 10,
      h: 10,
      x: -10,
      y: -10,
    },
    colorCfg: {
      hues: [7, 24, 32, 45, 57, 67, 76, 93, 130, 152, 183, 196, 212],
      singleHue: null,
      shades: 2,
      lightness: 70
    }
  },

  getState: function() {
    return this._data;
  },

  addListener: function(event, onChange) {
    $(document).on(event, function() {
      onChange()
    })
  },

  removeListener: function(event) {
    $(document).off(event)
  },

  triggerEvent: function(event) {
    $(document).trigger(event);
  },


  // ACTIONS
  changeSize: function(size) {
    this._data.dim.w = size;
    this._data.dim.h = size;
    this._data.dim.x = -size;
    this._data.dim.y = -size;
    this.triggerEvent("change");
  }
}


