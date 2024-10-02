const TBL = document.getElementById("tab-data");

function renderTblHeading() {
  TBL.innerHTML = "";
  const table = document.createElement("table");
  const thead = document.createElement("thead");
  const tr = document.createElement("tr");
  const headingTextArr = ["Name", "HouseHold", "HouseSize","Footprint", "Action"]
  headingTextArr.forEach(function (text) {
    const th = document.createElement("th");
    th.textContent = text;
    tr.appendChild(th);
  });
  thead.appendChild(tr);
  table.appendChild(thead);
  return table; 
}

function renderTblBtns(index, data){
  const td = document.createElement("td");
  const btnEdit = document.createElement("button");
  const btnDel = document.createElement("button");
  btnEdit.textContent = "Edit";
  btnDel.textContent = "Delete";
  td.appendChild(btnEdit);
  td.appendChild(btnDel);

  btnDel.addEventListener('click', function(e){
    console.log("delete button clicked")
    console.log(e);
    data.splice(index, 1);
    renderTbl(data);
  });

  // Goals for coding challenge:
  // 1. fix the table heading showing up on the delete operation? idk what this means
  // 2. get the update -> edit button -> to popular the existing form with object values that user has already entered
  // hint: FORM[index], but how do you reference the FORM inside the render module?

  btnEdit.addEventListener('click', function(e){
    // steps to do:
    // get existing information and reput it onto the form
    // splice/delete said information
    // reupload the information when clicking submit

  });

  return td;
}


function renderTblBody(data) {
  const tbody = document.createElement("tbody");
  data.forEach(function (obj, index) {
    console.log(index);
    const tr = document.createElement("tr");
    for (const [key, value] of Object.entries(obj)) {
      if (key !== "lastName" && key !== "houseMPTS" && key !== "houseSPTS") {
        const td = document.createElement("td");
        td.textContent = value;
        tr.appendChild(td);
      }
    }
    const td = renderTblBtns(index, data);
    tr.appendChild(td);
    tbody.appendChild(tr);
  });
  return tbody; //needed this
}

function renderTbl(data) {
  const table = renderTblHeading();
  const tbody = renderTblBody(data); //needed this

  table.appendChild(tbody);
  TBL.appendChild(table);
}

//coding challenge notes:
// what i tried: 
// - i tried transferring our data onto a new function code block but I cant get our data to transfer to the new rows
// - I feel like i am missing something that allows me to get the data to properly communicate with each function
// - i got stuck so i will be continuing the code along to find the solutions

export { renderTbl, renderTblHeading };
