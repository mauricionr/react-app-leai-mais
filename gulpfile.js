var build = require('@microsoft/web-library-build');

build.karma.isEnabled = ()=>{ return false;};
build.tslint.isEnabled = ()=>{ return false;};

build.preCopy.mergeConfig({
  copyTo: { 'lib' : ['src/**/*.html'] }
})

build.initialize(require('gulp'));
