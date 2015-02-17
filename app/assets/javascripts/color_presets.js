var ColorDef = {
  menuColors: [6, 18, 24, 31, 39, 47, 55, 58, 68, 87, 119, 138, 147, 192, 202, 211, 223, 232, 246, 270, 305, 325, 346, 358],

  presets: {
    playground: {
      name: 'playground',
      dim: {
        edge: 12,
        x: -12,
        y: -12,
      },
      color: {
        hues: [6, 18, 24, 31, 39, 47, 55, 58, 68, 87, 119, 138, 147, 192, 202, 211],
        shades: 2,
        shadeStep: 0,
        lightness: 61,
        saturation: 100,
      }
    },

    matrix: {
      name: 'matrix',
      dim: {
        edge: 10,
        x: -10,
        y: -10,
      },
      color: {
        hues: [147],
        shades: 2,
        shadeStep: 5,
        lightness: 33,
        saturation: 100,
      }
    },

    hereandthere: {
      name: 'hereandthere',
      dim: {
        edge: 47,
        x: -47,
        y: -47,
      },
      color: {
        hues: [31, 39, 47, 55, 58, 68, 87, 119, 138, 147, 192, 202],
        shades: 9,
        shadeStep: 36,
        lightness: 34,
        saturation: 100,
      }
    },

    standard: {
      name: 'standard',
      dim: {
        edge: 87,
        x: -87,
        y: -87,
      },
      color: {
        hues: [6, 18, 24, 31, 39, 87, 192, 147, 202, 138, 119, 47, 55],
        shades: 2,
        shadeStep: 30,
        lightness: 44,
        saturation: 100,
      }
    },

    lagoon: {
      name: 'lagoon',
      dim: {
        edge: 55,
        x: -55,
        y: -55,
      },
      color: {
        hues: [192],
        shades: 20,
        shadeStep: 2,
        lightness: 40,
        saturation: 100,
      }
    },

    white: {
      name: 'white',
      dim: {
        edge: 30,
        x: -30,
        y: -30,
      },
      color: {
        hues: [],
        shades: 2,
        shadeStep: 4,
        lightness: 40,
        saturation: 100,
      }
    }
  }
}
