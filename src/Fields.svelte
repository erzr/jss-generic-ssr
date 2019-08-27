<script>
  export let fields = {};
</script>

<strong>Fields</strong>
<hr />
<!-- Long live tables -->
<table>
{#each Object.entries(fields) as field}
  {#if field[1].editable}
    <tr>
        <td>
            {field[0]}
        </td>
        <td>
            {@html field[1].editable}
        </td>
    </tr>
  {/if}
{/each}
</table>
<hr />
