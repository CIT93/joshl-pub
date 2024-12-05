import {FORM, TBL} from "./global.js";
import { saveLS } from "./storage.js";

const newRowTest = (data) => {
  const tableRef = document.getElementById("table-id");
  let newTR = tableRef.insertRow(-1);
  let newTD = newTR.insertCell(0);
  let newTD_1 = newTR.insertCell(0);
  let newTD_2 = newTR.insertCell(0);
  let newTD_3 = newTR.insertCell(0);
  let newTD_4 = newTR.insertCell(0); 
  let newLabl = document.createTextNode(`thank`)
  newTD_4.appendChild(newLabl);
  let newLabl2 = document.createTextNode(`you`)
  newTD_3.appendChild(newLabl2);
  let newLabl3 = document.createTextNode(`for`)
  newTD_2.appendChild(newLabl3);
  let newLabl4 = document.createTextNode(`using`)
  newTD_1.appendChild(newLabl4);
  let newLabl5 = document.createTextNode(`myApp!`)
  newTD.appendChild(newLabl5);

}

export function renderTblHeading() {
    const table = document.createElement("table");
    table.setAttribute("id", "table-id")
    const thead = document.createElement("thead");
    const tr = document.createElement("tr");
    const headingTextArr = ["Player Count", "Decided Game", "Game Type","Overall Experience / 10", , "Action"]
    headingTextArr.forEach(function (text) {
      const th = document.createElement("th");
      th.textContent = text;
      tr.appendChild(th);
    });
    thead.appendChild(tr);
    table.appendChild(thead);
    return table
}

function renderTblBtns(obj, index, data) {
  const td = document.createElement("td");
  const btnEdit = document.createElement("button");
  const btnDel = document.createElement("button");
  btnEdit.textContent = "Edit";
  btnDel.textContent = "Del";
  td.appendChild(btnEdit);
  td.appendChild(btnDel);
  
      btnDel.addEventListener("click", (e) => {
        console.log("delete button clicked");
        data.splice(index, 1);
        saveLS(data);
        renderTbl(data);
      });

      btnEdit.addEventListener("click", (e) => {
        console.log("edit button clicked");
        FORM[1].value = obj.playerCount;
        FORM[2].value = obj.gameType;
        FORM[3].value = obj.currentDay;
        FORM[4].value = obj.currentEnjoymentLevel;

        data.splice(index, 1);
        saveLS(data);
        renderTbl(data);
      });

  return td
}

function renderBody(data) {
  const tbody = document.createElement("tbody")
  data.forEach(function(obj, index){
    const tr = document.createElement("tr");
    const tdPlayerC = document.createElement("td");
    tdPlayerC.textContent = obj.playerCount;

    const tdDecidedGame = document.createElement("td");
    tdDecidedGame.textContent = obj.game.name;

    const tdGameType = document.createElement("td");
    tdGameType.textContent = obj.gameType;

    const tdEnjoymentTotal = document.createElement("td");
    tdEnjoymentTotal.textContent = obj.enjoymentTotal;

    tr.appendChild(tdPlayerC);
    tr.appendChild(tdDecidedGame);
    tr.appendChild(tdGameType);
    tr.appendChild(tdEnjoymentTotal);
    tbody.appendChild(tr)

    const td = renderTblBtns(obj, index, data);
    tr.appendChild(td);
    tbody.appendChild(tr);





})
return tbody;

}

export function renderTbl(data) {
  TBL.innerHTML = "";
  if(data.length !== 0 ) {
    const table = renderTblHeading();
    const tbody = renderBody(data);
    table.appendChild(tbody);
    TBL.appendChild(table);
    newRowTest(data);
  }
  }
