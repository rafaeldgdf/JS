function meuEscopo (){
const form = document.querySelecton('.form');

form.onsubmit = function (evento) {
    alert("1");
  };
};

meuEscopo();