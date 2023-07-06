//FORMULAR PAGINA HTML
/*var nume = [];
  function sorteazaNume() {
   var numeSortate = nume.sort(); //Sortarea numelor in ordine alfabetica
   var output = "Lista conține " + (numeSortate.length) + " nume<br><br>";//Se afiseaza numarul de nume adaugate
   output += numeSortate.join("<br>");// Concateneaza numele sortate,
   document.getElementById('output').innerHTML = output;
  }

  function adaugaNume() {
   var input = document.getElementById('input');
   var numeAdaugat = input.value;// Valoarea introdusa de utilizator

   if (numeAdaugat !== '') {// Verifica daca utilizatorul a introdus un nume valid 
    nume.push(numeAdaugat);
    input.value = '';

    // Sortam lista imediat dupa adaugarea numelui
    nume.sort();

    // Actualizam afisarea listei sortate
    sorteazaNume();
   }
}*/

//CONSOLA
const fs = require('node:fs'); //ofera posibilitatea de lucru cu fisiere text
const readline = require('node:readline');// face posibila citirea datelor de la utilizator prin intermediul interfeței de linie de comandă.

function sortareNume(nume) {
  const numeSortate = nume.sort(); 
  const output = `Lista conține ${numeSortate.length} nume\n\n${numeSortate.join('\n')}`;

  fs.writeFile('output.txt', output, (err) => {
    if (err) {
      console.error('Eroare scriere text in fisier', err);
    } else {
      console.log('Lista sortata a fost scrisa cu succes in: "output.txt".');
    }
  });
}

const nume = [];
const rl = readline.createInterface({
  input: process.stdin,//citirea de la tastatura
  output: process.stdout//afisarea in consola
});

function citesteNume() {
  rl.question('Introduceți un nume sau "stop" pentru a încheia introducerea: ', (numeIntrodus) => {
    if (numeIntrodus.toLowerCase() === 'stop') { //daca a fost introdusa comanda "stop"
      rl.close();//inchide interfata de citire
      sortareNume(nume);
    } else {
      nume.push(numeIntrodus);//se adauga numele introdus
      citesteNume();
    }
  });
}
citesteNume();