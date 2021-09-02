How to copy the contents of a SVG file based on the icon ID in the clipboard content:

```
icon_id="$(xclip -sel c -out)"; xclip -sel c noun_*_${icon_id}*.svg;
```

