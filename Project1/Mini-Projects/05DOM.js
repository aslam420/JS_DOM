/* document is an object which contains all information about webpage and
   provide the functionality to -
   (a) Read
   (b) Create
   (c) Delete
   (d) Update 
 - Basically it helps us to do CRUD Operations with Elements. */ 

// How to read the elements?
// We have seen that we can use 
// (a)'getElementById'
// (b) 'getElemenByClassName' : Single class can be applied to multiple elements (id).
// Multiple Images website : unsplash.com 

imageElement = document.getElementsByClassName("YVj9w");
for(let i = 0; i < 10; i++) {
    downloadImage(imageElement[i].currentSrc);
}

async function downloadImage(imageSrc) {
    const image = await fetch(imageSrc)
    const imageBlog = await image.blob()
    const imageURL = URL.createObjectURL(imageBlog)

    const link = document.createElement('a')
    link.href = imageURL
    link.download = 'unsplashImages'
    document.body.appendChild(link)
    link.click()
    document.bosy.removeChild(link)
}

// getElementByClassName -> array of Elements
