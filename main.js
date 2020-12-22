document.querySelector('body').style.fontFamily = 'Arial, sans-serif';

document.querySelector('#nickname').textContent = 'Joey';
document.querySelector('#favorites').textContent = 'Music, Video-Games, Netflix';
document.querySelector('#hometown').textContent = 'Wilmington';
document.querySelector('#fact').textContent = 'My favorite color is pink';

document.querySelector('ul').style.color = 'hotpink';

const image = document.createElement('img');
image.src = './Images/Soccer.png';
document.querySelector('body').appendChild(image);