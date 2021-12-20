export const get = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users')

  return {
    status: 200,
    body: await res.json(),
  }
}
