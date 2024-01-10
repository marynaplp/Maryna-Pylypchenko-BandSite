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
//create the main block
const commentBlock=document.createElement("div");
commentBlock.className= "default-comments__block";

// create avatartDiv
const avatartDiv = document.createElement("div");
avatartDiv.className= "default-comments__avatar";
commentBlock.appendChild(avatartDiv);

//default-comments__details
//create the element
const commentsDetails =document.createElement("div");
//create the class inside the commentsDeatils 
commentsDetails.className="default-comments__details";
//add the commentsDeatils


//create the name and the date 
const nameDateDiv =document.createElement("div")
nameDateDiv.className="default-comments__name-and-date";


//create and append the name
const nameParagraph=document.createElement('p');
nameParagraph.className="default-comments__name";
nameParagraph.textContent=comment.name;// name == the mane from the objec
nameDateDiv.appendChild(nameParagraph);

///create and append the span
const spanDate=document.createElement("span");
spanDate.className="default-comments__date";
spanDate.textContent=comment.timestamp;
nameDateDiv.appendChild(spanDate);

//append the name and div in the details div
commentsDetails.appendChild(nameDateDiv)

// create and append the text div
const commentText=document.createElement("p")
commentText.className="default-comments__text";
commentText.textContent=comment.text;
commentsDetails.appendChild(commentText);

//append the detail div into the commentBlock
commentBlock.appendChild(commentsDetails)
//appent the comment block in the main section
commentSection.appendChild(commentBlock)

//appens the divider after each comment
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
    console.log(commentsArray)
}
renderComment()

