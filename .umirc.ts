import { defineConfig } from 'dumi';

export default defineConfig({
  esbuild: {},
  extraBabelPlugins: [
    [
      'import',
      {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: 'css',
      },
    ],
  ],
  title: 'Hello FBMS',
  mode: 'site',
  publicPath: '/requirement-combo/',
  base: '/requirement-combo/',
  // more config: https://d.umijs.org/config
});
