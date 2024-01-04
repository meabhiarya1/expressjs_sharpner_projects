// const URL =
//   "https://crudcrud.com/api/dc8dedff0e7b4f6b864b0c3adfb4c4ae/appointmentData";

// function to display user data

const displayData = async () => {
  await axios
    .get("http://localhost:3000/user/get-users")
    .then((res) => {
      const userDetails = res.data;
      // console.log(res.data);
      //   console.log(userDetails);
      const ul = document.getElementById("userData");
      ul.textContent = "";

      userDetails.forEach((data, index) => {
        const li = document.createElement("li");
        li.textContent = `Name: ${data.name} - Email: ${data.email} - Number: ${data.number}`;

        const editButton = document.createElement("button");
        editButton.textContent = "Edit";
        editButton.onclick = () => editData(data);
        li.appendChild(editButton);

        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.onclick = () => deleteData(data.id);
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
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    number: document.getElementById("number").value,
  };
  console.log(newData);

  await axios
    .post("http://localhost:3000/user/add-user", newData)
    .then((res) => {
      displayData();
      // console.log(newData);
      console.log(res.data);
    })
    .catch((err) => {
      console.log(err.data);
    });

  document.getElementById("name").value = "";
  document.getElementById("email").value = "";
  document.getElementById("number").value = "";
};

// function to delete user data
const deleteData = (id) => {
  axios
    .delete(`http://localhost:3000/user/delete-user/${id}`)
    .then((res) => {
      console.log(res.data);
      displayData();
    })
    .catch((err) => {
      console.log(err.data);
    });
  displayData();
};

// function to edit user data
const editData = (data) => {
  document.getElementById("name").value = data.name;
  document.getElementById("email").value = data.email;
  document.getElementById("number").value = data.number;

  deleteData(data.id);
  displayData();
};

// event listener for form submission
document.querySelector(".form").addEventListener("submit", handleSubmit);

// call displayData to show initial data
displayData();
