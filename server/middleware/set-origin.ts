export default defineEventHandler(async (event) => {
  // Get the request origin
  const { origin, hostname } = getRequestURL(event)

  console.log('set origin', origin)
  console.log('set hostname', hostname)

  await useStorage().setItem('origin', origin)
  await useStorage().setItem('hostname', hostname)
})
