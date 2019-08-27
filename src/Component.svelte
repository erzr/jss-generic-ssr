<script>
    export let fields = [];
</script>

{#each fields as field}
    <h1>{field.name}</h1>
{/each}