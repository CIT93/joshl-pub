const TBL = document.getElementById("tab-data"); //note: moved this here because it was not previous declared in this file to run the functions
const table = document.createElement("table");
const thead = document.createElement("thead");
const tbody = document.createElement("tbody");

function renderTBLHeading() {
    const tr = document.createElement("tr");
    const headingTextArray = ["Name", "HouseHold", "HouseSize", "Footprint", "Actions"];
    headingTextArray.forEach(function(text){
        const th = document.createElement("th");
        th.textContent = text;
        tr.appendChild(th);
    });
    thead.appendChild(tr);
    table.appendChild(thead); 
    table.appendChild(tbody);
    TBL.appendChild(table);
}

//Question being asked: If we were to look at the "data" part, what would it be?
// My answer: Im assuming it is storing our "input data" from the form, declaring it as a variable so it can save it as "data" that we can recall back to.

function renderTbl(cfpData) {
  // const table = renderTBLHeading(); get rid of this in order to make it not duplicate each submit attempt
  const tr = document.createElement("tr");
  const trTextArr = [cfpData[0].firstname, cfpData[0].houseM, cfpData[0].houseS, cfpData[0].cfpTotal,];
  trTextArr.forEach(function (text) {
    const td = document.createElement("td");
    td.textContent = text;
    tr.appendChild(td);
  });
  const td = document.createElement("td");
  const btnEdit = document.createElement("button");
  btnEdit.textContent = "Edit";
  const btnDel = document.createElement("button");
  btnDel.textContent = "Del";
  td.appendChild(btnEdit);
  td.appendChild(btnDel);
  tr.appendChild(td);
  tbody.appendChild(tr);
  TBL.appendChild(table);
}

renderTBLHeading();

export {renderTbl, renderTBLHeading};
//Questions I have for modules:
// Should we make it a habit to create modules for each and every function we have to keep our "main.js" file organized?
