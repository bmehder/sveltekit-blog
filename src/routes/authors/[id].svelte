<script context="module">
  export const load = async ({ page, fetch }) => {
    const id = page.params.id

    const [resUser, resPosts] = await Promise.all([
      fetch(`https://jsonplaceholder.typicode.com/users/${id}`),
      fetch('https://jsonplaceholder.typicode.com/posts'),
    ])

    const [user, allPosts] = await Promise.all([
      resUser.json(),
      resPosts.json(),
    ])

    const posts = allPosts.filter(post => {
      return post.userId === user.id
    })

    return {
      props: {
        user,
        posts,
      },
    }
  }
</script>

<script>
  export let user
  export let posts

  const { name, website, email } = user
</script>

<h1>{name}</h1>
<h3>Website: {website}</h3>
<p>
  Email: <a href="mailto:{email}" rel="external" target="_blank">{email}</a>
</p>

<h2>Posts by {name}</h2>
<ul>
  {#each posts as { id, title }}
    <li><a sveltekit:prefetch href="/blog/{id}">{title}</a></li>
  {/each}
</ul>

<style>
  li {
    margin-bottom: 0.5rem;
    text-transform: capitalize;
  }
</style>
