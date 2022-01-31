# Roadmap

## Documentation

- framework:
  - vite + vite-plugin-ssr + codehike
  - wmr + codehike
    - https://github.com/preactjs/wmr/tree/main/docs
- deployment:
  - cloudflare pages
  - github pages
  - netlify
- why twind?
  - no build step
  - one line installation
  - grouping - but still atomic utilities
  - shortcuts
  - css
  - style
  - platform agnostic: browser, node, …
  - framework agnostic
  - comments
  - hashed class names
- playground
- examples: template with all lang and css features
- explain and examples of both modes (observe/shim vs library) with example
- how to create a component library: shortcuts vs apply vs style
- migration from v0.16 guide
- common patterns
- debugging the generated CSS in the browser (cssom sheet)
- link to [transform css to tailwind](https://transform.tools/css-to-tailwind)

## v1

- @twind/preset-\* from tailwind core
- @twind/styled (previously @twind/react)
  - Global: https://emotion.sh/docs/globals
  - createGlobalStyles: https://goober.js.org/api/createGlobalStyles
  - createGlobalStyle: https://styled-components.com/docs/api#createglobalstyle
  - @twind/styled/css - like styled-components eg using css
- frameworks: next, remix, wmr, vue, stenciljs, angular, ...
- development condition — let distilt create development bundles
  - warnings: console.warn(`[twind] unknown rule "${value}"`)
  - completion infos
  - additional checks
  - performance marks for devtools
- perf: large website with many different rules
- pug support: https://github.com/tw-in-js/twind/issues/198
- how to create a PR in contributing guide: https://codesandbox.io/docs/git
- support `is(:hover,:focus-visible):underline`?
  - maybe as `is-hover,focus-visible:underline`
- @twind/tailwind: parse style elements like tailwind? `<style type="text/tailwindcss">`

  https://github.com/tw-in-js/twind/issues/238#issuecomment-1021544996

  ```js
  // using a mutation observer?
  document.querySelectorAll('style[type~="twind/css"]').forEach((e) => {
    tw(css(e.textContent))
  })
  ```

- zero runtime
- cdn.twind.dev -> https://cdn.jsdelivr.net/npm/@twind/cdn@next
- rewrite https://github.com/TanStack/tanstack.com
- ci: post on discord after release
- auto support dark mode in theme helpers (`<section>.dark.<key>` or `dark.<section>.<key>`)
- @twind/completions — provide autocompletion for classNames
- a package to make it easy to create lightweight versions of presets (like https://lodash.com/custom-builds)
- postcss plugin like tailwindcss for SSR

  ```css
  @twind;
  ```

## v2

- fully typed theme