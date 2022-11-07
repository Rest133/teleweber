"use strict";

import { paths } from "../gulpfile.babel";
import gulp from "gulp";
import gulpif from "gulp-if";
import imagemin from "gulp-imagemin";
import imageminPngquant from "imagemin-pngquant";
import imageminZopfli from "imagemin-zopfli";
import debug from "gulp-debug";
import browsersync from "browser-sync";
import yargs from "yargs";

const argv = yargs.argv,
	production = !!argv.production;

gulp.task("images", () => {
	return gulp.src(paths.images.src)
		.pipe(gulpif(production, imagemin([
			imagemin.gifsicle({
				optimizationLevel: 3
			}),
			imageminPngquant({
				speed: 5,
				quality: [0.8, 0.9]
			}),
			imageminZopfli({
				more: true
			}),
			imagemin.mozjpeg({
				progressive: true,
				quality: 80
			}),
			imagemin.svgo({
				plugins: [
					{ removeViewBox: false },
					{ removeUnusedNS: false },
					{ removeUselessStrokeAndFill: false },
					{ cleanupIDs: false },
					{ removeComments: true },
					{ removeEmptyAttrs: true },
					{ removeEmptyText: true },
					{ collapseGroups: true }
				]
			})
		])))
		.pipe(gulp.dest(paths.images.dist))
		.pipe(debug({
			"title": "- Images:"
		}))
		.pipe(browsersync.stream());
});