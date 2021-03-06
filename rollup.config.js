export default {
  entry: 'dist/lib/markdown-to-html.module.js',
  dest: 'dist/bundles/ng2-markdown-to-html.umd.js',
  sourceMap: false,
  format: 'umd',
  moduleName: 'ng.markdowntohtml',
  globals: {
    '@angular/core': 'ng.core',
    '@angular/http': 'ng.http',
    'marked': 'marked',
    'prismjs': 'prismjs',
    'rxjs/Observable': 'Rx',
  },
  external: [
    '@angular/core',
    '@angular/http',
    'marked',
    'prismjs',
    'prismjs/prism',
    'prismjs/components/prism-c',
    'prismjs/components/prism-cpp',
    'prismjs/components/prism-csharp',
    'prismjs/components/prism-css',
    'prismjs/components/prism-diff',
    'prismjs/components/prism-java',
    'prismjs/components/prism-javascript',
    'prismjs/components/prism-perl',
    'prismjs/components/prism-php',
    'prismjs/components/prism-python',
    'prismjs/components/prism-sass',
    'prismjs/components/prism-scss',
    'prismjs/components/prism-typescript',
    'rxjs/Observable',
    'rxjs/add/operator/catch',
    'rxjs/add/operator/map',
  ],
}