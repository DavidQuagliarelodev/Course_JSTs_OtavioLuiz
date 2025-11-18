async function user(e) {
  const url = "https://randomuser.me/api/";
  const get = await fetch(url);
  const response = await get.json();
  const r = await response.results;

  let user = await r.map((e) => {
    return {
      name: e.name,
      email: e.email,
      country: e.location.country,
    };
  });
}
