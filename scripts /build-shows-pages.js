import BandSiteApi from "./band-site-api.js";

const bandSiteApiObj = new BandSiteApi("a08fc5ed-910b-404f-aa2a-5a5bd255e5b6");

function createShowElement(show) {
  const listItem = document.createElement("li");
  listItem.className = "show-time__list";

  // Date
  const dateDiv = document.createElement("div");
  dateDiv.className = "show-time__div";
  const dateTitle = document.createElement("p");
  dateTitle.className = "show-time__elements";
  dateTitle.innerText = "DATE";
  const dateValue = document.createElement("p");
  dateValue.className = "show-time__elements__date";
  dateValue.innerText = show.date;

  // Venue
  const venueDiv = document.createElement("div");
  venueDiv.className = "show-time__div";
  const venueTitle = document.createElement("p");
  venueTitle.className = "show-time__elements";
  venueTitle.innerText = "VENUE";
  const venueValue = document.createElement("p");
  venueValue.className = "show-time__elements_value";
  venueValue.innerText = show.venue;

  // Location
  const locationDiv = document.createElement("div");
  locationDiv.className = "show-time__div";
  const locationTitle = document.createElement("p");
  locationTitle.className = "show-time__elements";
  locationTitle.innerText = "LOCATION";
  const locationValue = document.createElement("p");
  locationValue.className = "show-time__elements_value";
  locationValue.innerText = show.location;

  const showBlankDIV = document.createElement("div");
  showBlankDIV.className = "show-time__div";
  const showBlankTitle = document.createElement("p");
  showBlankTitle.className = "show-time__blank";
  showBlankTitle.innerHTML = "";
  const showButton = document.createElement("button");
  showButton.className = "show-time__button";
  showButton.innerText = "BUY TICKETS";

  dateDiv.appendChild(dateTitle);
  dateDiv.appendChild(dateValue);
  venueDiv.appendChild(venueTitle);
  venueDiv.appendChild(venueValue);
  locationDiv.appendChild(locationTitle);
  locationDiv.appendChild(locationValue);
  showBlankDIV.appendChild(showBlankTitle);
  showBlankDIV.append(showButton);

  listItem.appendChild(dateDiv);
  listItem.appendChild(venueDiv);
  listItem.appendChild(locationDiv);
  listItem.appendChild(showBlankDIV);

  listItem.addEventListener("mouseover", onShowItemHover);
  listItem.addEventListener("mouseout", onShowItemHoverOut);
  listItem.addEventListener("click", function () {
    document.querySelectorAll(".show-time__list.selected").forEach((item) => {
      item.classList.remove("selected");
    });
    listItem.classList.add("selected");
  });

  return listItem;
}
function onShowItemHover(event) {
  event.currentTarget.classList.add("hover");
}
function onShowItemHoverOut(event) {
  event.currentTarget.classList.remove("hover");
}
async function fetchAndDisplayShows() {
  try {
    const response = await bandSiteApiObj.getShows();

    const showList = document.querySelector(".show__list");
    showList.innerHTML = "";

    response.forEach((show) => {
      const showElement = createShowElement(show);
      showList.appendChild(showElement);
    });
  } catch (error) {
    console.error("Error fetching and displaying shows:", error);
  }
}

document.addEventListener("DOMContentLoaded", fetchAndDisplayShows);
