---
layout: post
title: Should I Burn?
author: pcushing
category:
- Development
tags:
- react
- api
- nextjs
- integration
date: 2024-04-17 12:17 -0700
image:
  path: "/images/posts/2024-04-17/shouldiburn.jpg"
  lqip: "/images/posts/2024-04-17/shouldiburn_small.jpg"
  alt: Someone using the ShouldIBurn.com app to check the conditions
---
Somewhere in 2020, I bought a home just a little bit out of the city limits with a couple of acres. It's great! It's got a bunch of mature trees too. Imagine my surprise when I started cleaning weeds, leaves, and branches, to find that they don't all just fit in the trash can. Oh! That's why you need a burn pile! 

So off I went to get my $20 burn permit. When I picked it up though, the instructions made me cringe a little. Whenever you want to burn, call this phone number and the rotated audio message will tell you whether the air quality and wind conditions are safe to perform your burn. Who wants to call an automated line to get info I can get from an API? Doesn't it make sense to just hit one page and get a Go / No Go on burn day?

So I built [ShouldIBurn.com](https://shouldiburn.com).

I went with NextJS and TailwindCSS on this project. The built-in API route was especially nice with NextJS. And there's no database required since I'm just pulling data from the OpenWeather and AirNow APIs.

The code lives at [ShouldIBurn on GitHub](https://github.com/paulcushing/ShouldIBurn).

For hosting, I went with [Netlify](https://www.netlify.com/). The hosting is free for most projects and works perfectly with NextJS. 

Once I had it working relatively well, I also added some Progressive Web App features. One of my favorite things to use for my small projects is [RealFaviconGenerator](https://realfavicongenerator.net/). I come up with some sort of image I want to use as the favicon, then use this site to generate the various sizes of icons as well as the manifest that's used to make the site a PWA. This makes it so the user can install the site on their home screen on the phone and use it very similar to a native application.

This has been a fun one that I continue to use at least a few times a year.