console.log('%c HI', 'color: firebrick')
const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = 'https://dog.ceo/api/breeds/list/all'
// const dogContainer = document.getElementById('dog-image-container')

document.addEventListener("DOMContentLoaded", () => {
    fetch(imgUrl)
    .then(res => res.json())
    .then(data => renderImages(data))
    
    const dogContainer = document.getElementById('dog-image-container')
    // const dogImages = document.createElement('img')
function renderImages(image) {
    image.message.forEach((img) => {
       const dogImage = document.createElement('img');
       dogImage.src = img
       dogContainer.append(dogImage)
        
    })
}
fetch(breedUrl)
.then(res => res.json())
.then(data => renderBreed(data))

const breedContainer = document.getElementById('dog-breeds')

function renderBreed(breeds) {
    for(const breed in breeds.message){
        const breedList = document.createElement('li');
        breedList.textContent = breed
        breedContainer.append(breedList)
        breedList.addEventListener('click', () => {
            breedList.style.color = "blue"
        }
        )
    }
}

})


