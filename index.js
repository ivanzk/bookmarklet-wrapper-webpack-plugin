class BookmarkletWrapperPlugin {
  apply(compiler) {
    compiler.hooks.compilation.tap('BookmarkletWrapperPlugin', compilation => {
      compilation.hooks.afterOptimizeChunkAssets.tap(
        'BookmarkletWrapperPlugin',
        chunks => {
          chunks.forEach(chunk => {
            chunk.files.forEach(fileName => {
              const code = compilation.assets[fileName]._value;
              compilation.assets[
                fileName
              ]._value = `javascript:(function(){${code}})();`;
            });
          });
        }
      );
    });
  }
}

module.exports = BookmarkletWrapperPlugin;
