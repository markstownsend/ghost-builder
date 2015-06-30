# ghost-builder
Repo for building my ghost driven, github hosted blog.

There are a couple of post-Buster steps to clean up some of the output from that program.

* Switch in to Ghost directory using node command prompt and start ghost using 

```
npm start
```

* Make desired change.  Note: if your desired change involves deleting anything then you should perform a
```
gulp deep-clean
```
before executing the buster steps.  This is because the buster generate does not clean out the destination directory.

* Open an admin console and switch in to buster directory

* Execute the following command:

```
buster generate --domain=http://localhost:2368 --dir=C:\mark\ghost-builder-dir\static\
```

* Switch in to ghost-builder-dir and execute the following command: 
```
gulp shallow-clean
```
```
gulp build
```
* Switch in to markstownsend.github.io folder and execute the following commands:
```
git commit -m "my commit comment"
``` 
```
git push
```

Voila a new freely hosted blog post.
---

[^1]: [Using GitHub Pages with Ghost and Buster on Windows (part 1)](http://leftofnull.com/2014/02/07/using-github-pages-with-ghost-and-buster-on-windows-part-1/index.html)

[^2]: [Using GitHub Pages with Ghost and Buster on Windows (part 2)](http://leftofnull.com/2014/02/24/using-github-pages-with-ghost-and-buster-on-windows-part-2/)

[^3]: This is not a perfect process so it's worth keeping an eye out for odd errors that appear.  Look at the gulp.replace tasks for examples that have occurred.

[^4]: This is the expected folder structure for this to work without changes:

```
.
+-- buster
+-- ghost-0.6.4
|   +-- content\images
|   +-- content\themes\slimpost-master\assets
+-- ghost-builder
|   +-- .git
|   +-- .gitignore
|   +--gulpfile.js
|   +--LICENSE
|   +--README.md
|   +--markstownsend.github.io
    |   +-- .git
    |   +-- .gitignore
    |   +-- CNAME
    |   +-- README.md
    |   +-- gulp generated dynamic content
    +--static
    |   +-- buster generated dynamic content
```