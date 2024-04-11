
// 1- Obtener y mostrar usuarios utilizando la API de JSONPlaceholder

// En este ejercicio utilizaremos la API de https://jsonplaceholder.typicode.com/users

// Imprimir por consola la lista (array) de usuarios.
axios.get("https://jsonplaceholder.typicode.com/users")
.then((res) =>console.log(res.data))
.catch((err) =>console.error(err))


// Imprimir por consola solo el nombre de los usuarios.
axios.get("https://jsonplaceholder.typicode.com/users")
.then((res) =>{
    console.log(res.data)
    res.data.forEach((usuario) => {
        console.log(usuario.name);
    });
})
.catch((err) =>console.error(err))

// Crear una variable global llamada "users" y, al hacer la solicitud utilizando Axios, rellenarla con la respuesta de la API(el array). Este proceso debe realizarse fuera de cualquier función.
let users = [];
axios.get("https://jsonplaceholder.typicode.com/users")
.then((res) =>{
    users = res.data
    console.log(users)
})
.catch((err) =>console.error(err))

// Crear una función llamada "showUsers" que muestre por consola la variable global "users" que has creado.
function showUsers() {
    console.log(users);
}

// Crea un botón que cuando lo cliques ejecute la función que habías creado
let boton = document.getElementById("btn")
boton.addEventListener("click", showUsers)

// Ahora en vez de mostrar los usuarios por consola muestra el nombre de cada uno en el DOM (en el HTML).
const usersMostrar = document.getElementById("userlist")
usersMostrar.innerHTML = JSON.stringify(showUsers)
console.log(usersMostrar);
users.forEach(user => {
    const lista = document.createElement('li');
    lista.textContent = user.name;
    usersMostrar.appendChild(li);
  });
  boton.addEventListener("click", usersMostrar)


// const usersMostrar = document.getElementById("userlist");
// usersMostrar.innerHTML = ""; // Limpia el contenido previo

// users.forEach(user => {
//     const lista = document.createElement('li'); // Cambia 'lista' a 'li'
//     lista.textContent = user.name; // Usa 'user.name' en lugar de 'users.name'
//     usersMostrar.appendChild(lista);
// });

// // Agrega el evento al botón (asegúrate de que el botón tenga el id 'boton')
// boton.addEventListener("click", () => {
//     // Lógica para mostrar o manipular los usuarios
// });
