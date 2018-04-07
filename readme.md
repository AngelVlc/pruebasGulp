https://css-tricks.com/gulp-for-beginners/

## Simple task:

```
gulp.task('task-name', function() {
    // Stuff here
  });
```

## Task plugin
``` 
gulp.task('task-name', function () {
  return gulp.src('source-files') // Get source files with gulp.src
    .pipe(aGulpPlugin()) // Sends it through a gulp plugin
    .pipe(gulp.dest('destination')) // Outputs the file in the destination folder
})
```

## Globbing

+ *.scss: The * pattern is a wildcard that matches any pattern in the current directory. In this case, we’re matching any files ending with .scss in the root folder (project).
+ **/*.scss: This is a more extreme version of the * pattern that matches any file ending with .scss in the root folder and any child directories.
+ !not-me.scss: The ! indicates that Gulp should exclude the pattern from its matches, which is useful if you had to exclude a file from a matched pattern. In this case, not-me.scss would be excluded from the match.
+ *.+(scss|sass): The plus + and parentheses () allows Gulp to match multiple patterns, with different patterns separated by the pipe | character. In this case, Gulp will match any file ending with .scss or .sass in the root folder.

## Watch

```
gulp.watch('files-to-watch', ['tasks', 'to', 'run']); 
```

## Ejecución

```
gulp watch
```

Que ejecuta las tareas en este orden:

 1. browserSync
 1. sass_con_globbing
 1. watch
