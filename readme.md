# styledump
extract [computed CSS property values](https://developer.mozilla.org/en-US/docs/Web/API/Window/getComputedStyle) from a web page and return them as JSON.

## Installation

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
