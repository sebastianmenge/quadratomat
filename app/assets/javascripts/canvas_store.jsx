var CanvasStore = {
  _data: {
    squares: [],
    dim: $.extend(true, {}, ColorDef.presets.lagoon.dim),
    colorCfg: $.extend(true, {}, ColorDef.presets.lagoon.color)
  },

  init: function(callback) {
    this._data.squares = this.setSquares();
    callback()
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
  sliderChange: function(attr, val) {
    if (attr === 'size') {
      this._data.dim = {edge: val, x: -val, y: -val};
    } else {
      this._data.colorCfg[attr] = val;
    }
    this._data.squares = this.setSquares();
    this.triggerEvent("change");
  },

  colorChange: function(action, color) {
    var hues = this._data.colorCfg.hues,
        index = _.indexOf(hues, color);

    if (hues.length === 1 && action === 'remove' ) return;

    (action==='add') ? hues.push(color) : hues.splice(index, 1)
    this._data.squares = this.setSquares();
    this.triggerEvent("change");
  },

  presetChange: function(pre) {
    var copied = $.extend(true, {}, pre);
    this._data.dim = copied.dim;
    this._data.colorCfg = copied.color;
    this._data.squares = this.setSquares();
    this.triggerEvent("change");
  },

  // COLOR CREATION
  setSquares: function() {
    var data = this._data,
        edge = data.dim.edge,
        x = data.dim.x,
        y = data.dim.y;

    var columns = parseInt((window.innerWidth / edge)+1),
        rows = parseInt((window.innerHeight / edge)+1),
        colors = this.createColors(columns*rows);

    var squares = [],
        xPos = x,
        yPos = y;

    for (var i = 0; i < (columns*rows); i++) {
      var square = { edge: edge, x: null, y: null }

      if (i % columns === 0) {
        xPos = x
        yPos += edge
        square.y = yPos
      }
      xPos += edge
      square.color = colors[i]
      square.x = xPos
      square.y = yPos
      squares.push(square)
    };
    return squares;
  },

  createColors: function(numOfSquares) {
    var colors = [],
        cfg = this._data.colorCfg;

    if (cfg.hues.length === 0) {
      var hsl = 'hsl(0, 100%, 100%)'
      colors.push(hsl)
    } else {
      for (var i = 0; i < cfg.hues.length; i++) {
        var hue = cfg.hues[i],
            light = cfg.lightness;
        for (var j = 0; j < cfg.shades; j++) {
          light += cfg.shadeStep;
          var hsl = 'hsl(' + hue + ', ' + cfg.saturation + '%, ' + light + '%)';
          colors.push(hsl);
        }
      }
    }
    return _.shuffle(_.shuffle(this.multiplyColors(colors, numOfSquares)));
  },

  multiplyColors: function(colors, squaresOnScreen) {
    var multiplicator = Math.round(squaresOnScreen/colors.length)+1,
        multipliedColors = [];
    for (var i = 0; i < multiplicator; i++) {
      multipliedColors.push(colors)
    };
    multipliedColors = _.flatten(multipliedColors)
    return multipliedColors;
  }
}


