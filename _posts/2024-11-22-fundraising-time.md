---
layout: post
title: Fundraising Time
author: pcushing
category:
  - Development
tags:
  - javascript
  - custom-elements
  - web-components
image:
  path: "/images/posts/2024-11-22/christmastime.jpg"
  lqip: "/images/posts/2024-11-22/christmastime_small.jpg"
  alt: Christmas lights on the tree
date: 2024-11-22 17:10 -0700
---

<script src="https://paulcushing.dev/web-components/fundraisingBar.js"></script>

We're rounding Thanksgiving time and heading into the Christmas season. It's a time when many non-profits are looking to raise funds for their causes. One of the most common ways to do this is through a fundraising thermometer. You've probably seen them before. They're a graphic representation of a goal amount and the amount raised so far. The thermometer fills up as the donations come in.

I was thinking about how I would go about creating one of these for a website. I thought it would be a fun exercise to create a custom element for it. I think it looks nice to have it work in horizontal, so let's call it a fundraiser bar, since it doesn't really resemble a thermometer much. Here's what I came up with.

<fundraising-bar currentAmount="675000" goal="1000000" primaryColor="#ffffff"></fundraising-bar>

It's responsive, so it will fill the width of its container. You can set the current amount and the goal amount as attributes on the element. The bar will fill up to the percentage of the goal amount that the current amount represents. It's a simple way to add a fundraising bar to your website.

To include it on your site, you can add the following script tag to the header of your page.

```html
<script src="https://paulcushing.dev/web-components/fundraisingBar.js"></script>
```

Then you can add the custom element to your page like this.

```html
<fundraising-bar currentAmount="675000" goal="1000000"></fundraising-bar>
```

Other options include setting the primary and secondary colors of the design and changing the units displayed.

For instance, some friends here in town are taking donations of turkeys for families in need. Imagine they're looking to collect 500 turkeys. I could add a fundraising bar to their site like this.

<fundraising-bar currentAmount="323" goal="500" primaryColor="#8d6609" secondaryColor="#50C878" units="Turkeys"></fundraising-bar>

You can find more information on the GitHub page. Feel free to use it on your own site. It's hosted directly on GitHub too. If you have any questions or suggestions for improvements, let me know. I'd love to hear from you.

> [Check out the code on GitHub](https://github.com/paulcushing/web-components)
