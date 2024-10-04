const TBL = document.getElementById("tab-data");
const FORM = document.getElementById("form");

function renderTblHeading() {
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

function renderTblBtns(index, data, obj){
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
  // 1. fix the table heading showing up on the delete operation? couldnt get to work
  // 2. done & working get the update -> edit button -> to popular the existing form with object values that user has already entered
  // notes on what i tried to do @ the bottom of this page:

  btnEdit.addEventListener('click', function(e){
    console.log("edit button clicked")
    console.log(e);
    FORM[1].value = obj.firstName;
    FORM[2].value = obj.lastName;
    FORM[3].value = obj.houseM;
    FORM[4].value = obj.houseS;
    data.splice(index, 1);
    renderTbl(data);

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
    const td = renderTblBtns(index, data, obj);
    tr.appendChild(td);
    tbody.appendChild(tr);
  });
  return tbody; //needed this
}

function renderTbl(data) {
  TBL.innerHTML = "";
  if (data.length !== 0) {
    console.log("Build the table")
    const table = renderTblHeading();
    const tbody = renderTblBody(data); //needed this
    table.appendChild(tbody);
    TBL.appendChild(table);
  }

}

export { renderTbl, renderTblHeading };

// What i tried:
// i tried putting the line of code:   TBL.innerHTML = ""; into multiple different spots
// but failed to get it to work.  i tried putting it in the function render table, rendertblbtns function, and eventlistener delete function
// but couldnt get it to work.  will be watching the video explaining it.
// gonna watch solution & edit code: