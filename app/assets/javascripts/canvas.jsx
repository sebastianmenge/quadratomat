var Canvas = React.createClass({
  displayName: "Canvas",

  propTypes: {
    dim: React.PropTypes.object.isRequired,
    colorCfg: React.PropTypes.object.isRequired
  },

  componentDidMount: function() {
    ctx = this.refs.canvas.getDOMNode().getContext('2d');
    this.createSquares(ctx);
  },

  componentDidUpdate: function() {
    ctx = this.refs.canvas.getDOMNode().getContext('2d');
    this.createSquares(ctx);
  },

  createSquares: function(ctx) {
    var pr = this.props,
        colorCfg = pr.colorCfg,
        w = pr.dim.w,
        h = pr.dim.h,
        x = pr.dim.x,
        y = pr.dim.y;

    var colors = _.shuffle(_.shuffle(this.arrRepeat(this.createColors(colorCfg), 12))),
        columns = parseInt((window.innerWidth / w)+1),
        rows = parseInt((window.innerHeight / h)+1);

    var rect = { w: w, h: h, x: x, y: y };
    for (var i = 0; i < (columns*rows); i++) {
      if (i % columns === 0) {
        rect.y += w
        rect.x = x
      }
      rect.color = colors[i]
      rect.x += h

      ctx.clearRect(rect.x, rect.y, rect.w, rect.h)
      ctx.fillStyle = rect.color;
      ctx.fillRect(rect.x, rect.y, rect.w, rect.h)
    };
  },

  createColors: function(cfg) {
    var colors = [];

    for (var i = 0; i < 13; i++) {
      var hue = cfg.singleHue || cfg.hues[i],
          light = cfg.lightness;

      for (var j = 0; j < cfg.shades; j++) {
        light += 4;
        hsl = 'hsl(' + hue + ', 100%, ' + light + '%)';
        colors.push(hsl);
      }
    }
    return colors;
  },

  arrRepeat: function(arr, times) {
    var repeated = arr,
        times = parseInt(times) || 1;
    for (var i = 0; i < times; i++) {
      repeated = repeated.concat(repeated);
    };
    return repeated;
  },


  render: function() {
    var w = window.innerWidth,
        h = window.innerHeight;
    return <canvas width={w} height={h} ref='canvas'></canvas>
  }
})
