<template>
  <div class="hello">
    <h1>{{ currentWord }}</h1>
    <h2>Essential Links</h2>
<button v-on:click="callContract">Call</button>
<input v-model="newWord" placeholder="nueva palabra">
<button v-on:click="sendContract">Send</button>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
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
              }
            ],
            name: "setNuevaPalabra",
            outputs: [
              {
                name: "",
                type: "bool"
              }
            ],
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
        "0xb702142943e6065630cd7015e544f7acd37b397b"
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
              }
            ],
            name: "setNuevaPalabra",
            outputs: [
              {
                name: "",
                type: "bool"
              }
            ],
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
        "0xb702142943e6065630cd7015e544f7acd37b397b"
      );

      contractFactory.methods["setNuevaPalabra"](this.newWord[0], this.newWord)
        .send({ from: "0x29577899A8c5A8c4352737f3CC09c7627F6c3101" })
        .then(result => {
          if (this.newWord[0] == this.currentWord[this.currentWord.length - 1]) {
            this.currentWord = this.newWord;
          }
          else {
            alert("La primera letra de la última palabra no coincide con la anterior");
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
</style>
