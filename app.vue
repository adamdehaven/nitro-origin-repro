<template>
  <div>
    <h1>Origin</h1>
    <p>The <b>origin</b> is: <code>{{ data.origin }}</code></p>
    <p>The <b>hostname</b> is: <code>{{ data.hostname }}</code></p>
    <ClientOnly>
      <p>The <b>clientHostname</b> is: <code>{{ clientHostname }}</code></p>
    </ClientOnly>
  </div>
</template>

<script setup lang="ts">
const { data } = useFetch('/api/origin')

const clientHostname = useState('client-hostname', () => '')
onMounted(() => {
  clientHostname.value = window.location.hostname
})
</script>

<style scoped>
code {
  font-family: monospace;
}
</style>
