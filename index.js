const submitData = function (userName, userEmail) {
    
    const formData = {
        name: userName,
        email: userEmail,
    };
    const configurationObject = {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
    },
    body: JSON.stringify(formData),
    };
    debugger;
    
    return fetch ("http://localhost:3000/users", configurationObject)
    .then(function (resp) {
        return resp.json();
    })
    .then(function (data) {
        //const currentUser = data;
        //console.log(data);
        const docBody = document.querySelector("body");
        const idNumber = data.id;
        //console.log(idNumber);
        docBody.append(idNumber);

    })
    .catch(function (object) {
        alert("Danger, Danger");
        const errMessage = object.message;
        console.log(errMessage);
        const docBody = document.querySelector("body");
        docBody.append(errMessage);
    });
}

document.addEventListener('DOMContentLoaded', submitData("Devin", "fakeEmail@gmail.com"));