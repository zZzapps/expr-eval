import rollupConfig from './rollup.config.js';

rollupConfig.plugins = [];
rollupConfig.output.file = 'dist/index.mjs';
rollupConfig.output.format = 'esm';

export default rollupConfig;
