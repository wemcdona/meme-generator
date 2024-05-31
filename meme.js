const form = document.querySelector('form');
const memeContainer = document.querySelector('#meme-container');
const removeButton = document.querySelector('#remove-memes');

form.addEventListener('submit', function (e){
    e.preventDefault();
    if (form.checkValidity()){
        createMeme();
        form.reset();
    } else {
        alert('Please fill in all fields.');
    }
});

removeButton.addEventListener('click', function(){
    while(memeContainer.firstChild){
        memeContainer.removeChild(memeContainer.firstChild);
    }
});

function createMeme() {
    const topText = document.querySelector('#top-text').value;
    const bottomText = document.querySelector('#bottom-text').value;
    const imageUrl = document.querySelector('#image').value;

const meme = document.createElement('div');
meme.classList.add('meme');

const image = document.createElement('img');
image.src = imageUrl;
meme.appendChild(image);

const top = document.createElement('p');
top.classList.add('top');
top.innerText = topText;
meme.appendChild(top);

const bottom = document.createElement('p');
bottom.classList.add('bottom');
bottom.innerText = bottomText;
meme.appendChild(bottom);

memeContainer.appendChild(meme);
}