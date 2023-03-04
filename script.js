let Description = document.querySelector(".description");

function updateDescription(name, description,letra, url, color) {
  let title = document.querySelector("#descriptionTitle");
  let paragraph = document.querySelector("#descriptionParagraph");
  let lyrics = document.querySelector("#descriptionLyrics");
  
  
  title.innerHTML = name;
  paragraph.innerHTML = description; 
  lyrics.innerHTML = letra;

  let video = document.querySelector("#video");
  video.src = url;

  if (color){
    Description.style.backgroundColor = color;
  } else {
    Description.style.backgroundColor = ""
  } 
};


