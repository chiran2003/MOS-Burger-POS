let itemId="B1001";
let categary=-1;

// item Array
const item = [
    {
    categary : "Burgers",
    items : [
        {
            id : "B1001",
            name : "Classic Burger(Large)",
            price : 750.00,
            discount : 15
        }
    ]
    }
];


function additem(){

    let Categary=categary;

    const tempItem = {
        id : itemId,
        name : document.getElementById("itemName").value,
        price : document.getElementById("price").value,
        discount : document.getElementById("discount").value
    }    
    item[Categary].items.push(tempItem);
    alert("added item sucsessfully");
    loadTable();  
}



function categoryOnChange() {
    categary = document.getElementById("Categary").value;
    const divAddCategary=document.getElementById("addCategorySection");
    if (categary!=-1) {
        divAddCategary.style.display="none";
    } else {
        divAddCategary.style.display="block";
    }
}

function addCategary() {
    const newCategary = document.getElementById("newCategary").value;
    if (!newCategary.trim()) {
        alert("Please enter a valid category name!");
        return;
    }

    item.push({
        categary : newCategary,
        items: []
    });
    
    alert("categary added succsesfully");
    loadCategary();
    
}

function loadCategary(){
    let bodyCatogary=``
    
    let optNewC=`
    <option value="-1" placeholder="Enter new catogary">Add new Categary</option>
    `
    bodyCatogary+=optNewC
    
    for (let index = 0; index < item.length; index++) {
        let option=`
            <option value="${index}">${item[index].categary}</option>
        `
        bodyCatogary+=option;
    }   
    

    document.getElementById("Categary").innerHTML=bodyCatogary;
}

loadCategary();

function loadTable(){
    let tableBody=``;

    for (let index = 0; index < item.length; index++) {
        const tblcategary=`
        <tr>
            <th scope="row">${item[index].categary}</th>
          </tr>
        `;
        tableBody+=tblcategary;

        for (let i = 0; i < item[index].items.length; i++) {
            const tblitem = `
            <tr ondblclick="hu()">
            <th scope="row">${item[index].items[i].id}</th>
            <td>${item[index].items[i].name}</td>
            <td>${item[index].items[i].price}</td>
            <td>${item[index].items[i].discount}</td>
            </tr>
            `;

            tableBody+=tblitem;
            
        }
        
    }
    document.getElementById("tblbody").innerHTML=tableBody;
}

loadTable();

function hu(){
    alert("clicked");
}
