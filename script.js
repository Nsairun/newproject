const namesearch = document.querySelector(".namesearch");
const users1 = document.querySelector(".users1");

function displayUser({ name, age }) {
    return ` <div class="users1">
         <div class="abrevcircle">
         <div class="circle">${abbr(name)}</div>
            <h>${name}</h>
        <p>${age} year${age > 1? "s": ""} old</p>
        <button class="side" style="background: black; color: white">&cross;</button> 
        </div>
        `
}

function abbr (str) {
   return str.split(" ")
    .map((name) => name[0])
    .join(".")
}

function displayUsers(persons) {
    return persons.map(displayUser).join("")
}

 function compareNames (name,searchTerm){
    return name.toLowerCase().includes(searchTerm.toLowerCase());
 }

 function shouldResolve() {
    return Math.random() < 0.85;
 }

 function searchUsers(name, age){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(shouldResolve()) {
                resolve(
                    users.filter(
                        (user) =>
                        (!name || compareNames(user.name, name)) &&
                        (!age || user.age === age)
                    )
                );
            } else {
                reject([]);
            }
        }, 2000);
    });
 }
          

// function searchUsers(name, age) {
//     return users.filter(
//         (user) => (!name || user.name === name) && (!age || user.age === age)  
//     )
    
// }

users1.innerHTML = displayUsers(users)
function renderMessage(message) {
    return `<div class "message"> ${message}</div>`
    
}
namesearch.addEventListener("submit", (e) => {
    e.preventDefault()
    users1.innerHTML = renderMessage("Searching users...")
    searchUsers(e.target.name.value, +e.target.age.value)
    .then((result) => {
        users1.innerHTML = displayUsers((result));
    })
    .catch((e) =>{
        users1.innerHTML = renderMessage(
            "Error loading users! please try again"
        )
    });
    
});
