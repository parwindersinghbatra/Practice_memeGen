const memeImg = document.querySelector('img');
const title = document.querySelector('h2')
const auth = document.querySelector('.meme-author')

const memefunction = async() =>{
    const result = await fetch('https://meme-api.com/gimme/wholesomememes')
    const data  = await result.json()
    memeImg.src = data.preview[2]
    title.innerHTML = data.title
    auth.innerHTML = data.author
}

document.getElementById('btn').addEventListener('click',memefunction)
memefunction()