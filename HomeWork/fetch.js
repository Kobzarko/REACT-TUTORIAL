/* eslint-disable linebreak-style */
/* eslint-disable babel/object-curly-spacing */
/* eslint-disable linebreak-style */

// let url = "https://jsonplaceholder.typicode.com/posts/",
//   data = { username: "example" };

// fetch(url, {
//   method: "POST",
//   body: JSON.stringify(data),
//   headers: {
//     "Content-Type": "application/json",
//   },
// })
//   .then((response) => response.json())
//   .then((myJson) => console.log("Success", myJson))
//   .catch((error) => console.error("Error", error));

//* ASYNC AWAIT

// fetch does not return error

const getResource = async (url) => {
  const res = await fetch(url);

  if (!res.ok) {
    throw new Error(`Could not fetch ${url}, status: ${res.status}`);
  }
  const some = await res.json();
  return some;
};

// to see error change request
getResource("https://jsonplaceholder.typicode.com/todos/1")
  .then((res) => console.log("Success", res))
  .catch((error) => console.log("Error", error));
