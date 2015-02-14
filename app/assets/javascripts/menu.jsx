var Menu = React.createClass({
  displayName: "Menu",

  onSliderChange: function(e) {
    CanvasStore.sliderChange(e.target.name, parseInt(e.target.value));
  },

  render: function() {
    var colorMap = ColorDef.menuColors;
    var presets = ColorDef.presets
    var hues = _.map(colorMap, function(item) {
      return <ColorButton hue={item} activeHues={this.props.colorCfg.hues}/>
    }.bind(this))
    var presets = _.map(presets, function(preset) {
      return <PresetButton preset={preset}/>
    }.bind(this))

    return <div className='menu'>
      <div className='colors-and-presets'>
        <ul className='colors'>
          {presets}
          {hues}
        </ul>
        <ul className='settings'>
          <li>
            <label>Squaresize</label>
            <input name='size' type="range" step='2' min='10' max='300' value={this.props.dim.edge} onChange={this.onSliderChange}/>
          </li>
          <li>
            <label>Lightness</label>
            <input name='lightness' type="range" value={this.props.colorCfg.lightness} onChange={this.onSliderChange}/>
          </li>
          <li>
            <label>Shades</label>
            <input name='shades' type="range" min='2' max='20' value={this.props.colorCfg.shades} onChange={this.onSliderChange}/>
          </li>
          <li>
            <label>Shadestep</label>
            <input name='shadeStep' type="range" max='55' value={this.props.colorCfg.shadeStep} onChange={this.onSliderChange}/>
          </li>
          <li>
            <label>Saturation</label>
            <input name='saturation' type="range" value={this.props.colorCfg.saturation} onChange={this.onSliderChange}/>
          </li>
        </ul>
      </div>
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
        isActive = (_.indexOf(activeHues, this.props.hue) === -1) ? '92%' : '68%',
        style = {background: "hsl("+this.props.hue+", 100%,"+isActive+")"};

    return <li className='menu-color' onClick={this.onColorChange} style={style}></li>
  }

})

var PresetButton = React.createClass({
  displayName: "PresetButton",

  propTypes: {
    preset: React.PropTypes.object.isRequired
  },

  onPresetChange: function() {
    CanvasStore.presetChange(this.props.preset);
  },

  render: function() {
    var presetName = this.props.preset.name;

    return <li className={'menu-preset '+'preset-'+presetName} onClick={this.onPresetChange}></li>
  }

})
