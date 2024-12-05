import {FORM, TBL} from "./global.js";
import { saveLS } from "./storage.js";

//code along update:
const calculateAvg = (data) => {
  const reduceTotal = data.reduce((sum, ea) => sum + ea.total, 0)
  const tableRef = document.getElementById("table-id");
  let newTR = tableRef.insertRow(-1);
  let newTD = newTR.insertCell(0);
  let newTD_1 = newTR.insertCell(0);
  let newTD_2 = newTR.insertCell(0);
  // let newTD_3 = newTR.insertCell(0); //removed these for now
  // let newTD_4 = newTR.insertCell(0); //removed these for now
  let newTD_5 = newTR.insertCell(0);
  let newLabl = document.createTextNode(`Average Footprint: ${Math.floor(reduceTotal/data.length)}`)
  // let newText = document.createTextNode(`${Math.floor(reduceTotal/data.length)}`)
  newTD_1.appendChild(newLabl);
  // newCell.appendChild(newText);
}

const renderTblHeading = () => {
  const table = document.createElement("table");
  table.setAttribute("id", "table-id")
  const thead = document.createElement("thead");
  const tr = document.createElement("tr");
  const headingTextArr = ["First", "Last", "Footprint Total", "Action"]
  headingTextArr.forEach(text => {
    const th = document.createElement("th");
    th.textContent = text;
    tr.appendChild(th);
  });
  thead.appendChild(tr);
  table.appendChild(thead);
  return table; 
}

const onUpdate = (index, data) => {
    data.splice(index, 1);
    saveLS(data);
    renderTbl(data);
}

const renderTblBtns = (index, data, obj) => {
  const td = document.createElement("td");
  const btnEdit = document.createElement("button");
  const btnDel = document.createElement("button");
  btnEdit.textContent = "Edit";
  btnDel.textContent = "Delete";
  td.appendChild(btnEdit);
  td.appendChild(btnDel);

  btnDel.addEventListener('click', e => {
    console.log("delete button clicked")
    onUpdate(index, data);
  });

  btnEdit.addEventListener('click', e => {
    console.log("edit button clicked");
    FORM[1].value = obj.firstName;
    FORM[2].value = obj.lastName;
    FORM[3].value = obj.houseMembers;
    FORM[4].value = obj.houseSize;
    FORM[5].value = obj.foodChoice;
    FORM[6].value = obj.foodSource;
    FORM[7].value = obj.waterValue;
    FORM[8].checked = obj.both;
    FORM[9].value = obj.purchasesPoints;
    FORM[10].value = obj.wastePoints;

    // check boxes for recycle, its not working and idk why
    // FORM.glass.checked = obj.recycle.glass; //syntax from lecture, not working
    // FORM.plastic.checked = obj.recycle.plastic; //syntax from lecture, not working
    // FORM.paper.checked = obj.recycle.paper; //syntax from lecture, not working
    // FORM.paper.checked = obj.recycle.paper; //syntax from lecture, not working
    // FORM.aluminum.checked = obj.recycle.aluminum; //syntax from lecture, not working
    // FORM.steel.checked = obj.recycle.steel; //syntax from lecture, not working
    // FORM.compositing.checked = obj.recycle.compositing; //syntax from lecture, not working    
    
    FORM.personal.value = obj.personalPoints;
    FORM.publicTransportation.value = obj.publicTransportPoints;
    FORM.flight.value = obj.flightPoints;
    onUpdate(index, data);
  });

  return td;
}


const renderTblBody = data => {
  const tbody = document.createElement("tbody");
  data.forEach((obj, index) => {
    const tr = document.createElement("tr");
    const keys = ["firstName", "lastName", "total"]
      keys.forEach(key => {
        const td = document.createElement("td");
        td.textContent = obj[key];
        tr.appendChild(td);
       })

    const td = renderTblBtns(index, data, obj);
    tr.appendChild(td);
    tbody.appendChild(tr);
  });
  return tbody; //needed this
}

const renderTbl = data => {
  TBL.innerHTML = "";
  if (data.length !== 0) {
    // console.log("Build the table")
    const table = renderTblHeading();
    const tbody = renderTblBody(data); //needed this
    table.appendChild(tbody);
    TBL.appendChild(table);
    calculateAvg(data);
  }

}









export { renderTbl, renderTblHeading };
