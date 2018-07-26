<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
<button v-on:click="callContract">Call</button>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
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
      .call({from: "0x29577899A8c5A8c4352737f3CC09c7627F6c3101"})
      .then(console.log)
    }
  }
  // mounted() {
  //   this.loadContract();
  // }
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
