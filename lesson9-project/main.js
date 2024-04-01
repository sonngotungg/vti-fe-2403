// B1: Lấy user list từ API
const USER_LIST_API = "https://jsonplaceholder.typicode.com/users";
const getUserList = async () => {
  const data = await fetch(USER_LIST_API);
  return data.json();
};

// B2: Hiển thị Loading
const generateUserCard = (user, index) => {
  return `
        <div class='user-card'>
            <h2>No.${index}</h2>
            <p> Name: ${user.name}</p>
            <p> Email: ${user.email}</p>
            <p> Phone: ${user.phone}</p>
            <button onclick='handleShowDetail(${JSON.stringify(
              user
            )})'>Show Detail</button>
        </div>
    `;
};

const handleShowDetail = (user) => {
  console.log({ user });
  const modalContainer = document.querySelector(".modal-container");
  const modalContent = document.querySelector(".modal-content");
  modalContent.innerHTML = `
    <p><strong>Name: </strong>${user.name}</p>
    <p><strong>Email: </strong>${user.email}</p>
    <p><strong>Phone: </strong>${user.phone}</p>
    <button>Log user detail</button>
  `;
  modalContainer.style.display = "block";
};

const generateUserCardList = (userList) => {
  return `
        <div class='user-card-list'>
            ${userList
              .map((user, index) => generateUserCard(user, index))
              .join("")}
        </div>
    `;
};

// B3: tạo user card

// B4: tạo modal

// B5: view detail trong modal

// B6: log user detail và đóng modal

const contentDiv = document.querySelector(".content");
console.log([contentDiv]);

contentDiv.innerHTML = "<h1>Loading.....</h1>";
getUserList()
  .then((data) => {
    // hiển thị data trên giao diện
    contentDiv.innerHTML = generateUserCardList(data); // `${JSON.stringify(data)}`;
  })
  .catch((err) => {
    // nếu lỗi, hiển thị 'Lỗi!!!!'
    contentDiv.innerHTML = `<h1>${err}</h1>`;
  });
