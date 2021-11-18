const syntaxHighlight = require('@11ty/eleventy-plugin-syntaxhighlight');
const fs = require('fs');

// Import filters
const dateFilter = require('./src/filters/date-filter.js');
const markdownFilter = require('./src/filters/markdown-filter.js');
const w3DateFilter = require('./src/filters/w3-date-filter.js');

// Import transforms
const htmlMinTransform = require('./src/transforms/html-min-transform.js');
const parseTransform = require('./src/transforms/parse-transform.js');

// Import data files
const site = require('./src/_data/site.json');

module.exports = function(config) {
  // Filters
  config.addFilter('dateFilter', dateFilter);
  config.addFilter('markdownFilter', markdownFilter);
  config.addFilter('w3DateFilter', w3DateFilter);

  // Layout aliases
  config.addLayoutAlias('home', 'layouts/home.njk');

  // Transforms
  config.addTransform('htmlmin', htmlMinTransform);
  config.addTransform('parse', parseTransform);

  // Passthrough copy
  config.addPassthroughCopy('src/fonts');
  config.addPassthroughCopy('src/images');
  config.addPassthroughCopy('src/js');
  config.addPassthroughCopy('src/mp3');
  config.addPassthroughCopy('src/admin/config.yml');
  config.addPassthroughCopy('src/admin/previews.js');
  config.addPassthroughCopy('node_modules/nunjucks/browser/nunjucks-slim.js');
  config.addPassthroughCopy('src/robots.txt');

  config.addPassthroughCopy('src/android-chrome-192×192.png');
  config.addPassthroughCopy('src/android-chrome-512×512.png');
  config.addPassthroughCopy('src/apple-touch-icon-180×180.png');
  config.addPassthroughCopy('src/browserconfig.xml');
  config.addPassthroughCopy('src/favicon-16×16.png');
  config.addPassthroughCopy('src/favicon-32×32.png');
  config.addPassthroughCopy('src/favicon.ico');
  config.addPassthroughCopy('src/mstile-70×70.png');
  config.addPassthroughCopy('src/mstile-150×150.png');
  config.addPassthroughCopy('src/mstile-310×150.png');
  config.addPassthroughCopy('src/mstile-310×310.png');
  config.addPassthroughCopy('src/og-image-1020×456.png');
  config.addPassthroughCopy('src/og-image-1200×620.png');
  config.addPassthroughCopy('src/safari-pinned-tab.svg');
  config.addPassthroughCopy('src/site.webmanifest');

  const now = new Date();

  // Custom collections
  const livePosts = post => post.date <= now && !post.data.draft;
  config.addCollection('posts', collection => {
    return [
      ...collection.getFilteredByGlob('./src/posts/*.md').filter(livePosts)
    ].reverse();
  });

  config.addCollection('postFeed', collection => {
    return [...collection.getFilteredByGlob('./src/posts/*.md').filter(livePosts)]
      .reverse()
      .slice(0, site.maxPostsPerPage);
  });

  // Plugins
  config.addPlugin(syntaxHighlight);
  
  /* Forestry instant previews 
  if( process.env.ELEVENTY_ENV == "staging" ) {
    eleventyConfig.setBrowserSyncConfig({
      host: "0.0.0.0"
    });
  }*/

  // 404
  config.setBrowserSyncConfig({
    callbacks: {
      ready: function(err, browserSync) {
        const content_404 = fs.readFileSync('dist/404.html');

        browserSync.addMiddleware('*', (req, res) => {
          // Provides the 404 content without redirect.
          res.write(content_404);
          res.end();
        });
      }
    }
  });

  return {
    // pathPrefix: "/bigborealis/",
    dir: {
      input: 'src',
      output: 'dist'
    },
    passthroughFileCopy: true
  };
};
