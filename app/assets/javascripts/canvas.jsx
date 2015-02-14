var Canvas = React.createClass({
  displayName: "Canvas",

  propTypes: {
    dim: React.PropTypes.object.isRequired,
    colorCfg: React.PropTypes.object.isRequired,
    squares: React.PropTypes.array.isRequired
  },

  componentDidMount: function() {
    this.ctx = this.refs.canvas.getDOMNode().getContext('2d');
    this.paint();
  },

  componentDidUpdate: function() {
    this.paint();
  },

  paint: function() {
    _.each(this.props.squares, function(sqr) {
      this.ctx.clearRect(sqr.x, sqr.y, sqr.edge, sqr.edge)
      this.ctx.fillStyle = sqr.color;
      this.ctx.fillRect(sqr.x, sqr.y, sqr.edge, sqr.edge)
    }.bind(this))
  },


  render: function() {
    var w = window.innerWidth,
        h = window.innerHeight;
    return <canvas width={w} height={h} ref='canvas' id='canvas'></canvas>
  }
})
