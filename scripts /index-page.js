const commentsArray = [
    {
      name: "Connor Walton",
      timestamp: "02/17/2021",
      text: "This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains."
    },
    {
      name: "Emilie Beach",
      timestamp: "01/09/2021",
      text: "I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day.."
    },
    {
      name: "Miles Acosta",
      timestamp: "12/20/2020",
      text: "I can't stop listening. Every time I hear one of their songs - the vocals - it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can't get enough."
    }
  ];
  function displayComment(comment){
    
    const commentSection =document.querySelector(".comments__list");
const commentBlock=document.createElement("div");
commentBlock.className= "default-comments__block";


const avatartDiv = document.createElement("div");
avatartDiv.className= "default-comments__avatar";
commentBlock.appendChild(avatartDiv);

//default-comments__details

const commentsDetails =document.createElement("div");
commentsDetails.className="default-comments__details";


const nameDateDiv =document.createElement("div")
nameDateDiv.className="default-comments__name-and-date";


const nameParagraph=document.createElement('p');
nameParagraph.className="default-comments__name";
nameParagraph.textContent=comment.name;
nameDateDiv.appendChild(nameParagraph);

const spanDate=document.createElement("span");
spanDate.className="default-comments__date";
spanDate.textContent=comment.timestamp;
nameDateDiv.appendChild(spanDate);

commentsDetails.appendChild(nameDateDiv)

const commentText=document.createElement("p")
commentText.className="default-comments__text";
commentText.textContent=comment.text;
commentsDetails.appendChild(commentText);

commentBlock.appendChild(commentsDetails)
commentSection.appendChild(commentBlock)

const divider=document.createElement("div");
divider.className="default-comments__divider";
commentSection.appendChild(divider)
}

function clearComments() {
  const commentSection = document.querySelector(".comments__list");
  if (commentSection) {
      commentSection.innerHTML = "";
  } else {
      console.log("Element with class 'comments__list' not found");
  }
}

function renderComment(){
    clearComments();
    commentsArray.forEach(comment =>displayComment(comment))
}

document.querySelector(".comment__form").addEventListener("submit", function(event){
  event.preventDefault();
  const nameInput = document.querySelector("#nameInput").value
 const commentInput = document.querySelector("#commentInput").value
const newComment={
  name:nameInput,
  timestamp: new Date().toLocaleDateString(),
  text:commentInput
}
commentsArray.unshift(newComment)

renderComment()

document.querySelector("#nameInput").value = " "
document.querySelector("#commentInput").value=" "

})
renderComment()



