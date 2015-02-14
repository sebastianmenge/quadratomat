var Menu = React.createClass({
  displayName: "Menu",

  onSliderChange: function(e) {
    CanvasStore.sliderChange(e.target.name, parseInt(e.target.value));
  },

  render: function() {
    var huesMap = [6, 18, 24, 31, 39, 47, 55, 58, 68, 87, 119, 138, 147, 192, 202, 211, 223, 232, 246, 270, 305, 325, 346, 358];
    var presets = [];
    var hues = _.map(huesMap, function(item) {
      return <ColorButton hue={item} activeHues={this.props.colorCfg.hues}/>
    }.bind(this))
    var presets = _.map(presets, function(item) {
      return <li className='menu-color' activeHues={this.props.colorCfg.hues} onClick={this.handleCLick} style={{background: "hsl("+item+", 100%, 40%)"}} key={item}></li>
    })

    return <div className='menu'>
      <div className='colors-and-presets'>
        <ul className='colors'>
          {hues}
          {presets}
        </ul>
      </div>
      <ul className='settings'>
        <li>
          <label>Squaresize</label>
          <input name='size' type="range" step='2' min='10' max='300' defaultValue={this.props.dim.edge} onChange={this.onSliderChange}/>
        </li>
        <li>
          <label>Lightness</label>
          <input name='lightness' type="range" defaultValue={this.props.colorCfg.lightness} onChange={this.onSliderChange}/>
        </li>
        <li>
          <label>Shades</label>
          <input name='shades' type="range" min='2' max='20' defaultValue={this.props.colorCfg.shades} onChange={this.onSliderChange}/>
        </li>
        <li>
          <label>Shadestep</label>
          <input name='shadeStep' type="range" defaultValue={this.props.colorCfg.shadeStep} onChange={this.onSliderChange}/>
        </li>
        <li>
          <label>Saturation</label>
          <input name='saturation' type="range" defaultValue={this.props.colorCfg.saturation} onChange={this.onSliderChange}/>
        </li>
      </ul>
    </div>
  }
})

var ColorButton = React.createClass({
  displayName: "ColorButton",

  propTypes: {
    hue: React.PropTypes.number.isRequired
  },

  onColorChange: function() {
    var isActive = (_.indexOf(this.props.activeHues, this.props.hue) === -1) ? false : true,
        action = isActive ? 'remove' : 'add';
    CanvasStore.colorChange(action, parseInt(this.props.hue));
  },

  render: function() {
    var activeHues = this.props.activeHues,
        isActive = (_.indexOf(activeHues, this.props.hue) === -1) ? '35%' : '45%',
        style = {background: "hsl("+this.props.hue+", 100%,"+isActive+")"};

    return <li className='menu-color' onClick={this.onColorChange} style={style}></li>
  }

})
