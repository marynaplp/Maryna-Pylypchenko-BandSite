const shows =[
    {date:"Mon Sept 06 2021", venue:"Ronald Lane", location:"San Francisco, CA"},
    {date:"Tue Sept 21 2021", venue:"Pier 3 East", location:"San Francisco, CA"},
    {date:"Fri Oct 15 2021", venue:"View Lounge", location:"San Francisco, CA"},
    {date:"Sat Nov 06 2021", venue:"Hyatt Agency", location:"San Francisco, CA"},
    {date:"Fri Nov 26 2021", venue:"Moscow Center", location:"San Francisco, CA"},
    {date:"Wed Dec 15 2021", venue:"Press Club", location:"San Francisco, CA"},

];

function createShowElement(show){

const showElem=document.createElement("div")
showElem.className ="show__item";
showElem.innerHTML=`
<div class ="shows__info">
<label class="shows__date">Date</label>
<span class="shows__date-info">${show.date}</span>
</div>
<div class ="shows__info">
<label class="shows__place">Venue</label>
<div class="shows__place-info">${show.venue}</span>
</div>
<div class ="shows__info">
<label class="shows__location">Location</label>
<span class="shows__location-info">${show.location}</span>
</div>
<button class="shows__button">BUY TICKETS</button> 
<div class ="shows__divider"></div>
`;
    return showElem 
}

const showContainer=document.querySelector(".shows__container")

shows.forEach(show=>{
    showContainer.appendChild(createShowElement(show))
})
