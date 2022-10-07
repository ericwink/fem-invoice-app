# Frontend Mentor - Invoice app solution

This is a solution to the [Invoice app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/invoice-app-i7KaLTQjl). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Frontend Mentor - Invoice app solution](#frontend-mentor---invoice-app-solution)
  - [Table of contents](#table-of-contents)
  - [Overview](#overview)
    - [The challenge](#the-challenge)
    - [Video](#video)
    - [Links](#links)
  - [My process](#my-process)
    - [Built with](#built-with)
    - [What I learned](#what-i-learned)
    - [Continued development](#continued-development)
    - [Useful resources](#useful-resources)
  - [Author](#author)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Create, read, update, and delete invoices
- Receive form validations when trying to create/edit an invoice (I passed on this to allow saving of incomplete drafts)
- Save draft invoices, and mark pending invoices as paid
- Filter invoices by status (draft/pending/paid)
- Toggle light and dark mode
- **Bonus**: Keep track of any changes, even after refreshing the browser (`localStorage` could be used for this if you're not building out a full-stack app)

### Video

https://user-images.githubusercontent.com/105669475/194591755-d33df555-59c5-496d-b912-1f589f6e1bc6.mov

### Links

- Solution URL: [EricWink Github](https://github.com/ericwink/fem-invoice-app)
- Live Site URL: [Invoice App](https://fem-invoice-app.netlify.com/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- [Svelte](https://svelte.dev/)

### What I learned

I utilized this project to learn Svelte, which I had not used previously. It was a fun learning experience to use a new frontend framework. Having a good understanding of vanilla JS made swapping frameworks extremely easy and fun.

I also continued to practice my problem solving skills, breaking each process down into smaller components and solving each individual component. The process of building this app was all fairly smooth, and every problem I encountered was fairly easy to resolve with some thought, or time away from my computer.

I created classes for the Invoice, Addresses, and Items. It made creating new instances and sending data to the backend much easier and cleaner.

Adjusting for mobile browser viewports was also a lesson learned toward the end. When I deployed the app, and tested on my phone the scrollable div housing the Invoice Form cut off at the bottom. The height is required on a div to make it scrollable, so it was set to calc(100vh - 72px) to account for the navbar at the top. After deployment, testing on my phone, I saw the bottom of the form was cut off. Mobile browsers count the address bar as part of the viewport, so setting the height dynamically, and allowing resizing as the viewport changed, resolved the issue. A great learning experience.

```css
:root{
  --invoice-form-height: calc(100vh - 72px);
}

  #invoice-form {
    position: absolute;
    height: var(--invoice-form-height);
    padding: 1em 1em;
    width: 100vw;
    overflow-y: auto;
    left: 0;
    top: 0;
    z-index: 2;
  }
```
```js
  //get screen size and set the invoiceForm height variable. Prevent the form being cut off on mobile devices due to address bars.
  function setFormHeight() {
    const root = document.documentElement;
    root.style.setProperty("--invoice-form-height", `${window.innerHeight - 72}px`);
  }
  window.addEventListener("resize", setFormHeight);
  setFormHeight();
```
### Continued development

Error handling in the backend was much easier in this than previous fullstack projects. I plan to continue to focus on more robust error logic or middleware.

### Useful resources

- [Don't use 100vh on Mobile](https://dev.to/nirazanbasnet/dont-use-100vh-for-mobile-responsive-3o97) - Once I realized the bug on mobile views on my invoice form, this article helped me identify an elegant solution

## Author

- Website - [Eric Winkelspecht](https://www.ericwink.dev/)
- Frontend Mentor - [@ericwink](https://www.frontendmentor.io/profile/ericwink)
- Twitter - [@ericwinkdev](https://twitter.com/ericwinkdev)
