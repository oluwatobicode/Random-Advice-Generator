# Frontend Mentor - Advice generator app solution

This is a solution to the [Advice generator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/advice-generator-app-QdUG-13db). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Generate a new piece of advice by clicking the dice icon

### Screenshot

![](/screemshot.jpg)

### Links

- Solution URL: (https://github.com/Oluwatobiiiiii/Random-Advice-Generator)
- Live Site URL: (https://random-advice-generator-neon.vercel.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Desktop-first workflow

### What I learned

I got a better understanding of using the async/await method of calling API's.
I learnt how to make a glow effect using CSS.

```js
const proudOfThisFunc = () => {
  const data = async function () {
    const res = await fetch("https://api.adviceslip.com/advice");
    const data = await res.json();
    console.log(data);
    quoteNumber.innerHTML = `#${data.slip.id}`;
    quoteText.innerHTML = `"${data.slip.advice}"`;
  };
};
```

## Author

- Frontend Mentor - [@Oluwatobiiiiii](https://www.frontendmentor.io/profile/Oluwatobiiiiii)
- Twitter - [@oluwatobicodes](https://www.twitter.com/oluwatobicodes)
