# styledump
is a command-line tool that loads a webpage URL into a [headless chrome browser](https://developers.google.com/web/updates/2017/04/headless-chrome). It then extracts the [computed CSS property values](https://developer.mozilla.org/en-US/docs/Web/API/Window/getComputedStyle) from that web page and return them as JSON. Duplicate property values are removed.

## Installation
1. Make sure you have the [Node.js](https://nodejs.org/en/) Javascript Runtime installed on your system.
2. Open a command line prompt (cmd.exe under Windows or a shell on other operating systems) and type: 

```
npm install -g layoutanalysis/styledump
```

## Usage (Command line)

```
styledump http://www.example.com > styleinfo.json
```

example output: 
```
{
    "properties": {
        "align-content": ["normal"],
        "align-items": ["normal"],
        "align-self": ["auto"],
        "alignment-baseline": ["auto"],
        "all": [""],
        "animation": ["none 0s ease 0s 1 normal none running"],
        "animation-delay": ["0s"],
        "background": ["rgb(255, 255, 255) none repeat scroll 0% 0% / auto padding-box border-box", "rgba(0, 0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box"],
        "background-attachment": ["scroll"],
        "background-blend-mode": ["normal"],
        "background-clip": ["border-box"]
        ...
    },
    "url ": "http: //www.example.com/",
    "title": "Example Domain"
}
```

## License

ISC

---
