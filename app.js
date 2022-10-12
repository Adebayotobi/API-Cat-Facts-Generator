let btn = document.querySelector("#new-quote")
let quote= document.querySelector(".quote")
let person= document.querySelector(".person")
let main = document.querySelector(".main-container")
let span = document.querySelector(".spanMe")


    // const quotes= `<p> this is our cat ${result.fact}</p>`
    // main.insertAdjacentHTML("beforeend", quotes)

        let time = 150

        const message =  async () => {

        const data = await fetch ('https://catfact.ninja/fact')
        const result = await data.json();
        span.innerText = result.fact;

        clearInterval(timer)
        time = result.length * 50
         console.log(time);
        timer = setInterval(message, time);
    }

    var timer = setInterval(message, time);
    


//     btn.addEventListener("click", async () => {
//         const data = await fetch ('https://catfact.ninja/fact')
//         console.log(data);
//         const result = await data.json();
//         console.log(result);
//         span.innerText = result.fact;
//     }
// )

// const fetchApi = async () => {
//     const data = await fetch ('https://catfact.ninja/fact')
//     console.log(data);
//     const result = await data.json();
//     console.log(result);
// }

// fetchApi()





// fetch('http://example.com/movies.json')
//   .then((response) => response.json())
//   .then((data) => console.log(data));


