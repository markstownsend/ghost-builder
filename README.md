# ghost-builder
Repo for building my ghost driven github hosted blog

* Switch in to Ghost directory using node command prompt and start ghost using 

```
npm start
```

* Make desired change.

* Open an admin console and switch in to buster directory

* Execute the following command:

```
buster generate --domain=http://localhost:2368 --dir=C:\mark\ghost-builder-dir
```

* Switch in to ghost-builder-dir and execute the following command: 
```
gulp build
```
* Switch in to dist folder and execute the following commands:
```
git commit -m "my commit comment"
``` 
```
git push
```

Voila a new freely hosted blog post.

[^1]: [Using GitHub Pages with Ghost and Buster on Windows (part 1)](http://leftofnull.com/2014/02/07/using-github-pages-with-ghost-and-buster-on-windows-part-1/index.html)

[^2]: [Using GitHub Pages with Ghost and Buster on Windows (part 2)](http://leftofnull.com/2014/02/24/using-github-pages-with-ghost-and-buster-on-windows-part-2/)
