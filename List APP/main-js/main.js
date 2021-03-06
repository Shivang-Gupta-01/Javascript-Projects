var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter');
// form submit event

form.addEventListener('submit',addItem);
// delete element

itemList.addEventListener('click',removeItem);
// filter event

filter.addEventListener('keyup',filterItems);

function addItem(e)
{
    e.preventDefault();
    // get input value

    var newItem= document.getElementById('item').value;


    // create new li items
    var li = document.createElement('li');

    /// add class
    li.className = 'list-group-item';
    // add text node with input value

    li.appendChild(document.createTextNode(newItem));

    //create a delete button
    var delelteBtn = document.createElement('button');

    // add classes
    delelteBtn.className='btn btn-danger btn-sm float-right delete';
    // append text node
    delelteBtn.appendChild(document.createTextNode('X'));

    li.appendChild(delelteBtn);

     
    itemList.appendChild(li);

}

function removeItem(e)
{
    if(e.target.classList.contains('delete'))
    {
        if(confirm('Are you Sure ?'))
        {
            var li = e.target.parentElement;
            itemList.removeChild(li);
        }
    }
}

function filterItems(e)
{
    // convert text to lowercase
    var text = e.target.value.toLowerCase();
    console.log(text);
   var items = itemList.getElementsByTagName('li');
   // form array

   Array.from(items).forEach(function(item){
     
    var itemName = item.firstChild.textContent;
    //console.log(itemName);
    if(itemName.toLowerCase().indexOf(text)!=-1)
    {
        item.style.display = 'block';
    }
    else
    {
        item.style.display = 'none';
    }
   })
}
