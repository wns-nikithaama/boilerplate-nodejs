const gulp = require("gulp");
const nodemon = require("gulp-nodemon");
const eslint = require("gulp-eslint");
const { name } = require("./package.json");

gulp.task("eslint", () =>
  gulp
    .src(["src/*"])
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError())
);

gulp.task("watch", () => {
  nodemon({
    script: "src/server.js --ignore __tests__src/server.js",
    ext: "js",
    ignore: ["./node_modules/**"],
    watch: ["src/*"],
  }).on("restart", function() {
    console.log(`Reiniciando ${name}`);
  });
});

gulp.task("default", gulp.series("eslint", "watch"));
