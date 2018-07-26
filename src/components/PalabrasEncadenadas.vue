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
      var contractFactory = new web3.eth.Contract(
        [
          {
            constant: false,
            inputs: [
              {
                name: "primeraLetra",
                type: "string"
              },
              {
                name: "nuevaPalabra",
                type: "string"
              },
              {
                name: "nuevaUltimaLetra",
                type: "string"
              }
            ],
            name: "setNuevaPalabra",
            outputs: [],
            payable: false,
            stateMutability: "nonpayable",
            type: "function"
          },
          {
            inputs: [],
            payable: false,
            stateMutability: "nonpayable",
            type: "constructor"
          },
          {
            constant: true,
            inputs: [],
            name: "getPalabra",
            outputs: [
              {
                name: "",
                type: "string"
              }
            ],
            payable: false,
            stateMutability: "view",
            type: "function"
          }
        ],
        "0x5cfe554c5ae9b887499f0531c8c745536864dda8"
      );

      contractFactory.methods["getPalabra"]()
        .call({ from: "0x29577899A8c5A8c4352737f3CC09c7627F6c3101" })
        .then(result => {
          this.currentWord = result;
        });
    },

    sendContract() {
      var contractFactory = new web3.eth.Contract(
        [
          {
            constant: false,
            inputs: [
              {
                name: "primeraLetra",
                type: "string"
              },
              {
                name: "nuevaPalabra",
                type: "string"
              },
              {
                name: "nuevaUltimaLetra",
                type: "string"
              }
            ],
            name: "setNuevaPalabra",
            outputs: [],
            payable: false,
            stateMutability: "nonpayable",
            type: "function"
          },
          {
            inputs: [],
            payable: false,
            stateMutability: "nonpayable",
            type: "constructor"
          },
          {
            constant: true,
            inputs: [],
            name: "getPalabra",
            outputs: [
              {
                name: "",
                type: "string"
              }
            ],
            payable: false,
            stateMutability: "view",
            type: "function"
          }
        ],
        "0x5cfe554c5ae9b887499f0531c8c745536864dda8"
      );

      contractFactory.methods["setNuevaPalabra"](
        this.newWord[0],
        this.newWord,
        this.newWord[this.newWord.length - 1]
      )
        .send({ from: "0x29577899A8c5A8c4352737f3CC09c7627F6c3101" })
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
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
