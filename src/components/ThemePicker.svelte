<script>
  let { theme, changeTheme } = $props();

  function handleThemeChange(event) {
    changeTheme(event.target.value);
  }
</script>

<div class="self-end lg:justify-self-start justify-self-center mb-3">
  <select name="color" class="select" value={theme} onchange={handleThemeChange}>
    <option value="classic">Classic</option>
    <option value="blue">Blue</option>
    <option value="dust">Dust</option>
    <option value="pink">Pink</option>
  </select>
</div>

<style>
  .select {
    background: var(--paper-clr);
    font-weight: 700;
    padding: 3px 6px;
    border-radius: 2px;
    box-shadow: 2px 2px 3px gray;
  }

  select option[value="classic"] {
    background-color: var(--paper-yellow);
  }
  select option[value="blue"] {
    background-color: var(--paper-blue);
  }
  select option[value="dust"] {
    background-color: var(--paper-white);
  }
  select option[value="pink"] {
    background-color: var(--paper-pink);
  }
</style>
