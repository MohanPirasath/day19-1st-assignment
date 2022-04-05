let Firstname = document.createElement("label");
Firstname.setAttribute("for","first-name")
Firstname.innerHTML="FirstName : ";
let input=document.createElement("input")
input.setAttribute("type","text");
input.setAttribute("id","first-name");
input.setAttribute("placeholder","Firstname")


let lastname=CE("lable","for","last-name","LastName :");
let input1 = IN("input","type","text","id","last-name");
input1.setAttribute("placeholder","Lastname")


let add=document.createElement("label");
add.setAttribute("for","address");
add.innerHTML="Address : ";
let textarea=document.createElement("input");
textarea.setAttribute("type","text");
textarea.setAttribute("id","address");
textarea.setAttribute("placeholder","Address")


let pincode= document.createElement("label");
pincode.setAttribute("for","pincode");
pincode.innerHTML="Pincode :";
let input3= document.createElement("input");
input3.setAttribute("type","number");
input3.setAttribute("id","pincode");
input3.setAttribute("placeholder","pincode")


let gender=document.createElement('label');
gender.setAttribute("for","gender");

gender.innerHTML="Gender :";
let input4=document.createElement("input");
input4.setAttribute("type","radio");
input4.setAttribute("name","radio1");
input4.setAttribute("value","male");
input4.setAttribute("id","gender");
let input5=document.createElement("input");
input5.setAttribute("type","radio");
input5.setAttribute("name","radio1");
input5.setAttribute("value","Fe-male");
input5.setAttribute("id","gender");
let male=document.createElement("label");
male.innerHTML="Male";
let female=document.createElement("label");
female.innerHTML="Fe-male";


let choice = document.createElement("label")
choice.setAttribute("for","choice");
choice.innerHTML="choice of food (must choose atleast 2 out of 5)";
let input6=document.createElement("input");
input6.setAttribute("type","checkbox");
input6.setAttribute("name","checkbox");
input6.setAttribute("class","food");
input6.setAttribute("value","dosa")
let box1 = document.createElement('label');
box1.innerHTML="dosa";
let br=document.createElement("br");
let input7=document.createElement("input");
input7.setAttribute("type","checkbox");
input7.setAttribute("name","checkbox");
input7.setAttribute("class","food");
input7.setAttribute("value","idly");
let box2 = document.createElement('label');
box2.innerHTML="idly";
let br1=document.createElement("br");
let input8=document.createElement("input");
input8.setAttribute("type","checkbox");
input8.setAttribute("name","checkbox");
input8.setAttribute("class","food");
input8.setAttribute("value","pongal");
let box3 = document.createElement('label');
box3.innerHTML="pongal";
let br2=document.createElement("br");
let input9=document.createElement("input");
input9.setAttribute("type","checkbox");
input9.setAttribute("name","checkbox");
input9.setAttribute("class","food");
input9.setAttribute("value","rice");
let box4 = document.createElement('label');
box4.innerHTML="rice";
let br3=document.createElement("br");
let input10=document.createElement("input");
input10.setAttribute("type","checkbox");
input10.setAttribute("name","checkbox");
input10.setAttribute("class","food");
input10.setAttribute("value","friedrice");
let box5 = document.createElement('label');
box5.innerHTML="friedrice";


let br4=document.createElement("br");

let state=document.createElement("label");
state.setAttribute("for","state");
state.innerHTML="State : ";
let input11=document.createElement('input');
input11.setAttribute("type","text");
input11.setAttribute("id","state");
input11.setAttribute("placeholder","state")

let country=document.createElement("label");
country.setAttribute("for","country");
country.innerHTML="country :";
let input12=document.createElement('input');
input12.setAttribute("type","text");
input12.setAttribute("id","country");
input12.setAttribute("placeholder","Country")


let button= document.createElement("button");
button.innerHTML="Submit";
button.setAttribute("id","submit");
let br5=document.createElement("br");
let br6=document.createElement("br");
let br7=document.createElement("br");
let br8=document.createElement("br");
let br9=document.createElement("br");





form.append(Firstname,input,br5,lastname,input1,br6,add,textarea,br7,pincode,input3,br8,gender,male,input4,female,input5,
    choice,input6,box1,br3,input7,box2,br,input8,box3,br1,input9,box4,br2,input10,box5,br4,state,input11,br9,
    country,input12,button
    );

    // let table1=document.createElement("table");
    // table1.setAttribute("class","table table-striped");
// let divcol9 =document.createElement("div");
// divcol9.className="col-lg-9";


// let h22=document.createElement("h2");
// h22.innerText=" Database Table";




//     let table = document.createElement("table");
// table.className="table table-striped";
// table.setAttribute("id","table");




let thead = document.createElement("thead");
let tr1=document.createElement("tr");
let th1 = document.createElement("th");
th1.innerHTML="FirstName";
let th2 = document.createElement("th");
th2.innerHTML="LastName";
let th3 = document.createElement("th");
th3.innerHTML="Address";
let th4 = document.createElement("th");
th4.innerHTML="pincode";
let th5 = document.createElement("th");
th5.innerHTML="Gender";
let th6 = document.createElement("th");
th6.innerHTML="Food";
let th7 = document.createElement("th");
th7.innerHTML="State";
let th8 = document.createElement("th");
th8.innerHTML="country";
let tbody=document.createElement("tbody");
tbody.className="tbody";


table.append(thead,tbody);
thead.append(tr1);
tr1.append(th1,th2,th3,th4,th5,th6,th7,th8);


// divcol9.append(h22,table);



let submit=document.getElementById("submit");
submit.addEventListener("click",(fun)=>{
    fun.preventDefault();
   
    
 let gendermain=(document.getElementsByName("radio1"));
let gendervalue=[];
for(var i=0;i<gendermain.length;i++){
    if(gendermain[i].checked){
        gendervalue.push(gendermain[i].value);
    }
}

let foods=document.getElementsByName("checkbox");
let foodnum=0;
let fooditems=[];
for(var i=0;i<foods.length;i++){
    if(foods[i].checked){
        fooditems.push(foods[i].value);
        foodnum++;

    }

}
if(foodnum>1){
    let res=fooditems.join(",");
}
else{
    res=alert("Choose atleast two items")
}


let mainaddress=document.getElementById("address").value;

let mainfirstname=document.getElementById("first-name").value;

let mainlastname=document.getElementById("last-name").value;

let mainpincode=document.getElementById("pincode").value;

let mainstate=document.getElementById("state").value;

let maincountry=document.getElementById("country").value;


 console.log(fooditems);
console.log(gendervalue);
console.log(mainaddress);
console.log(mainfirstname);
console.log(mainlastname);
console.log(mainpincode);
console.log(maincountry);
console.log(mainstate);

auto(mainfirstname,mainlastname,mainaddress,mainpincode,gendervalue,fooditems,mainstate,maincountry);

})

function CE(name,attname,attvalue,innertext){
   let ref= document.createElement(name);
   ref.setAttribute(attname,attvalue);
   ref.innerHTML=innertext;
   return ref;

}
function IN(name,whattype,typename,idorclass,idname){
    let tem=document.createElement(name);
    tem.setAttribute(whattype,typename);
    tem.setAttribute(idorclass,idname);
    return tem;
}



function auto(mainfirstname,mainlastname,mainaddress,mainpincode,gendervalue,fooditems,state,country){
   let tr = document.createElement("tr");
   let td1 = document.createElement("td")
   let td2 = document.createElement("td")
   let td3 = document.createElement("td")
   let td4 = document.createElement("td")
   let td5 = document.createElement("td")
   let td6 = document.createElement("td")
   let td7 = document.createElement("td")
   let td8 = document.createElement("td")
   td1.innerHTML = mainfirstname;
   td2.innerHTML = mainlastname;
   td3.innerHTML = mainaddress;
   td4.innerHTML = mainpincode;
   td5.innerHTML = gendervalue;
   td6.innerHTML = fooditems;
   td7.innerHTML = state;
   td8.innerHTML = country;
   tr.append(td1,td2,td3,td4,td5,td6,td7,td8)
   tbody.append(tr);
}
