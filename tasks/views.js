"use strict";

import { paths } from "../gulpfile.babel";
import gulp from "gulp";
import pug from "gulp-pug";
import pugbem from "gulp-pugbem";
import gulpif from "gulp-if";
import replace from "gulp-replace";
import browsersync from "browser-sync";
import yargs from "yargs";

const argv = yargs.argv,
	production = !!argv.production;

pugbem.e = "__";
pugbem.m = "_";

gulp.task("views", () => {
	return gulp.src(paths.views.src)
		.pipe(pug({
			plugins: [pugbem],
			pretty: "    "
		}))
		.pipe(gulp.dest(paths.views.dist))
		.pipe(browsersync.stream());
});