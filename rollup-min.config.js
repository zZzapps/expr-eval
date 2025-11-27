import rollupConfig from './rollup.config.js';
import { uglify } from 'rollup-plugin-uglify';

rollupConfig.plugins = [uglify()];
rollupConfig.output.file = 'dist/bundle.min.js';

export default rollupConfig;
