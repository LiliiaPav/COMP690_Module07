// GET ADD EMPLOYEE FORM AND EMPLOYEE TABLE FROM THE DOM
let fmEmpl = document.getElementById("addForm");
let tblEmpl = document.getElementById("employees");

// SET A COUNT VARIABLE TO DISPLAY NEXT TO EMPLOYEES HEADER
let count=0;

// ADD EMPLOYEE
fmEmpl.addEventListener('submit', (e) => {
    // PREVENT FORM SUBMISSION
    e.preventDefault();
    // GET THE VALUES FROM THE TEXT BOXES
    const obj       = (id) => document.getElementById(id)
    let valEmplId   = obj("id").value;
    let valEmplName = obj("name").value;
    let valEmplExt  = obj("extension").value;
    let valEmplEmail= obj("email").value;
    let valEmplDep  = obj("department").value;

    

    // INSERT A NEW ROW AT THE END OF THE EMPLOYEES TABLE
    let tr = tblEmpl.insertRow(count+1);

    // INSERT A CELL FOR EACH ITEM WITHIN THE NEW ROW
    let tdID=tr.insertCell(0);
    let tdName=tr.insertCell(1);
    let tdExt=tr.insertCell(2);
    let tdEmail=tr.insertCell(3);
    let tdDep=tr.insertCell(4);

    // APPEND THE TEXT VALUES AS TEXT NODES WITHIN THE CELLS
    let textID=document.createTextNode(valEmplId);
    tdID.appendChild(textID);
    tr.appendChild(tdID);

    let textName=document.createTextNode(valEmplName);
    tdName.appendChild(textName);
    tr.appendChild(tdName);

    let textExt=document.createTextNode(valEmplExt);
    tdExt.appendChild(textExt);
    tr.appendChild(tdExt);

    let textEmail=document.createTextNode(valEmplEmail);
    tdEmail.appendChild(textEmail);
    tr.appendChild(tdEmail);

    let textDep=document.createTextNode(valEmplDep);
    tdDep.appendChild(textDep);
    tr.appendChild(tdDep);

    // CREATE THE DELETE BUTTON
    
    let deleteBut=tr.insertCell(5);
    let text=document.createTextNode('X');
    deleteBut.className='bg-danger text-white text-center';
    deleteBut.appendChild(text);
    tr.appendChild(deleteBut);

    tblEmpl.appendChild(tr);
  
    // RESET THE FORM
    fmEmpl.reset();
    // SET FOCUS BACK TO THE ID TEXT BOX

    // INCREMENENT THE NUMBER OF EMPLOYEES IN THE TABLE
    count+=1;

    console.log(tblEmpl.childElementCount);
  
    let empCount = document.getElementById("empCount");
    empCount.value=count;
    empCount.className="text-muted";

    
})

// DELETE EMPLOYEE
tblEmpl.addEventListener('click', (e) =>{
    if (confirm('Are you sure you want to delete this task?')){
        tblEmpl.deleteRow(e.target.parentElement.rowIndex);
        count-=1;
        empCount.value=count;
    }
})


