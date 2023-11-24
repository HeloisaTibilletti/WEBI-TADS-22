let listaAnimais = [
<<<<<<< HEAD
    {
        idAnimal: 1,
        nome: "Barão",
        descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin diamnisl, dapibus quis dictum quis, facilisis non risus.",
        img: "./img/img1.webp"
    },
    {
        idAnimal: 2,
        nome: "José",
        descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin diamnisl, dapibus quis dictum quis, facilisis non risus.",
        img: "./img/img2.jpg"
    },
    {
        idAnimal: 3,
        nome: "Lila",
        descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin diamnisl, dapibus quis dictum quis, facilisis non risus.",
        img: "./img/img3.webp"
    },
    {
        idAnimal: 4,
        nome: "Torão",
        descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin diamnisl, dapibus quis dictum quis, facilisis non risus.",
        img: "./img/img4.jpg"
    },
    {
        idAnimal: 5,
        nome: "Bill",
        descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin diamnisl, dapibus quis dictum quis, facilisis non risus.",
        img: "./img/img5.webp"
    },
];


const criarCards = () => {
    let container = document.querySelector(".container");

    listaAnimais.forEach((elemento) => {
        let card =
            `
        <div class="card">
        <img class="card-img" src="${elemento.img}" />
        <h2 class="card-titulo">${elemento.nome}</h2>
        <p class="card-descricao">${elemento.descricao}</p>
        <a class="card-botao" idAnimal=${elemento.idAnimal}> ADOTAR </a>
        </div>
        `;
        container.innerHTML += card;
    });
};

window.addEventListener("load", () => {
    criarCards();

    let cards = document.querySelectorAll(".card");
    cards.forEach((elemento) => {
        elemento.addEventListener("mouseover", () => {
            elemento.classList.add("change-scale");
        });

        elemento.addEventListener("mouseout", () => {
            elemento.classList.remove("change-scale");
        });

        elemento.lastElementChild.addEventListener("click", (event) => {
            event.preventDefault();

            alert(elemento.lastElementChild.getAttribute("idAnimal"));
            window.location.href = "./adotar.html";
        });
    });
});



//let container = document.querySelector(".container");
//container.classList.add("change-background");
=======
  {
    idAnimal: 1,
    nome: "Barão",
    descricao:
      "  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin diam     nisl, dapibus quis dictum quis, facilisis non risus. Aliquam tempor nisi id lacinia lobortis. Donec in justo mauris. Mauris luctustristique est, a faucibus elit. Vivamus et dapibus mi, id facilisisnunc. Etiam feugiat, sapien sed pharetra sagittis, risus sapien semper",
    img: "./img/img1.webp",
  },
  {
    idAnimal: 2,
    nome: "Barão",
    descricao:
      "  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin diam     nisl, dapibus quis dictum quis, facilisis non risus. Aliquam tempor nisi id lacinia lobortis. Donec in justo mauris. Mauris luctustristique est, a faucibus elit. Vivamus et dapibus mi, id facilisisnunc. Etiam feugiat, sapien sed pharetra sagittis, risus sapien semper",
    img: "./img/img2.jpg",
  },
  {
    idAnimal: 3,
    nome: "Barão",
    descricao:
      "  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin diam     nisl, dapibus quis dictum quis, facilisis non risus. Aliquam tempor nisi id lacinia lobortis. Donec in justo mauris. Mauris luctustristique est, a faucibus elit. Vivamus et dapibus mi, id facilisisnunc. Etiam feugiat, sapien sed pharetra sagittis, risus sapien semper",
    img: "./img/img3.webp",
  },
  {
    idAnimal: 4,
    nome: "Barão",
    descricao:
      "  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin diam     nisl, dapibus quis dictum quis, facilisis non risus. Aliquam tempor nisi id lacinia lobortis. Donec in justo mauris. Mauris luctustristique est, a faucibus elit. Vivamus et dapibus mi, id facilisisnunc. Etiam feugiat, sapien sed pharetra sagittis, risus sapien semper",
    img: "./img/img4.jpg",
  },
  {
    idAnimal: 5,
    nome: "Barão",
    descricao:
      "  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin diam     nisl, dapibus quis dictum quis, facilisis non risus. Aliquam tempor nisi id lacinia lobortis. Donec in justo mauris. Mauris luctustristique est, a faucibus elit. Vivamus et dapibus mi, id facilisisnunc. Etiam feugiat, sapien sed pharetra sagittis, risus sapien semper",
    img: "./img/img5.webp",
  },
];

const criarCards = () => {
  let container = document.querySelector(".container");

  listaAnimais.forEach((elemento) => {
    let card = `
        <div class="card">
            <img class="card-img" src="${elemento.img}" />
            <h2 class="card-titulo">${elemento.nome}</h2>
            <p class="card-descricao"> ${elemento.descricao}</p>
            <a class="card-botao" idAnimal="${elemento.idAnimal}"> ADOTAR </a>
        </div>
    `;
    container.innerHTML += card;
  });
};

criarCards();

let container = document.querySelector(".container");
container.classList.add("change-background");
>>>>>>> e560ddff65d3c3b503a26de997a964947e6c6d42
