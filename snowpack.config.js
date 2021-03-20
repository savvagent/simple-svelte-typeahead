/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  mount: {
    /* ... */
  },
  plugins: [
    '@snowpack/plugin-svelte',
    'snowpack-plugin-less',
    [
      'snowpack-plugin-rollup-bundle', {
        preserveSourceFiles: true,
        entrypoints: [
          'build/src/SimpleSelections.svelte.js',
          'build/src/SimpleTypeahead.svelte.js',
        ],
        extendedConfig: (config) => {
          config.outputOptions = {

          };
          return config;
        },
      },
    ],
  ],
  routes: [
    /* Enable an SPA Fallback in development: */
    // {"match": "routes", "src": ".*", "dest": "/index.html"},
  ],
  optimize: {
    /* Example: Bundle your final build: */
    // "bundle": true,
  },
  packageOptions: {
    /* ... */
  },
  devOptions: {
    open: 'none',
  },
  buildOptions: {
    /* ... */
  },
};
