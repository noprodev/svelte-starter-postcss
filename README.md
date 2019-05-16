# svelte-starter-postcss

A starter for building Svelte web apps, with PostCSS supported.

## Getting Started

Install using [degit](https://github.com/Rich-Harris/degit):

```bash
npx degit github:noprodev/svelte-starter-postcss your-project-folder
cd your-project-folder
```

Then, install the dependencies:

```bash
npm install
```

## Use PostCSS in Your Svelte Project

- [postcss-preset-env](https://preset-env.cssdb.org/) and [PostCSS color-mod() Function](https://github.com/jonathantneal/postcss-color-mod-function) are enabled already.
- Add plugins as required.
- You can use PostCSS in your static stylesheets AND Svelte components!

```HTML
<style>
main {
    width: 35em;
    margin: 1.5em auto;
    /* Nesting */
    & > h1 {
        /* Color manipulation */
        color: color-mod(#0000ff shade(20%));
    }
}
</style>

<main>
   <h1>Hello World!</h1>
</main>
```

## Building and Developing

### Build

```bash
npm run build
```

### Development
(build on file change, serve on <code>localhost:5000</code>, live reload)

```bash
npm run dev
```
## Credits

Inspired by [sveltejs/template](https://github.com/sveltejs/template)