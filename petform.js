function submitform(form) {
	event.preventDefault();
	var pet = document.forms["form"]["input9-1"].value;
	var fname = document.forms["form"]["input1-1"].value;	
	var lname = document.forms["form"]["input2-1"].value;	
	var email = document.forms["form"]["input7-1"].value;	
	var address = document.forms["form"]["input3-1"].value;	
	var city = document.forms["form"]["input5-1"].value;	
	var pet = document.forms["form"]["input9-1"].value;	
	var alert1 = document.querySelector(".alert1");
	var alert2 = document.querySelector(".alert2");
	var alert3 = document.querySelector(".alert3");
	var alert4 = document.querySelector(".alert4");
	var alert5 = document.querySelector(".alert5");
	var alert6 = document.querySelector(".alert6");
	var alert7 = document.querySelector(".alert7");
	var counter = 0;
	name1 = fname.includes("@")
	name2 = fname.includes("#")
	name3 = fname.includes("$")
	name4 = fname.includes("%")
	name5 = fname.includes("&")
	name6 = fname.includes("*")
	name7 = fname.includes("!")
	if (name1){
		alert1.innerHTML = "Dont use @ and fill again";
		alert1.style.display = 'block';
		window. scrollTo(0, 0);
	}
	if (name2){
		alert1.innerHTML = "Dont use # and fill again";
		alert1.style.display = 'block';
		window. scrollTo(0, 0);
	}
	if (name3){
		alert1.innerHTML = "Dont use $ and fill again";
		alert1.style.display = 'block';
		window. scrollTo(0, 0);
	}
	if (name4){
		alert1.innerHTML = "Dont use % and fill again";
		alert1.style.display = 'block';
		window. scrollTo(0, 0);
	}
	if (name5){
		alert1.innerHTML = "Dont use & and fill again";
		alert1.style.display = 'block';
		window. scrollTo(0, 0);
	}
	if (name6){
		alert1.innerHTML = "Dont use * and fill again";
		alert1.style.display = 'block';
		window. scrollTo(0, 0);
	}
	if (name7){
		alert1.innerHTML = "Dont use ! and fill again";
		alert1.style.display = 'block';
		window. scrollTo(0, 0);
	}
	if (fname == ""){
		/*document.getElementById("input1-1").innerHTML = "&#xf12a;Fill this&#xf12a;";*/
		alert1.style.display = 'block';
		window. scrollTo(0, 0);
		
	}
	else{
		counter+=1;
	}
	if (lname == ""){
		alert2.style.display = 'block';
		window. scrollTo(0, 0);
		
	}
	else{
		counter+=1;
	}
	x = email.includes("@");
	if (x!=true){
		alert5.style.display = 'block';
		window. scrollTo(0, 0);
	}
	if (address == ""){
		alert3.style.display = 'block';
		window. scrollTo(0, 0);
	}
	if (city == ""){
		alert4.style.display = 'block';
		window. scrollTo(0, 0);
	}
	if (pet == ""){
		alert6.style.display = 'block';
		window. scrollTo(0, 0);
	}
	if (pet.toLowerCase()=="dog") {
		window.open('https://leetcode.com/problemset/all/', '_blank');
	}else if(pet.toLowerCase()=="cat"){
		window.open("google.com","_blank");
	}
	if (alert1.style.display == 'block' || alert2.style.display == 'block' || alert3.style.display == 'block' ||alert4.style.display == 'block' || alert5.style.display == 'block' || alert6.style.display == 'block'){
		alert7.style.display = 'block';
		window. scrollTo(0, 0);
	}
}
