const baseEndpoint = 'https://api.github.com';
const usersEndpoint = `${baseEndpoint}/users`;
//se cambio la variable ya que se estan llamando por clase
const $n = document.querySelector('.name');
const $b = document.querySelector('.blog');
const $l = document.querySelector('.location');

//se agrego asyn ya que es necesario para una funcion asincrona
async function displayUser(username) {
  $n.textContent = 'cargando...';
  const response = await fetch(`${usersEndpoint}/${username}`);
  //se modifico el consol log
  console.log(response);
  // se cambio de commillas simples a `
  $n.textContent = `${response.name}`;
  $b.textContent = `${response.blog}`;
  $l.textContent = `${response.location}`;
}

function handleError(err) {
  console.log('OH NO!');
  console.log(err);
  //se modifico nombre de la variable n a $n
  $n.textContent = `Algo salió mal: ${err}`
}

displayUser('stolinski').catch(handleError);