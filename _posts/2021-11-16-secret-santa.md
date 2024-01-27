---
layout: post
title: Secret Santa
author: pcushing
category:
  - Development
tags:
  - javascript
image:
  path: "/images/posts/2021-11-16/santa.jpg"
  lqip: "/images/posts/2021-11-16/santa_small.jpg"
  alt: Secret Santa preparing for delivery
date: 2021-11-16 11:41 -0700
---

It's that time of year again. The time when your family or co-workers start dreaming of all the ways to celebrate the Christmas holiday. In larger groups, that sometimes comes with the preparation for a Secret Santa gift exchange.

Some folks pull out the notebook paper, then start tearing it into little bits and writing everyone's names on them. Then, everyone draws a name. It's worked for centuries! But wait! What happens if the last person is up, and they end up with their own name? Dang-it! Everybody drop your paper back in and let's go again.

Or... you can do it with Javascript.

I was just thinking about how I would go about it to ensure it didn't miss anyone and was adequately random. Here's what I came up with.

```javascript
const nameList = [
  "carl",
  "sarah",
  "tim",
  "george",
  "ralph",
  "tina",
  "jessica",
  "leslie"
];

/* Randomly shuffle the name list */
function shuffle(array) {
  let currentIndex = array.length,
    randomIndex;

  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex]
    ];
  }

  return array;
}

shuffle(nameList);

/* Set each name as key, and the following name as value */
let pairings = [];
nameList.forEach((name, id) => {
  if (id == nameList.length - 1) {
    pairings[name] = nameList[0];
  } else {
    pairings[name] = nameList[id + 1];
  }
});

console.log(pairings);
```

Add the names you want to the initial array, and Bob's your uncle. This'll spit out an associative array with the name as the key, and the person they should buy for as the value.

Of course, it would be fun to stick this into an ultra-simple React app and throw it out on Netlify or Vercel, but I have more pressing things today. So maybe you can. Since no one person should see the whole list either, you could even take email addresses and send out the person they should buy for. Or create a unique endpoint for sharing. Something like yourapp.com/unique_group_id/person_name could reveal who their match is.

Anyway, there it is, a simple way to choose a Secret Santa list. If you end up doing something fun with it or have any great suggestions, I'd love to hear about it. Happy Holidays e'erbody!

## Bonus: Example

Well... I ended up finding about 2 hours to kill and built a quick NextJS App for it after all.

[On Github](https://github.com/paulcushing/secretsanta)

[Demo - On Vercel](https://secretsanta-peach.vercel.app/)

I used a basic NextJS starter with Tailwind. Let me know what you think.
