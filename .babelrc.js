module.exports = {
  "presets": [
    [
      '@babel/preset-env',
      !process.env.ESMODULES ? {
        modules: false,
      } : undefined,
    ],
    "@babel/preset-react"
  ],
  "plugins": [
    "@babel/plugin-proposal-class-properties",
    [
      "@babel/plugin-transform-runtime",
      {
        "useESModules": !!process.env.ESMODULES,
        "version": "^7.10.4"
      }
    ]
  ]
};