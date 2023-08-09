const mix                  = require("laravel-mix");
const fs                   = require("fs");
const {CleanWebpackPlugin} = require("clean-webpack-plugin");
const productionSourceMaps = process.env.NODE_ENV === "development";

mix.webpackConfig({
    stats: {
        children: true
    },
    plugins: [
        new CleanWebpackPlugin({
            verbose: true,
            cleanOnceBeforeBuildPatterns: [
                "assets"
            ]
        })
    ],
    resolve: {
        fallback: {
            buffer: require.resolve("buffer/")
        }
    }
});

mix.autoload({
    jquery: ["$", "window.jQuery"]
});

mix.options({
    autoprefixer: {remove: false},
    processCssUrls: false,
    cssNano: {
        discardComments: {removeAll: false}
    },
    legacyNodePolyfills: true,
    terser: {
        extractComments: false
    }
});

let elements = [
    "frontend"
];

elements.forEach(name => compile(name));

function compile(name) {
    let jsFile   = "src/js/namefile.js".replace(/namefile/gi, name);
    let scssFile = "src/scss/namefile.scss".replace(/namefile/gi, name);

    if (fs.existsSync(jsFile)) {
        mix.js(jsFile, "assets/js/namefile.min.js".replace(/namefile/gi, name)).sourceMaps(productionSourceMaps, "source-map");
    }

    if (fs.existsSync(scssFile)) {
        mix.sass(scssFile, "assets/css/namefile.min.css".replace(/namefile/gi, name)).sourceMaps(productionSourceMaps, "source-map");
    }
}

mix.copy("src/fonts", "assets/fonts");
mix.copy("src/img", "assets/img");
/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for your application, as well as bundling up your JS files.
 |
 */

// Full API
// mix.js(src, output);
// mix.react(src, output); <-- Identical to mix.js(), but registers React Babel compilation.
// mix.preact(src, output); <-- Identical to mix.js(), but registers Preact compilation.
// mix.coffee(src, output); <-- Identical to mix.js(), but registers CoffeeScript compilation.
// mix.ts(src, output); <-- TypeScript support. Requires tsconfig.json to exist in the same folder as webpack.mix.js
// mix.extract(vendorLibs);
// mix.sass(src, output);
// mix.less(src, output);
// mix.stylus(src, output);
// mix.postCss(src, output, [require('postcss-some-plugin')()]);
// mix.browserSync('my-site.test');
// mix.combine(files, destination);
// mix.babel(files, destination); <-- Identical to mix.combine(), but also includes Babel compilation.
// mix.copy(from, to);
// mix.copyDirectory(fromDir, toDir);
// mix.minify(file);
// mix.sourceMaps(); // Enable sourcemaps
// mix.version(); // Enable versioning.
// mix.disableNotifications();
// mix.setPublicPath('path/to/public');
// mix.setResourceRoot('prefix/for/resource/locators');
// mix.autoload({}); <-- Will be passed to Webpack's ProvidePlugin.
// mix.webpackConfig({}); <-- Override webpack.config.js, without editing the file directly.
// mix.babelConfig({}); <-- Merge extra Babel configuration (plugins, etc.) with Mix's default.
// mix.then(function () {}) <-- Will be triggered each time Webpack finishes building.
// mix.dump(); <-- Dump the generated webpack config object to the console.
// mix.extend(name, handler) <-- Extend Mix's API with your own components.
// mix.options({
//   extractVueStyles: false, // Extract .vue component styling to file, rather than inline.
//   globalVueStyles: file, // Variables file to be imported in every component.
//   processCssUrls: true, // Process/optimize relative stylesheet url()'s. Set to false, if you don't want them touched.
//   purifyCss: false, // Remove unused CSS selectors.
//   terser: {}, // Terser-specific options. https://github.com/webpack-contrib/terser-webpack-plugin#options
//   postCss: [] // Post-CSS options: https://github.com/postcss/postcss/blob/master/docs/plugins.md
// });