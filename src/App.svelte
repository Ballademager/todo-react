<script>
  import List from "./components/List.svelte";
  import ThemePicker from "./components/ThemePicker.svelte";

  function loadItems() {
    const localList = localStorage.getItem("ITEMS");
    if (localList == null) return [];
    return JSON.parse(localList);
  }

  function loadTheme() {
    const localTheme = localStorage.getItem("THEME");
    if (localTheme == null) return "classic";
    return JSON.parse(localTheme);
  }

  let items = $state(loadItems());
  let theme = $state(loadTheme());

  $effect(() => {
    localStorage.setItem("ITEMS", JSON.stringify(items));
  });

  $effect(() => {
    localStorage.setItem("THEME", JSON.stringify(theme));
  });

  function changeTheme(newTheme) {
    theme = newTheme;
  }

  function addItem(newItem) {
    items = [...items, newItem];
  }

  function deleteItem(id) {
    items = items.filter((item) => item.id !== id);
  }

  function toggleCompleted(id) {
    items = items.map((item) =>
      item.id === id ? { ...item, completed: !item.completed } : item
    );
  }
</script>

<main data-theme={theme} class="md:p-4">
  <div class="grid sm:grid-cols-3">
    <h1 class="py-4 font-semibold text-3xl text-center sm:col-start-2">My ToDo Lists</h1>
    <ThemePicker {theme} {changeTheme} />
  </div>
  <div>
    <List {addItem} {toggleCompleted} {deleteItem} {items} />
  </div>
</main>

<style>
  main {
    min-height: 100vh;
    background: var(--body-bg-clr);
    color: black;
  }
</style>
