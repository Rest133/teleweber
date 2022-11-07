"use strict";

import gulp from "gulp";

const requireDir = require("require-dir");

const paths = {
	views: {
		src: [
			"./src/pages/*.pug"
		],
		dist: "./dist/",
		watch: [
			"./src/blocks/**/*.pug",
			"./src/pages/**/*.pug",
			"./src/views/**/*.pug"
		]
	},
	styles: {
		src: [
			"./src/styles/main.scss",
			"./src/blocks/**/*.scss"
		],
		dist: "./dist/styles/",
		watch: [
			"./src/styles/**/*.scss",
			"./src/blocks/**/*.scss"
		]
	},
	scripts: {
		src: [
			"./src/scripts/index.js",
			"./src/blocks/**/index.js"
		],
		dist: "./dist/scripts/",
		watch: [
			"./src/scripts/**/*.js",
			"./src/blocks/**/index.js"
		]
	},
	images: {
		src: [
			"./src/images/**/*.{jpg,jpeg,png,gif,svg}",
			"!./src/images/icons/*",
			"!./src/images/favicon.{jpg,jpeg,png,gif}"
		],
		dist: "./dist/images/",
		watch: "./src/images/**/*.{jpg,jpeg,png,gif,svg}"
	},
	sprites: {
		src: "./src/images/icons/**/*.svg",
		dist: "./dist/images/icons/",
		watch: "./src/images/icons/**/*.svg"
	},
	fonts: {
		src: "./src/fonts/**/*.{ttf,otf,woff,woff2,eot,svg}",
		dist: "./dist/fonts/",
		watch: "./src/fonts/**/*.{ttf,otf,woff,woff2,eot,svg}"
	},
	gzip: {
		src: "./src/.htaccess",
		dist: "./dist/"
	}
};

requireDir("./tasks/");

export { paths };

export const development = gulp.series(
	"clean",
	gulp.parallel([
		"views",
		"styles",
		"scripts",
		"images",
		"sprites",
		"fonts"
	]),
	gulp.parallel("server")
);

export const production = gulp.series(
	"clean",
	gulp.series([
		"views",
		"styles",
		"scripts",
		"images",
		"sprites",
		"fonts",
		"gzip"
	])
);

export default development;
