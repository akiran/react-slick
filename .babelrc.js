const useESModules = !!process.env.ESMODULES;

if (process.env.NODE_ENV === 'test') {
  module.exports = {
    presets: [
      '@babel/preset-env',
      "@babel/preset-react"
    ],
    plugins: [
      "@babel/plugin-proposal-class-properties",
      "@babel/plugin-transform-runtime",
    ]
  };
} else {
  module.exports = {
    "presets": [
      [
        '@babel/preset-env',
        {
          modules: useESModules ? false : 'auto',
        }
      ],
      "@babel/preset-react"
    ],
    "plugins": [
      "@babel/plugin-proposal-class-properties",
      [
        "@babel/plugin-transform-runtime",
        {
          useESModules,
          version: "^7.10.4",
        }
      ]
    ]
  };
}
