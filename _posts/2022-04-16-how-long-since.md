---
title: How Long Since...
author: pcushing
date: 2022-04-16 11:33:00 -0700
categories: [Projects]
tags: [javascript]
image:
  path: /images/posts/20220416/hourglass.jpg
  lqip: /images/posts/20220416/hourglass_small.jpg
  alt: Showing how long it's been since a given date
draft: true
---

Now and then, I think back about an important time in my life. And I wonder, how long has it been since then? When that happens, I typically do a Google search for the time since `some date` and get a number of days or weeks.

It happened enough times finally that I decided to build something. Initially, I hard-coded a date I found useful. Then styled it to look nice using Tailwind CSS. I hit that page from time to time to be reminded of how long it's been.

Over time though, I thought of other dates that might be useful to have a page for. Instead of having a different page for each date, I used JavaScript to catch some URL parameters and render the time frames based on that. It makes the page far more flexible.

```javascript
const urlParams = new URLSearchParams(window.location.search);
const m = urlParams.get("m") || 6; // month
const d = urlParams.get("d") || 6; // day
const y = urlParams.get("y") || 1944; // year
const h = urlParams.get("h") || 9; // hour
```

The result is at <a href="https://paulcushing.github.io/since.html?m=12&d=25&y=2000&h=9" target="_blank">Since</a>.

Now, if you want keep it simple so you don't have to add the variables each time you want to see the elapsed time, you can create a redirect on your server, or even use a shortlink service.
