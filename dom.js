function changeText() {
    document.querySelector("#tag2").textContent = "We are coders!";

    document.querySelector("#tag1").textContent = "Developers for life!";
    
}

function addImage() {
    let button = document.createElement('Button');      
    let text = document.createTextNode("delete image");    
    button.appendChild(text);
    document.querySelector('body').appendChild(button);

    const image = document.createElement('img');
    image.src = './Images/domPic.png';
    document.querySelector('body').appendChild(image);

    button.addEventListener ("click", function() {
        image.parentNode.removeChild(image);
        button.parentNode.removeChild(button);
    });
}

function changeTextColor() {
    document.querySelector('#tag1').style.color = "Pink";
    document.querySelector("#tag2").style.color = "Pink";
}

function changeFont() {
    document.querySelector('#tag1').style.fontSize = '40px';
}