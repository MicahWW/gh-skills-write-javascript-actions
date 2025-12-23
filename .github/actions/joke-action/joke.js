async function getJoke() {
    const res = await fetch("https://icanhazdadjoke.com/", {
        method: "GET",
        headers: {
            Accept: "application/json",
            "User-Agent": "Writing JavaScript action GitHub Skills course.",
        },
    });
    const data = await res.json();
    return data.joke;
}

export default getJoke;
