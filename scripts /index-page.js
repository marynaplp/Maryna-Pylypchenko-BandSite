import BandSiteApi from "./band-site-api.js";
//api
const bandSiteApiObj = new BandSiteApi("a08fc5ed-910b-404f-aa2a-5a5bd255e5b6");
//array of the comments to store 
let commentsArray = [];
document.addEventListener("DOMContentLoaded", async () => {
  await renderComments();
});
//clean comments
function clearComments() {
  const commentSection = document.querySelector(".comments__list");
  if (commentSection) {
      commentSection.innerHTML = "";
  } else {
      console.error("Element with class 'comments__list' not found");
  }
}

//Display default comments
function displayComment(comment) {
  const commentSection = document.querySelector(".comments__list");

  const commentBlock = document.createElement("div");
  commentBlock.className = "default-comments__block";

  const avatarDiv = document.createElement("div");
  avatarDiv.className = "default-comments__avatar";
  
  avatarDiv.style.backgroundImage = "url('path_to_placeholder_image')";
  commentBlock.appendChild(avatarDiv);

  const commentsDetails = document.createElement("div");
  commentsDetails.className = "default-comments__details";

  const nameDateDiv = document.createElement("div");
  nameDateDiv.className = "default-comments__name-and-date";

  const nameParagraph = document.createElement("p");
  nameParagraph.className = "default-comments__name";
  nameParagraph.textContent = comment.name;
  nameDateDiv.appendChild(nameParagraph);

  const spanDate = document.createElement("span");
  spanDate.className = "default-comments__date";
  spanDate.textContent = new Date(comment.timestamp).toLocaleDateString("en-US");;
  nameDateDiv.appendChild(spanDate);

  commentsDetails.appendChild(nameDateDiv);

  const commentText = document.createElement("p");
  commentText.className = "default-comments__text";
  commentText.textContent = comment.comment; 
  commentsDetails.appendChild(commentText);

  commentBlock.appendChild(commentsDetails);
  commentSection.prepend(commentBlock); 
}

//fetch, sort, display comments
async function renderComments() {
  clearComments();
  const commentsArray = await bandSiteApiObj.getComments();
  commentsArray.sort((a, b) => a.timestamp - b.timestamp);

  commentsArray.forEach(comment => displayComment(comment));
}

document.querySelector(".comment__form").addEventListener("submit", async function(event) {
  event.preventDefault();
//retrive the data
  const nameInput = document.getElementById("nameInput").value;
    const commentInput = document.getElementById("commentInput").value;

  if (!nameInput || !commentInput) {
    alert("Name and comment are required.");
    return;
  }
  //comment  sent to the server 
  const newComment = {
    name: nameInput,
    comment: commentInput
  };
  try {
    const response = await bandSiteApiObj.postComment(newComment);
    if (response && response.data) {
      commentsArray.unshift(response.data);
      renderComments();
    } else {
      console.error("No data returned from postComment");
    }
  } catch (error) {
    console.error("Error posting comment:", error);
  }
  document.querySelector("#nameInput").value = "";
  document.querySelector("#commentInput").value = "";
});
renderComment()
