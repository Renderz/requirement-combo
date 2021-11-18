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
  // more config: https://d.umijs.org/config
});
