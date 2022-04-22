const BREEDS_URL = 'https://dog.ceo/api/breeds/list/all'

const select = document.querySelector('.breeds')

fetch(BREEDS_URL)
    .then(res => {
        return res.json();
    })
    .then(data => {
        const breedsObject = data.message; //Turn the message into an object
        const breedsArray = Object.keys(breedsObject) //Turn the object into an array
        for(let i=0; i < breedsArray.length; i++) {
            const option = document.createElement('option') //<option></option>
            option.value = breedsArray[i] //<option value='breed'>
            option.innerText = breedsArray[i]
            select.appendChild(option) //adds current <option> tag to the select box list of options
        }

    })

    select.addEventListener('change', event => {
        let url = `https://dog.ceo/api/breed/${event.target}/images/random`
        console.log(url)
    })

    const img = document.querySelector('.dog-img')

    const getDoggoImg = url => {
        fetch(url)
            .then(res => {
                return res.json();
            })
            .then(data => {
                img.src = data.message //extract message from JSON and attach to img tag source
                console.log(data.message)
            })
    }
