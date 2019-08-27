<script>
  export let fields = {};

  const fieldEntries = Object.entries(fields);

  const getFieldType = fieldMarkup => {
      const result = fieldMarkup.match(/scfieldtype="(.*?)"/i);
      console.log(fieldMarkup);
    return (result && result[1]) || "n/a";
  };
</script>

{#if fieldEntries.length}
  <!-- Long live tables -->
  <table class="table">
    <thead>
      <tr>
        <th colspan="3">Fields</th>
      </tr>
    </thead>
    {#each fieldEntries as field}
      {#if field[1].editable}
        <tr>
          <td>{field[0]}</td>
          <td>{getFieldType(field[1].editable)}</td>
          <td>
            {@html field[1].editable}
          </td>
        </tr>
      {/if}
    {/each}
  </table>
{/if}
