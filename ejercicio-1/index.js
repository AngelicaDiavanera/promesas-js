const nombre = async (nombre) => nombre;
const apellido = async (apellido) => apellido;
const age = async (age) => age;

const nombrePromise = nombre('Andres');
nombrePromise.then((result) => {
  const apellidoPromise = apellido(result + ' ' + 'Torres');
  apellidoPromise.then((result) => {
    const agePromise = age(result + ' ' + 24);
    agePromise.then((result) => {
      console.log(result);
    });
  });
});

(async () => {
  let result = await nombre('Andres');
  result = await apellido(result, 'Torres');
  result = await age(result, 24);
  console.log(result);
})();
