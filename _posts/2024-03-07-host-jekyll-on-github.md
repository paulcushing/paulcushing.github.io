---
layout: post
title: Host Jekyll on GitHub
author: pcushing
category:
  - Development
tags:
  - github
  - jekyll
  - hosting
  - webdev
date: 2024-03-07 10:54 -0700
image:
  path: /images/posts/2024-03-07/city.jpg
  lqip: /images/posts/2024-03-07/city_small.jpg
  alt: A city of internet parts
---

I recently moved my technical blog to Jekyll, hosted on GitHub. (That's this site.) It's a great way to host a site for FREE, and it's mostly easy to set up. One of my favorite things about it is that I can write my posts in Markdown, and then push them to GitHub. GitHub takes care of the rest. No database required. No subscription fees. No server to maintain. It's a great!

Here's how I did it.

---

Requirements: A GitHub account

GitHub Pages is included for free on Public repositories. If you want to host a private site, you'll need a paid account. Since you want your site to be public anyway, a public repo makes perfect sense.

---

## Step 1: Create a new repository

In my case, I'm actually using the one associated with my user account. (paulcushing.github.io) If you'd rather, you can also create a new repository specifically for your site. See [GitHub Pages](https://pages.github.com/) for more information.

## Step 2: Copy files from theme's repo

I looked around at a few themes and found one I liked.

For me, [Chirpy](https://github.com/cotes2020/jekyll-theme-chirpy) was simple and included everything I wanted. I copied the files from the theme's repo into my new repo. Then I made a few changes to the `_config.yml` file to customize it for my site.

## Step 3: Write a post

I liked the idea of being able to have posts in DRAFT as well as PUBLISHED. I considered just having a `drafts` git branch, but I came across the [Jekyll Compose](https://github.com/jekyll/jekyll-compose) plugin instead. It's a great way to manage drafts and posts.

To create my first draft, I ran:

```bash
bundle exec jekyll draft "My First Post"
```

Then I edited the file in the `_drafts` directory. When I was ready to publish it, I ran:

```bash
bundle exec jekyll publish _drafts/my-first-post.md
```

There are also options for backdating the post, or unpublishing it. Check out the [Jekyll Compose](https://github.com/jekyll/jekyll-compose) plugin for more information.

Since the Chirpy theme came with some helpful starter posts, I wanted to keep them around for reference. I moved them to the `_drafts` directory so they'd still be around but not be published.

While you're working on your posts, or even tweaking the theme, you can run a local server to see your changes. To see what the public will see just run:

```bash
bundle exec jekyll serve
```

If you want to see drafts as well, run:

```bash
bundle exec jekyll serve --drafts
```

Then visit `http://localhost:4000` in your browser.

## Step 4: Push to GitHub

The Chirpy theme comes with some great GitHub workflows. I didn't have a use for most of those though, so I simplified things by removing them and consolidating the parts I wanted in my own workflow I called `shipit`. Check it out at [shipit.yml](https://github.com/paulcushing/paulcushing.github.io/blob/main/.github/workflows/shipit.yml) if that's helpful to you.

I pushed my changes to GitHub. Then I went to the settings for my repo and scrolled down to the GitHub Pages section. I selected the `main` branch and the `root` directory. Then I clicked `Save`.

## Step 5: Wait

It took a few minutes for GitHub to build my site. Once it was done, I was able to visit my site at `https://paulcushing.github.io`.

For me, I also wanted my site to be available at `https://paulcushing.dev`. I used the repo Settings. Clicking on the Pages menu option reveals a field for a Custom Domain. I filled it in, then I went to my domain registrar and added a CNAME record to point to `paulcushing.github.io`. It took a few minutes for the DNS to update, but then I was able to visit my site at `https://paulcushing.dev`.

---

That's it! I was up and running with a new site in no time. I hope this helps you get started with your own site. If you have any questions, feel free to reach out to me on [thePaulCushing.com](https://thepaulcushing.com). I'm happy to help.
