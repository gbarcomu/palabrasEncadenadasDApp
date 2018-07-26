<template>
  <div id="app">
    <img src="./assets/ust.jpeg">
    <h1> Juego de palabras encadenadas mediante una DApp </h1>
    <PalabrasEncadenadas/>
  </div>
</template>

<script>
import PalabrasEncadenadas from './components/PalabrasEncadenadas'

export default {
  name: 'App',
  components: {
    PalabrasEncadenadas
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
