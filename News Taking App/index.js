console.log('This is index.js file');

// Intitalise the news parameters

let apiKey ='acf76ad249dbcc9fa59dc67ec6a53ee2';

// Grab the news container
let newsAccordion = document.getElementById('newsAccordion');

// Creating a ajax get request
const xhr = new XMLHttpRequest();

xhr.open('GET',`https://gnews.io/api/v3/search?q=example&token=${apiKey}`,true);

xhr.onload = function () {
    if (this.status === 200) {
       let json = JSON.parse(this.responseText);
       let articles = json.articles;
       console.log(json);

       let newshtml ="";
     
       articles.forEach( (element,index) => {
       // console.log(element,index);
        let news = `
                     <div class="card">
                     <div class="card-header" id="heading${index}">
                     <h2 class="mb-0">
                         <button class="btn btn-link collapsed btn-block text-left" type="button" data-toggle="collapse" data-target="#collapse${index}" aria-expanded="true" aria-controls="collapse${index}">
                         <b>Breaking news ${index+1}</b> ${element["title"]}
                         </button>
                     </h2>
                     </div>

                     <div id="collapse${index}" class="collapse" aria-labelledby="heading${index}" data-parent="#newsAccordion">
                     <div class="card-body">${element["description"]}.<a href="${element["url"]}" target = "_blank" >Read More here</a></div>
                     </div>
                     </div>`;

                     newshtml +=news;
       });
       newsAccordion.innerHTML = newshtml;
    }
    else {
        console.log("Some Error Ocurred");
    }
}
xhr.send();
