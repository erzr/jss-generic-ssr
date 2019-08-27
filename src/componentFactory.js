import Component from './Component.svelte';

export default function componentFactory(componentName) {
  return componentName ? Component : null;
};
