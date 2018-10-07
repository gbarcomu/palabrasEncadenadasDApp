<template>
  <div id="app">
    <img src="./assets/kschool.png">
    <h1> Juego de palabras encadenadas</h1>
    <PalabrasEncadenadas/>
    <hr>
    <h1> Juego de adivinar el numero </h1>
    <AdivinarElNumero/>
  </div>
</template>

<script>
import PalabrasEncadenadas from './components/PalabrasEncadenadas'
import AdivinarElNumero from './components/AdivinarElNumero'

export default {
  name: 'App',
  components: {
    PalabrasEncadenadas,
    AdivinarElNumero
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
