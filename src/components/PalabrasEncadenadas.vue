<template>
  <div>
    <h2>Palabra actual: {{ currentWord }}</h2>
    <button v-on:click="callContract">Obtener palabra</button>
<h3>Introduce una palabra cuya primera letra sea la última de la palabra actual</h3>
<input v-model="newWord" placeholder="nueva palabra">
<button v-on:click="sendContract">Enviar nueva palabra</button>
  </div>
</template>

<script>

import ethConfig from '../../config/ethConfig.js'

export default {
  name: "PalabrasEncadenadas",
  data() {
    return {
      currentWord: "",
      newWord: ""
    };
  },
  methods: {
    callContract() {

      console.log(web3.eth.accounts);

      var contractFactory = new web3.eth.Contract(
        ethConfig.CONTRACT_ABI,
        ethConfig.CONTRACT_ADDRESS
      );

      contractFactory.methods["getPalabra"]()
        .call({ from: ethConfig.ACCOUNT_ADDRESS })
        .then(result => {
          this.currentWord = result;
        });
    },

    sendContract() {
      var contractFactory = new web3.eth.Contract(
        ethConfig.CONTRACT_ABI,
        ethConfig.CONTRACT_ADDRESS
      );

      contractFactory.methods["setNuevaPalabra"](
        this.newWord[0],
        this.newWord,
        this.newWord[this.newWord.length - 1]
      )
        .send({ from: ethConfig.ACCOUNT_ADDRESS })
        .then(result => {
          if (
            this.newWord[0] == this.currentWord[this.currentWord.length - 1]
          ) {
            this.currentWord = this.newWord;
          } else {
            alert(
              "La primera letra de la última palabra no coincide con la anterior"
            );
          }
        });
    }
  }
};
</script>

<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

button {
  background-color: #4caf50;
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
}
</style>
