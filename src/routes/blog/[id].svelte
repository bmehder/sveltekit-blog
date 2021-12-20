<script context="module">
  export const load = async ({ page, fetch }) => {
    const id = page.params.id
    const res = await fetch(`/api/blog/${id}.json`)
    const post = await res.json()

    // const postRes = await fetch(
    //   `https://jsonplaceholder.typicode.com/posts/${id}`
    // )
    // const post = await postRes.json()

    const userRes = await fetch(
      `https://jsonplaceholder.typicode.com/users/${post.userId}`
    )
    const user = await userRes.json()

    return {
      props: {
        post,
        user,
      },
    }
  }
</script>

<script>
  export let post
  export let user

  const { title, body } = post
  const { id, name } = user
</script>

<h1>{title}</h1>
<p>{body}</p>

<p>
  -Written by <a sveltekit:prefetch href={`/authors/${id}`}>{name}</a>
</p>

<style>
  h1 {
    text-transform: capitalize;
  }
</style>
