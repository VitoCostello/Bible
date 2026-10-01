


async function fetchBibleData() {
  const response = await fetch("https://rest.api.bible/v1/bibles", {
    method: "GET",
    headers: 
      {"api-key": "GtbZ-uRcS0EP8hYFyxZPd"}});
  const responseJson = await response.json();
  console.log(responseJson);
}

fetchBibleData();
