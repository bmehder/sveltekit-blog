<script>
  import { page } from '$app/stores'

  $: path = $page.path
  $: id = $page.params.id

  $: isBlogPage = path === '/' || path === `/blog/${id}`
  $: isAuthorsPage = path === '/authors' || path === `/authors/${id}`
</script>

<nav>
  <h1><a sveltekit:prefetch href="/">Home</a></h1>
  <ul>
    <li>
      <a class:active={isBlogPage} sveltekit:prefetch href="/">Blog</a>
    </li>
    <li>
      <a class:active={isAuthorsPage} sveltekit:prefetch href="/authors"
        >Authors</a
      >
    </li>
  </ul>
</nav>

<style>
  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 2rem;
    padding: 2rem;
    background-color: #333;
    color: white;
  }
  ul {
    display: flex;
    justify-content: flex-end;
    list-style: none;
    margin: 0;
    padding: 0;
  }
  li {
    margin-left: 2rem;
  }
  a {
    color: white;
    text-decoration: none;
  }
  a:hover {
    text-decoration: underline;
  }
  .active {
    font-weight: bold;
    text-decoration: underline;
  }
</style>
