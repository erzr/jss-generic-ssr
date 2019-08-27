<script>
  import Placeholders from "./Placeholders.svelte";
  import Fields from "./Fields.svelte";
  export let rendering = {};
</script>

<section>
  <div>
    <h4>{rendering.componentName} ({rendering.componentName})</h4>
  </div>
  <div>
    <Fields fields={rendering.fields}/>
  </div>
  {#if rendering.placeholders}
    <div>
      <Placeholders routeData={rendering} />
    </div>
  {/if}
</section>
