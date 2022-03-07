// listen for form submit
document.getElementById('myForm').addEventListener('submit', saveBookmark);

function saveBookmark(e)
{   

    var siteName = document.getElementById('siteName').value;
    var siteUrl = document.getElementById('siteUrl').value;
    
    if(!validateForm(siteName,siteUrl))
    {
        return false;
    }
    var bookmark = {
        name: siteName,
        url : siteUrl
    }
    //console.log(bookmark);


    // Local storage (only stores strings)

    // localStorage.setItem('test','Hello World');
     //console.log(localStorage.getItem('test'));
    // localStorage.remove('test');

    if(localStorage.getItem('bookmarks')===null)
    {  
        // init array if bookmarks is null
        var bookmarks =[];
        // add in array
        bookmarks.push(bookmark);
       // set to local Storage
       localStorage.setItem('bookmarks',JSON.stringify(bookmarks));
    }else
    {
        // fetch from local storage
        var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
        // Add bookmark to array
        bookmarks.push(bookmark);
        // reset back to local storage
        localStorage.setItem('bookmarks',JSON.stringify(bookmarks));
        
    }

    //clear form
    document.getElementById('myForm').reset();
 // refetch bookmarks
 fetchBookmarks();


    //console.log(siteName);
    e.preventDefault();
    //console.log('It-Works');
}

// delete the boookmark

function deleteBookmark(url)
{
   // console.log(url);

   // get the bookmark from local storage
   var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
   // loop through the bookmarks

   for(var i=0;i<bookmarks.length;i++)
   {
       if(bookmarks[i].url==url)
       {
           // remove from array
           bookmarks.splice(i,1);
       }

   }
     localStorage.setItem('bookmarks',JSON.stringify(bookmarks));
     
     // refetch bookmarks
     fetchBookmarks();

}








function fetchBookmarks()
{
    var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
    //console.log(bookmarks);

    // get output id
    var bookmarkResults = document.getElementById('bookmarksResults');
    bookmarkResults.innerHTML = "";

    for(var  i=0;i<bookmarks.length;i++)
    {
        bookmarkResults.innerHTML += `<div class="card bg-light mb-4 ">
        <h5 class="card-header">${bookmarks[i].name}</h5>
        <div class="card-body">
          <a href="${bookmarks[i].url}" target="_blank" class="btn btn-primary">Visit</a>
          <a onclick="deleteBookmark(\'${bookmarks[i].url}\')" href="#" class="btn btn-danger">Delete</a>
          
        </div>
      </div>`
    }

}

function validateForm(siteName,siteUrl)
{
    if(!siteName || !siteUrl)
    {
        alert('Please fill in the form');
        return false;
    }
    var expression = /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi;
    var regex = new RegExp(expression);

    if(!siteUrl.match(regex))
    {
        alert('Please use a valid URL');
        return false;
    }
    return true;


}