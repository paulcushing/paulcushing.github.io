---
title: Third-Party Scripts in React
author: pcushing
date: 2020-11-04 11:33:00 -0700
categories: [React]
tags: [react hooks, integration]
pin: false
math: true
mermaid: true
image:
  path: /images/posts/2020-11-04/castle.jpg
  lqip: /images/posts/2020-11-04/castle_small.jpg
  alt: Injecting 3rd party scripts into your React components.
---

In React projects, there often comes a time when you'll want to integrate with a third-party service. Maybe it's an analytics or tracking service, or a data or graphics provider like Google Maps. Whatever it is, injecting the external script can be tricky at the component level. It's easy if you want to just put it in the header or footer for everything, but that can lead to poor performance and a poor user experience. Let's use those fancy React Hooks for something useful.

```javascript
import { useEffect } from 'react';

function ScriptInjector() {

    /* Let's imagine we need to append our key to the url for
    example, there's often some identification that needs to
    be supplied */
    const ourApiKey = '123456789`;
    const thirdParyUrl = 'https://theirscript.js';

    // We'll use useEffect to load once when component is mounted
    useEffect(() => {
        // Obviously, id has to match what's used in id below
        const existingScript = document.getElementById('third-party-script');

        // Ensure it's only loaded on the page once
        if (!existingScript) {
            const thirdPartyScript = document.createElement('script');
            thirdPartyScript.src = thirdParyUrl + '?key=' + ourApiKey;
            thirdPartyScript.id = 'third-party-script';
            document.body.appendChild(thirdPartyScript);

            /* In some instances, we need to initiate their script
            from our side once the external script has loaded, in
            that case, I create my own js file that calls their
            function, and load it on the page, after the external
            script has loaded */
            thirdPartyScript.onload = () => {
                const initFunction = document.createElement('script');
                initFunction.src = '/static/initFunction.js';
                initFunction.id = 'initFunction';
                document.body.appendChild(initFunction);
            };
        }
    });

    return null;
}

export default ScriptInjector;
```

Since I removed parts specific to my business use to make this more generic, I haven't tested this code as-is. I apologize if I missed something, but I hope this gets the idea across. Many of the variables are only used once and I left them in for readability, but you could drop them in favor of more concise code as well.

When you go to use this component on the page or within another component, you'll import this one, then place it in the render method as you would with any other component.

```javascript
import ScriptInjector from "components/ScriptInjector";

// Then inside render method

<ScriptInjector />;
```

Another thing that could be done is to pass the script URL in as a prop, however, many outside services format their URLs and API key requirements differently, so ensuring the format works for multiple services may get complicated.
