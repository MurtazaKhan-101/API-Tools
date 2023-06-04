const jokes = document.querySelector("#joke");
const jokeBtn = document.querySelector("#jokeBtn");

// const generateJokes = () => {
//     const setHeaders = {
//         headers: {
//             Accept: "application/json"
//         }
//     }
//     fetch('https://icanhazdadjoke.com', setHeaders)
//         .then((res) => res.json())
//         .then((data) => {
//             jokes.innerHTML = data.joke;
//         })
//         .catch((error) => { console.log(error); })
// }

const generateJokes = async () => {
    try {
        const setHeaders = {
            headers: {
                Accept: "application/json"
            }
        }
        const res = await fetch('https://icanhazdadjoke.com', setHeaders);
        const data = await res.json();
        jokes.innerHTML = data.joke;

    }
    catch (err) {
        console.log(`the error is ${err}`);
    }
}

jokeBtn.addEventListener('click', generateJokes);
generateJokes();