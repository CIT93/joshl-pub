import {FORM, TBL} from "./global.js";
import { saveLS } from "./storage.js";


const renderTblHeading = () => {
  const table = document.createElement("table");
  const thead = document.createElement("thead");
  const tr = document.createElement("tr");
  const headingTextArr = ["Name", "HouseHold", "HouseSize", "Food Choice", "Footprint", "Action"]
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
    console.log("edit button clicked")
    FORM[1].value = obj.firstName;
    FORM[2].value = obj.lastName;
    FORM[3].value = obj.houseMembers;
    FORM[4].value = obj.houseSize;
    FORM[5].value = obj.foodChoice;
    onUpdate(index, data);
  });

  return td;
}


const renderTblBody = data => {
  const tbody = document.createElement("tbody");
  data.forEach((obj, index) => {
    const tr = document.createElement("tr");
    for (const [key, value] of Object.entries(obj)) {
      if (key !== "lastName" && key !== "houseHoldPoints" && key !== "houseSizePoints" && key !== "foodChoicePoints") {
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

const renderTbl = data => {
  TBL.innerHTML = "";
  if (data.length !== 0) {
    // console.log("Build the table")
    const table = renderTblHeading();
    const tbody = renderTblBody(data); //needed this
    table.appendChild(tbody);
    TBL.appendChild(table);
  }

}

export { renderTbl, renderTblHeading };