// console.log("Hello")

let data = [
	{
		district: "Tumkur",
		Departure: "585%",
		Actual: "14.4mm",
		normal: "2.1mm"
	},
	{
		district: "Chitradurga",
		Departure: "291%",
		Actual: "5.1mm",
		normal: "1.3mm"
	},
	{
		district: "Tumkur",
		Departure: "585%",
		Actual: "14.4mm",
		normal: "2.1mm"
	},
	{
		district: "Chikmagalur",
		Departure: "-9%",
		Actual: "18.5mm",
		normal: "20.2mm"
	},
	{
		district: "Kodagu",
		Departure: "2%",
		Actual: "25.3mm",
		normal: "24.9mm"
	},
	{
		district: "Ramnagar",
		Departure: "-13%",
		Actual: "2mm",
		normal: "2.3mm"
	},
	{
		district: "Shimoga",
		Departure: "-54%",
		Actual: "9.1mm",
		normal: "19.7mm"
	},

];


const renderData = document.getElementById('data');
const list = document.getElementById('list');
const spanEle = document.getElementById('getLen');
spanEle.innerText = data.length

const appendFun = (doc) =>{
	let li = document.createElement('li');
	let distName = document.createElement('span');
	let departure = document.createElement('span');
	let Actual = document.createElement('span');
	let Normal = document.createElement('span');

	distName.textContent = "District : " + doc.district;
	Actual.textContent = "Actual : " + doc.Actual;
	Normal.textContent = "Normal : " + doc.normal;
	departure.textContent = "Departure : " + doc.Departure;

	li.appendChild(distName);
	li.appendChild(departure)		
	li.appendChild(Actual);
	li.appendChild(Normal);


	list.appendChild(li);
}

data.forEach((doc) =>{
	appendFun(doc);
})



const name = document.getElementById('name');
const dep = document.getElementById('dep');
const act_val = document.getElementById('actual');
const normal = document.getElementById('normal');
const submit = document.getElementById('submit');



submit.addEventListener('click', () =>{
	let dist = name.value;
	let depart = dep.value;
	let act = act_val.value;
	let norm = normal.value;

	name.value = "";
	dep.value = "";
	actual.value = "";
	normal.value = "";

	let newData = {
		district: dist,
		Departure: depart,
		Actual: act,
		normal: norm
	}

	data.push(newData);
	spanEle.innerText = data.length

	//Adding data
	appendFun(newData);
	// let li = document.createElement('li');
	// let distName = document.createElement('span');
	// let departure = document.createElement('span');
	// let Actual = document.createElement('span');
	// let Normal = document.createElement('span');

	// distName.textContent = "District : " + dist;
	// Actual.textContent = "Actual : " + act;
	// Normal.textContent = "Normal : " + norm;
	// departure.textContent = "Departure : " + depart;

	// li.appendChild(distName);
	// li.appendChild(departure)		
	// li.appendChild(Actual);
	// li.appendChild(Normal);


	// list.appendChild(li);

})
