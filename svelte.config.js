import { vitePreprocess } from '@sveltejs/vite-plugin-svelte'

export default {
  // Enables <style lang="postcss"> and other preprocessing via Vite's pipeline.
  preprocess: vitePreprocess(),
}
