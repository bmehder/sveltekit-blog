<script>
  import Nav from '$lib/Nav.svelte'
</script>

<div>
  <Nav />
  <slot />
</div>

<style>
  div {
    max-width: 800px;
    margin: 50px auto;
  }
</style>
