async function getData()
    {
        let url = "https://api.quotable.io/quotes/random";
        let jsondata = await fetch(url);
        let data = await jsondata.json();
        console.log(data);
        return data[0];
    }
async function show()
    {
        let data = await getData();
        console.log(data)

        for(let i in data)
        {
            let text = document.getElementsByClassName("card-text")[0];
            text.innerText = data["content"];
            let title = document.getElementsByClassName("card-title")[0];
            title.innerText = data["author"];
            let header = document.getElementsByClassName("card-header")[0];
            header.innerText = data["tags"];
        }

    }
let button = document.getElementById("next");
    button.addEventListener('click',()=>{
            show();
    });
