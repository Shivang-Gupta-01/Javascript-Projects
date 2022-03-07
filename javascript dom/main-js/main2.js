// traversing the dom
    
        var itemlist = document.querySelector('#items');

        // parent node
        console.log(itemlist.parentNode);  // to get the parent element
        //itemlist.parentNode.style.backgroundColor = '#f4f4f4';
        console.log(itemlist.parentNode.parentNode);

        // parent element
        console.log(itemlist.parentElement);  // to get the parent element
        itemlist.parentElement.style.backgroundColor = '#f4f4f4';
        console.log(itemlist.parentElement.parentElement);  // both are same but at the document level , the node returns the document node as the parent but the Element doesnt return anything


        // child nodes
        console.log(itemlist.childNodes); //  A node list --- 0 represents the line break; in the text in number 0 position of the output
       
        // children
        console.log(itemlist.children);  // this doesnt take line breaks in consideration but it is an html collection

        console.log(itemlist.children[1]);
        itemlist.children[1].style.backgroundColor = 'yellow';

        // firstchild and lastchild
        console.log(itemlist.firstChild); // this also gives the text as blankspace inclusion -- threrefore useless most of the times
        console.log(itemlist.lastChild);

        // firstelementchild and lastelementchild

        console.log(itemlist.firstElementChild); // this goves the first child without the line breaks
        console.log(itemlist.lastElementChild); // this goves the last child without the line breaks
        itemlist.firstElementChild.textContent= "Hello World";
        itemlist.lastElementChild.textContent= "Hello Again World";

        // next siblings and previous sibling
       
        console.log(itemlist.nextSibling); // again gives the blank space conisderation
        console.log(itemlist.previousSibling);

        // next element sibling and previousElementSibling
        console.log(itemlist.nextElementSibling);  // doesnt consider the blankspace
        console.log(itemlist.previousElementSibling);
        itemlist.previousElementSibling.style.color='green';

         
// creating elements

                var newdiv = document.createElement('div');
                newdiv.className ='hello'; // add class
                newdiv.id = 'hello1'   // add id
                newdiv.setAttribute('title','hello-div'); // add attributes
               // adding a text
               // first create a text-node
                var newdivtext = document.createTextNode('Hello yet Again world');
                // add text to div
                newdiv.appendChild(newdivtext);
                // where to put it

                var container = document.querySelector('header .container');
                var h1 = document.querySelector('header h1');
                console.log(newdiv);
                newdiv.style.fontSize = '30px';
                container.insertBefore(newdiv,h1);

        