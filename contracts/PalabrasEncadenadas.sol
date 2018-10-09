pragma solidity ^0.4.19;
    
contract PalabrasEncadenadas {

    string palabra;
    string ultimaLetra;

    function PalabrasEncadenadas() public {
        palabra = "genesis";
        ultimaLetra = "s";
    }
    
    function getPalabra() public view returns (string) {
        return palabra;
    }
    
    function setNuevaPalabra(string primeraLetra, string nuevaPalabra, string nuevaUltimaLetra) public {
        if (keccak256(primeraLetra) == keccak256(ultimaLetra)) {
            palabra = nuevaPalabra;
            ultimaLetra = nuevaUltimaLetra;
        }
    }
}
