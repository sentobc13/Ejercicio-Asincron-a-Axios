// 1- Obtener y mostrar usuarios utilizando la API de JSONPlaceholder

// En este ejercicio utilizaremos la API de https://jsonplaceholder.typicode.com/users

// Imprimir por consola la lista (array) de usuarios.
axios
  .get("https://jsonplaceholder.typicode.com/users")
  .then((res) => console.log(res.data))
  .catch((err) => console.error(err));

// Imprimir por consola solo el nombre de los usuarios.
axios
  .get("https://jsonplaceholder.typicode.com/users")
  .then((res) => {
    console.log(res.data);
    res.data.forEach((usuario) => {
      console.log(usuario.name);
    });
  })
  .catch((err) => console.error(err));

// Crear una variable global llamada "users" y, al hacer la solicitud utilizando Axios, rellenarla con la respuesta de la API(el array). Este proceso debe realizarse fuera de cualquier función.
const users = [];
axios
  .get("https://jsonplaceholder.typicode.com/users")
  .then((res) => {
    users.push(res.data);
    console.log(users);
  })
  .catch((err) => console.error(err));

// Crear una función llamada "showUsers" que muestre por consola la variable global "users" que has creado.
function showUsers() {
  console.log(users);
}

// // Crea un botón que cuando lo cliques ejecute la función que habías creado
// let boton = document.getElementById("btn")
// boton.addEventListener("click", showUsers)

// Ahora en vez de mostrar los usuarios por consola muestra el nombre de cada uno en el DOM (en el HTML).
// const usersMostrar = document.getElementById("userlist")
// console.log(users);
// // usersMostrar.innerHTML =
// console.log(usersMostrar);

//-------------------Comenzamos con la funcion para pintar
const usersMostrar = document.getElementById("userlist");
let boton = document.getElementById("btn");

function consiguiendoUsuarios() {
    axios
    .get("https://jsonplaceholder.typicode.com/users")
    .then((res) => {
        let users = res.data;
        pintarUsuarios(users);
    })
    .catch((err) => console.error(err));
}

function pintarUsuarios(users) {
    users.forEach((usuario) => {
        usersMostrar.innerHTML += `
        <div class="card card-body mb-4">
        <h5>Nombre Usuario: ${usuario.name}</h5>
        </div>
        `;
    });
}
// console.log(users);
// console.log(usersMostrar);

boton.addEventListener("click", consiguiendoUsuarios);