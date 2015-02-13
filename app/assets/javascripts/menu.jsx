var Menu = React.createClass({
  displayName: "Menu",

  handleSizeChange: function(e) {
    CanvasStore.changeSize(parseInt(e.target.value))
  },

  render: function() {
    var huesMap = [7, 24, 32, 45, 57, 67, 76, 93, 130, 152, 183, 196, 212];
    var hues = _.map(huesMap, function(item) {
      return <li onClick={this.handleCLick} style={{background: "hsl("+item+", 100%, 40%)"}}></li>
    })

    return <div className='menu'>
      <ul className='colors'>
        {hues}
      </ul>
      <ul className='presets'>
      </ul>
      <ul className='settings'>
        <input type="range" step={5} min={10} max={300} defaultValue={this.props.dim.w} onChange={this.handleSizeChange}/>
      </ul>
    </div>
  }

})
