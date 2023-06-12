// write your code here
//on page load display all images of ramen within ramen-menu div 
window.addEventListener("load", ramenRequest);
const imgDiv = document.querySelector('#ramen-menu');

function ramenRequest(){
    fetch('http://localhost:3000/ramens')
    .then(response => response.json())
    .then((data) => {
        const ramen = data
        ramenImages(ramen)
    })
}

function ramenImages(ramen){
    
    for (let ramenObject of ramen){
        let images = document.createElement('img')
        images.src = ramenObject.image;
        imgDiv.appendChild(images)
        images.addEventListener('click', imageInfo) 
    };
  
}

function imageInfo(event){
    console.log(event)
}