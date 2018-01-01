# m.wikipedia 

> A browser extension that forces the mobile web version of Wikipedia

## Install

Find the extension on the [webstore](https://chrome.google.com/webstore/search/Fi?utm_source=m.wikipedia)

Go to any article page on Wikipedia:

`https://en.wikipedia.org/wiki/Main_Page` is redirected to `https://en.m.wikipedia.org/wiki/Main_Page`

To disable, add `?desktop` to the url:

`https://en.wikipedia.org/wiki/Main_Page?desktop` will no longer redirect to mobile. Adding `?desktop` to a mobile url will redirect to the desktop site.

## Build

```sh
npm build
```

## License

MIT © [Sam Breed](samuel.breed@gmail.com)
