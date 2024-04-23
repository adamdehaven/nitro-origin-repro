export default defineEventHandler(async (event) => {
  const origin = await useStorage<string>().getItem('origin')
  const hostname = await useStorage<string>().getItem('hostname')

  return {
    origin,
    hostname,
  }
})
