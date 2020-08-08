//assigning variables to relevant elements
const memecontainer = document.querySelector('#memecontainer');
const form = document.querySelector('#memeform');
const toptext = document.querySelector('#toptext');
const bottomtext = document.querySelector('#bottomtext');
const imgurl = document.querySelector('#imgurl');
const textcolor = document.querySelector('#textcolor');
const textsize = document.querySelector('#textsize');
const submitbtn = document.querySelector('input[type="submit"]');

let newimg;

//function executed on submition
form.addEventListener('submit', function(e) {
	e.preventDefault();

	//clear last meme
	memecontainer.innerHTML = '';
	memecontainer.style.border = 'none';

	//create image
	const memeimg = document.createElement('img');
	memeimg.setAttribute('src', imgurl.value);
	imgurl.value = '';
	memeimg.classList = 'memeimg';
	newimg = memeimg;

	//create top text
	const topwords = document.createElement('h2');
	topwords.innerText = toptext.value;
	toptext.value = '';
	topwords.style.fontSize = `${textsize.value}px`;
	topwords.classList = 'toptext';
	topwords.style.color = textcolor.value;
	topwords.style.webkitTextStroke = `${textsize.value / 30}px black`;

	//create bottom text
	const bottomwords = document.createElement('h2');
	bottomwords.innerText = bottomtext.value;
	bottomtext.value = '';
	bottomwords.style.fontSize = `${textsize.value}px`;
	bottomwords.classList = 'bottomtext';
	bottomwords.style.color = textcolor.value;
	bottomwords.style.webkitTextStroke = `${textsize.value / 30}px black`;

	//append text and image to div
	memecontainer.append(memeimg);
	memecontainer.append(topwords);
	memecontainer.append(bottomwords);

	//activate resize function after function executes
	setTimeout(resizediv, 100);
});

//resize div to match image (helps position of text)
function resizediv() {
	memecontainer.style.width = `${newimg.clientWidth}px`;
	memecontainer.style.height = `${newimg.clientHeight}px`;
	memecontainer.style.border = '10px rgba(68, 192, 30, 0.4) groove';
}
