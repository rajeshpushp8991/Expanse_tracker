let Data = JSON.parse(localStorage.getItem("Data")) || [];
Display(Data);
document.querySelector("form").addEventListener("submit", ExpenseTracker);
function ExpenseTracker(event) {
    event.preventDefault();
    let amount = document.querySelector("#amount").value;
    let description = document.querySelector("#description").value;
    let category = document.querySelector("#category").value;
    let obj = {
        amount,
        description,
        category,
    };
    Data.push(obj);
    localStorage.setItem("Data", JSON.stringify(Data));
    alert("expense added successfully!!");
    location.reload();
}

function Display(arr) {
    arr.forEach((e, i) => {
        let tr = document.createElement("tr");
        let td1 = document.createElement("td");
        td1.innerText = e.amount;
        let td2 = document.createElement("td");
        td2.innerText = e.description;
        let td3 = document.createElement("td");
        td3.innerText = e.category;
        let td4 = document.createElement("td");
        let btn1 = document.createElement("button");
        btn1.setAttribute("class", "delete");
        btn1.innerText = "Delete";
        btn1.addEventListener("click", function () {
            arr.splice(i, 1);
            alert("expense deleted successfully!!");
            location.reload();
            localStorage.setItem("Data", JSON.stringify(Data));
        });
        td4.append(btn1);
        let td5 = document.createElement("td");
        let btn2 = document.createElement("button");
        btn2.setAttribute("class", "update");
        btn2.innerText = "Update";
        btn2.addEventListener("click", function () {
            updatedData(e);
        });
        td5.append(btn2);
        tr.append(td1, td2, td3, td4, td5);
        document.querySelector("tbody").append(tr);
    });
}

function updatedData(e) {
    let y = document.querySelector("#btn > button");
    y.disabled = false;

    let x = document.querySelector("#inpbtn");
    x.disabled = true

    document.querySelector("#amount").value = e.amount;
    document.querySelector("#description").value = e.description;
    document.querySelector("#category").value = e.category;

    // update your data over new data
    document
        .querySelector("#btn > button")
        .addEventListener("click", function () {
            e.amount = document.querySelector("#amount").value;
            e.description = document.querySelector("#description").value;
            e.category = document.querySelector("#category").value;

            alert("expense updated successfully!!");
            location.reload();
            localStorage.setItem("Data", JSON.stringify(Data));
        });
}