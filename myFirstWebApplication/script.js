let sardegna1 = {
    photo: './photos/1.jpg',
    title: 'Sardegna1',
    description: 'Beautiful beach'
  };

let sardegna2 = {
    photo: './photos/2.jpg',
    title: 'Sardegna2',
    description: 'Beautiful beach'
  };
  
let sardegna3 = {
    photo: './photos/3.jpg',
    title: 'Sardegna3',
    description: 'Beautiful beach'
  };
  
let sardegna4 = {
    photo: './photos/4.jpg',
    title: 'Sardegna4',
    description: 'Beautiful beach'
  };
  
let sardegna5 = {
    photo: './photos/5.jpg',
    title: 'Sardegna5',
    description: 'Beautiful beach'
  };
  
let sardegna6 = {
    photo: './photos/6.jpg',
    title: 'Sardegna6',
    description: 'Beautiful beach'
  };
  
let sardegna7 = {
    photo: './photos/7.jpg',
    title: 'Sardegna7',
    description: 'Beautiful beach'
  };
  
let sardegna8 = {
    photo: './photos/8.jpg',
    title: 'Sardegna8',
    description: 'Beautiful beach'
  };
  
let currentPhoto = 0;
let imagesData = [sardegna1, sardegna2, sardegna3, sardegna4, sardegna5, sardegna6, sardegna7, sardegna8];
    $('#photo').attr('src', imagesData[currentPhoto].photo);
    $('#title').text(imagesData[currentPhoto].title);
    $('#description').text(imagesData[currentPhoto].description);

let loadPhoto = (photoNumber) => {
    $('#photo').attr('src', imagesData[photoNumber].photo);
    $('#title').text(imagesData[photoNumber].title);
    $('#description').text(imagesData[photoNumber].description);
    }

loadPhoto(currentPhoto);

$('.rbutton').click(() => {
    if (currentPhoto < imagesData.length) {
        currentPhoto++;
        loadPhoto(currentPhoto);
    } else {
        currentPhoto = 0;
        loadPhoto(currentPhoto);
    };
})

$('.lbutton').click(() => {
    if (currentPhoto > 0) {
        currentPhoto--;
        loadPhoto(currentPhoto);
    } else {
        currentPhoto = imagesData.length;
        loadPhoto(currentPhoto);
    };
})

imagesData.forEach((photo, currentPhoto) => {
  $('#thumbnails').append(`<img class="small-pics" data-index="${currentPhoto}" src="${imagesData[currentPhoto].photo}">`);
  $('#thumbnails').append(`<div class="title">${imagesData[currentPhoto].title}</div>`);
 
  
  $('.small-pics').click(() => {
  let currentPhotoClicked =
  $(event.target).attr('data-index');
  let numberIndex =
  parseInt(currentPhotoClicked);
  loadPhoto(currentPhotoClicked);
      
  })
})

