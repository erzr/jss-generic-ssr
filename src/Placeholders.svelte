<script>
    import {Placeholder} from 'jss-svelte';

    export let routeData = {};
</script>

<style>
    section {
        padding: 20px;
        border-left: 5px solid #ccc;
        margin-bottom: 20px;
    }
</style>

<section>
    {#each Object.entries(routeData.placeholders) as placeholder}
        {#if placeholder[1].length}
            <h2>{placeholder[0]}</h2>
            <Placeholder name={placeholder[0]} rendering={routeData} />
        {/if}
    {/each}
</section>