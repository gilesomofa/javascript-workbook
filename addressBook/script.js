'use strict'
const listing = document.getElementById("listing");
document.getElementById("user").addEventListener("click", getUser);
document.getElementById("listUsers").addEventListener("click", listUsers);
document.getElementById("getMultiUsers").addEventListener("click", getMultiUsers);

var user;
var arrayOfUsers;

const getUser = ()=> {
	fetch = ()=> ('https://randomuser.me/api/')
		.then(res => res.json())
		console.log(res);


}




