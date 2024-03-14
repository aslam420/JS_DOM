/* Revision DOM Basics :
Task-1 : Open browser, go to console, write - console.dir(document)
         -> Tell me the output.
         
-> This 'document' is nothing but object and this object contains some "key:value"
   pair.
-> We have to explore what does value pair does contain?
1) activeElement
2) all -> Which is nothing but full HTML Page
...
...
...
-> "key:value" pair contains all the information about web page.

Task-2 : get all the Images from a webpage*/ 

// Now inside the image we want the source. So, if we do the dir we can see the
// property of the images.

// for(let i in document.images) {
//     console.log(document.images[i].currentSrc);
// }

// Now how to download the images :
for(let i in document.images) {
    downloadImage(document.images[i].currentSrc);
}

async function downloadImage(imageSrc) {
    const image = await fetch(imageSrc)
    const imageBlog = await image.blob()
    const imageURL = URL.createObjectURL(imageBlog)

    const link = document.createElement('a')
    link.href = imageURL
    link.download = 'image file name here'
    document.body.appendChild(link)
    link.click()
    document.bosy.removeChild(link)
}

// 136 images downloaded