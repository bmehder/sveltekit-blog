export const get = async request => {
  const id = request.params.id

  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)

  return {
    status: 200,
    body: await res.json(),
  }
}
