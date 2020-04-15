/**
 * author: Eduardo Talavera
 */

let matrixConstruct = {

    getRightDiagonal : (m) => {

     let i, x, y, d, o = [];
     
      // Obtenemos todas las diagonales de la parte superior
      for (i = 0; i < m.length; i++) {
          d = [];
          for(y = i, x = 0; y >= 0; y--, x++){
            d.push(m[y][x]);
          }
          o.push(d);
      }
     

      // Obtenemos todas las diagonales la parte inferior
      for (i = 1; i < m[0].length; i++) {
            d = [];
            for(y = m.length - 1, x = i; x < m[0].length; y--, x++){
              d.push(m[y][x]);
            }
            o.push(d);
      }
      return o.map((array) => {
        return array.join('');
      });
     
    },
    getLeftDiagonal : (m) => {
      // hacemos una copia de la matriz inversa
      let reverse = matrixConstruct.reverseMatrix(m);
      return matrixConstruct.getRightDiagonal(reverse);
    },
    // metodo para obtener todas las verticales
    getVertical: (m) => {
      let i, x, y, v, o = [];

      for (i = 0; i < m[0].length; i++) {
          v = [];
          for(y = 0, x = i; y < m.length ; y++ ){
            v.push(m[y][x]);
          } 
          o.push(v);
      }
      return o.map((array) => {
        return array.join('');
      });
    },
    // metodo que revierte la matriz
    reverseString : (string) => {
      return string.split("").reverse().join("");
    },
    // metodo que mapea la matriz y revierte cada string del array
    reverseMatrix : (m) => {
      return m.map((string) => {
        return matrixConstruct.reverseString(string);
      });
    },
  };
  
  class mutantCheck {
    constructor (constructionM) {
      this.constructionM = constructionM;
  
      // Devuelve los bloques donde se repiten las letras
      this.findMutantBlocks = function (matrix) {
      
        let expR = /([ATGC])\1{3,4}/;
  
        // busca horizontalmente
        let horizontal = matrix.filter((string) => {
            return expR.test(string);
        });

        // Busca verticalmente
        let vertical = this.constructionM.getVertical(matrix).filter((string) => {
          return expR.test(string);
        }); 
  
        // busca diagonalmente hacia la derecha
        let rightDiagonal = this.constructionM.getRightDiagonal(matrix).filter((string) => {
          return expR.test(string);
        });
  
        // busca diagonalmente hacia la izquierda
        let leftDiagonal = this.constructionM.getLeftDiagonal(matrix).filter((string) => {
          return expR.test(string);
        });

        // retornamos todos los test
        return horizontal.concat(vertical).concat(rightDiagonal).concat(leftDiagonal);

      };
  
      this.hasMutation = function (matrix) {
        let blocks = this.findMutantBlocks(matrix);

        // si hay mas de una repeticion retorna true
        return blocks.length > 1;
      };
  
      this.showMutantBlocks = function (matrix) {
        let blocks = this.findMutantBlocks(matrix);
        if(blocks.length > 1)
          return blocks;
        else
          return [];
      };
    }
  }
  
  
  // Test
  const dna1 = [
    "ATGCGA",
    "CAGTGC",
    "TTATGT",
    "AGAAGG",
    "CCCCTA",
    "TCACTG"
  ];
  
  const dna2 = [
    "AAAAGA",
    "CAGTGC",
    "TTATGT",
    "AGAAGG",
    "CCCCAA",
    "TCACTG"
  ];
  
  const dna3 = [
    "ATGCGA",
    "ATCGTA",
    "AGCGTA",
    "ATGCGA",
    "CCACAA",
    "CACACA"
  ];

  const dna4 = [
    "ATGCGA",
    "AAGTAG",
    "ATAGTA",
    "ATGAGA",
    "CCACAA",
    "CACACA"
  ];


  

  matrixCheck = new mutantCheck(matrixConstruct);

  console.log(matrixCheck.showMutantBlocks(dna1));
  console.log(matrixCheck.hasMutation(dna1));

  console.log(matrixCheck.showMutantBlocks(dna2));
  console.log(matrixCheck.hasMutation(dna2));

  console.log(matrixCheck.showMutantBlocks(dna3));
  console.log(matrixCheck.hasMutation(dna3));

  console.log(matrixCheck.showMutantBlocks(dna4));
  console.log(matrixCheck.hasMutation(dna4));
  