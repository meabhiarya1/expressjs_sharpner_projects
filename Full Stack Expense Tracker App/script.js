const displayProduct = async () => {
  await axios
    .get("http://localhost:3000/expense/get-expenses")
    .then((res) => {
      const expenses = res.data;
      const ul = document.getElementById("expenseData");
      ul.textContent = "";
      // console.log(expenses)

      expenses.forEach((expense, index) => {
        const li = document.createElement("li");
        li.textContent = `Expense: ${expense.expensePrice} - Description: ${expense.expenseDescription} - Category: ${expense.expenseCategory}`;
        const editButton = document.createElement("button");
        editButton.textContent = "Edit";
        editButton.onclick = () => editData(expense);
        li.appendChild(editButton);

        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.onclick = () => deleteData(expense.id);
        li.appendChild(deleteButton);
        ul.appendChild(li);
      });
    })
    .catch((err) => {
      console.log(err.data);
    });
};

// function to handle form submission
const handleSubmit = async (e) => {
  e.preventDefault();

  const newData = {
    expensePrice: document.getElementById("expensePrice").value,
    expenseDescription: document.getElementById("expenseDescription").value,
    expenseCategory: document.getElementById("expenseCategory").value,
  };

  console.log(newData);

  await axios
    .post("http://localhost:3000/expense/add-expense", newData)
    .then((res) => {
      displayProduct();
      console.log(res.data);
    })
    .catch((err) => {
      console.log(err.data);
    });

  document.getElementById("expensePrice").value = "";
  document.getElementById("expenseDescription").value = "";
  document.getElementById("expenseCategory").value = "";
};

const deleteData = (index) => {
  axios
    .delete(`http://localhost:3000/expense/delete-expense/${index}`)
    .then((res) => {
      displayProduct();
    })
    .catch((err) => {
      console.log(err.data);
    });
  displayProduct();
};

const editData = (expense) => {
  document.getElementById("expensePrice").value = expense.expensePrice;
  document.getElementById("expenseDescription").value =
    expense.expenseDescription;
  document.getElementById("expenseCategory").value = expense.expenseCategory;

  deleteData(expense.id);
  displayProduct();
};

document.querySelector(".form").addEventListener("submit", handleSubmit);
displayProduct();