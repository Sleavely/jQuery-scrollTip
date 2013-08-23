jQuery-scrollTip
================

A simple Table-of-Contents plugin that indicates where on your scrollbar a set of elements are.

Usage:
--

Default settings:
```javascript
jQuery("h1, h2").scrollTip();
```

Changing the timing:
```javascript
jQuery("h2").scrollTip({
  fadeDuration : 300, //How long it takes to fade in/out
  sleepDuration : 2000, //How long to show the tooltip before hiding it again
});
```

If your scrollbar is limited to a certain container instead of the `<body>`:
```javascript
jQuery("h2").scrollTip({
  scrollbar : '#scrollContainer',
});
```

### [Demo](http://sleavely.github.io/jQuery-scrollTip/)
