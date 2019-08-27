<script>
  import componentFactory from "./componentFactory.js";
  import Placeholders from './Placeholders.svelte';
  import { setSitecoreContext, SitecoreContext } from "jss-svelte";
  
  export let routeData = null;

  const sitecoreContext = new SitecoreContext();
  sitecoreContext.setComponentFactory(componentFactory);
  setSitecoreContext(sitecoreContext);
</script>

<Placeholders routeData={routeData.sitecore.route} />