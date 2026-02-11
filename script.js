
const form = document.getElementById("eventForm");
const eventList = document.getElementById("eventList");

const clearBtn = document.getElementById("clearBtn");
const sampleBtn = document.getElementById("sampleBtn");

const emptyText = document.getElementById("empty");


form.addEventListener("submit", function(e){

  e.preventDefault();

  const title = document.getElementById("title").value;
  const date = document.getElementById("date").value;
  const category = document.getElementById("category").value;
  const desc = document.getElementById("desc").value;

  addEvent(title,date,category,desc);

  form.reset();

});


function addEvent(title,date,category,desc){

  emptyText.style.display="none";

  const div = document.createElement("div");
  div.classList.add("event");

  div.innerHTML = `
    <h3>${title}</h3>
    <p><b>Date:</b> ${date}</p>
    <p><b>Category:</b> ${category}</p>
    <p>${desc}</p>
    <button class="delete">X</button>
  `;

  eventList.appendChild(div);

}


eventList.addEventListener("click", function(e){

  if(e.target.classList.contains("delete")){
    e.target.parentElement.remove();
  }

  if(eventList.children.length===0){
    emptyText.style.display="block";
  }

});


clearBtn.addEventListener("click", function(){

  eventList.innerHTML="";
  emptyText.style.display="block";

});


sampleBtn.addEventListener("click", function(){

  addEvent("Web Seminar","2026-02-15","Conference","Learning JS");
  addEvent("Football Match","2026-02-18","Sports","College tournament");
  addEvent("Birthday Party","2026-02-22","Personal","Friend's birthday");

});


const demoInput = document.getElementById("demoInput");
const demoText = document.getElementById("demoText");

demoInput.addEventListener("keyup", function(){

  demoText.innerText = demoInput.value;

  demoText.style.color="blue";
  demoText.style.fontWeight="bold";

});
