# Generic SSR for Sitecore JSS

A minimal proof of concept Server Side Rendering (SSR) library for Sitecore JSS applications. The purpose of this library is to provide a generic interface for editing routes in Experience Editor. This library leverages [jss-svelte](https://github.com/erzr/jss-svelte) for the `Placeholder`, `SitecoreContext` and to generate the final bundle. When compiled, there will be no external dependencies.

Exports a single `renderView` function that will do the following:
* **Render each placeholder that is available on the page** - This will allow content authors to adjust component placement and add/remove/delete components for each individual placeholder.
* **Renders a generic representation of each component** - Since we really don't know anything about the JSS application that we're rendering, we render a single `Component` view for all components added to the page. Some basic meta data is displayed such as the `componentName` and `dataSource` for the component. Each `dataSource` component field will be displayed using it's `editable` value, allowing for fields to be edited directly on the page.

## Use cases

* **Framework Integration** - SSR is a big part of integrating a client framework with Sitecore JSS. While this won't be practical for integrated mode, if you intend your integration to be headless and you just need some basic Experience Editor functionality, then this might be an easy way to get started without having to work through implementing SSR.
* **React Native** - Or just native development in general. Shout out to [Corey Smith](https://twitter.com/sitecorey) for bringing this potential use case to my attention. This library could provide a basic editing interface for integrations are not editable in Experience Editor.

## Interested in using this?
I'd love to talk to you about your use case. Get in touch with me at [adamlamarre.com](https://www.adamlamarre.com/) or on [Twitter](https://twitter.com/erzr).