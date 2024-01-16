import BandSiteApi from "./band-site-api.js";

async function appendchild() {
  const bandSiteApiObj = new BandSiteApi("d2a39b7e-6320-445e-b67c-86382e23e73");
  const showsList = await bandSiteApiObj.getShows();

  const shows = showsList.data.reduce((result, show) => {
    result.push({
      date: new Date(show.date).toDateString(),
      venue: show.place,
      location: show.location,
    });
    return result;
  }, []);

  let ul;
  let li;
  appendShows(shows, ul, li);
}

const appendShows = (shows, ul, li) => {
  shows.forEach((show) => {
    ul = document.querySelector("ul");
    li = document.createElement("li");
    li.classList.add("show-time__list");

    let div1 = document.createElement("div");
    div1.classList.add("show-time__div");

    let p11 = document.createElement("p");
    p11.classList.add("show-time__elements");
    p11.innerText = "DATE";
    div1.appendChild(p11);

    let p1 = document.createElement("p");
    p1.classList.add("show-time__elements__date");
    p1.innerText = show.date;
    div1.appendChild(p1);

    li.appendChild(div1);
    console.log(li);

    let div2 = document.createElement("div");
    div2.classList.add("show-time__div");

    let p21 = document.createElement("p");
    p21.classList.add("show-time__elements");
    p21.innerText = "VENUE";
    div2.appendChild(p21);

    let p2 = document.createElement("p");
    p2.classList.add("show-time__elements__value");
    p2.innerText = show.venue;
    div2.appendChild(p2);

    li.appendChild(div2);

    let div3 = document.createElement("div");
    div3.classList.add("show-time__div");

    let p31 = document.createElement("p");
    p31.classList.add("show-time__elements");
    p31.innerText = "LOCATION";
    div3.appendChild(p31);

    let p3 = document.createElement("p");
    p3.classList.add("show-time__elements__value");
    p3.innerText = show.location;
    div3.appendChild(p3);

    li.appendChild(div3);

    let div4 = document.createElement("div");
    div4.classList.add("show-time__div");

    let p_blank = document.createElement("p");
    p_blank.classList.add("show-time__blank");
    p_blank.innerText = "";
    div4.appendChild(p_blank);

    let button = document.createElement("button");
    button.classList.add("show-time__button");
    button.innerText = "BUY TICKETS";
    div4.appendChild(button);

    li.appendChild(div4);
    ul.appendChild(li);
    liSelected();
  });
};

const liSelected = () => {
  let li_selected = document.querySelectorAll(".show-time__list");
  li_selected.forEach((li_node) => {
    li_node.addEventListener("mouseover", () => {
      li_node.classList.add("show-time__list-selected");
    });
    li_node.addEventListener("mouseout", () => {
      li_node.classList.remove("show-time__list-selected");
    });
    li_node.addEventListener("click", () => {
      li_node.classList.add("show-time__list-selected");
    });
  });
};

appendchild();