<template>
  <div>
    <h2>Server</h2>
    <p>The <b>origin</b> is: <code>{{ data.origin }}</code></p>
    <p>The <b>hostname</b> is: <code>{{ data.hostname }}</code></p>
    <h2>Client</h2>
    <ClientOnly>
      <p>The <b>clientOrigin</b> is: <code>{{ clientOrigin }}</code></p>
      <p>The <b>clientHostname</b> is: <code>{{ clientHostname }}</code></p>
      <p>These are the values I would expect to be returned in the <b>Server</b> section above.</p>
    </ClientOnly>
  </div>
</template>

<script setup lang="ts">
const { data } = useFetch('/api/origin')

const clientHostname = useState('client-hostname', () => '')
const clientOrigin = useState('client-origin', () => '')
onMounted(() => {
  clientOrigin.value = window.location.origin
  clientHostname.value = window.location.hostname
})
</script>

<style scoped>
code {
  font-family: monospace;
}
</style>
