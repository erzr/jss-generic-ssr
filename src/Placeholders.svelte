<script>
    import {Placeholder} from 'jss-svelte';

    export let routeData = {};
</script>

{#each Object.entries(routeData.placeholders) as placeholder}
    {#if placeholder[1].length}
        <Placeholder name={placeholder[0]} rendering={routeData} />
    {/if}
{/each}