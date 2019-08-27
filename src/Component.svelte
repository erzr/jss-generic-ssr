<script>
  import Placeholders from "./Placeholders.svelte";
  import Fields from "./Fields.svelte";
  export let rendering = {};
</script>

<section>
  <div>
    <p>
      <strong>Component Name: </strong>
      {rendering.componentName}
      <br />
      <strong>Data Source: </strong>
      {rendering.componentName}
      <br />
    </p>
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
