let apiUrl = "https://api.airtable.com/v0/appASGTpH03mZqCL4/Sheet1?api_key=keygMwV8LzfK46eyM";

//variable that stories all the data from the API

let apiData;

//this is where you 'call' your data

//async means asynchronous, the function will always be executed separately, 
//regardless of where it is placed in executable code
//the getData function gets ALL the data from the Airtable API
async function getData(url){
	let response = await fetch(url);
	let jsonData = await response.json();
	return jsonData;
}

//the await in this main function is paired with the async of the getData function
//but await can only exist in async functions
async function main(){
	apiData = await getData(apiUrl);

	console.log(apiData);
	// let counter = 0;

	// for (let i = 0; i < apiData.records.length; i++){
	// 	let name = apiData.records[i].fields.bookName;

	// 	all[allCounter] = apiData.records[i];
	// 	allCounter++;
	// }

	// for (let i = 0; i < apiData2.records.length; i++){
	// 	let name = apiData2.records[i].fields.bookName;

	// 	all[allCounter] = apiData2.records[i];
	// 	allCounter++;
	// }

	// for (let i = 0; i < apiData3.records.length; i++){
	// 	let name = apiData3.records[i].fields.bookName;
        
  //       all[allCounter] = apiData3.records[i];
	// 	allCounter++;
	// }

	// for (let i = 0; i < apiData4.records.length; i++){
	// 	let name = apiData4.records[i].fields.bookName;
       
  //     	all[allCounter] = apiData4.records[i];
	// 	allCounter++;
	// }

	// // console.log(all);

	// display();

	// let hide = document.getElementsByClassName("book")[0];
	// hide.classList.add("hide");
	
}