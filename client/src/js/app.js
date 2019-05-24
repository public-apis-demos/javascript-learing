export const name = "srinvias";

export const hello = "hello world !!!!";

function MakeRequest(method, url) {
  console.log(method, url);

  return new Promise((resolve, reject) => {
    let request = new XMLHttpRequest();

    request.open(method, url);
    request.onload = resolve;
    request.onerror = reject;
    request.send();
  });
}

MakeRequest("GET", "http://dummy.restapiexample.com/api/v1/emoyees")
  .then(event => {
    console.log(event.target.response);
  })
  .catch(err => {
    throw new Error(err);
  });
