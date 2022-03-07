const TypewWritter  = function(txtElement,words,wait = 3000)
{
      this.txtElement = txtElement;
      this.words = words;
      this.txt = '';
      this.wordIndex = 0;
      this.wait = parseInt(wait,8);
      this.type();
      this.isDeleting = false;
}

// Type Method
TypewWritter.prototype.type = function()
{ 
    //console.log("Hello");

    // Current index of word

    const current = this.wordIndex % this.words.length;
    //console.log(current);

    // get the full text of current word
   const fullTxt = this.words[current];
    
    //console.log(fullTxt);

    //check if deleting

    if(this.isDeleting)
    {
        //Remove a character
        this.txt = fullTxt.substring(0,this.txt.length-1);

    }else{
        // Add a character
        this.txt = fullTxt.substring(0,this.txt.length+1);
    }

    // Insert Txt into element

    this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;

    // Initial Type Speed
    let typseSpeed = 300;

    if(this.isDeleting)
    {
        typseSpeed /= 2;

    }

    // if word is comeplte
  if(!this.isDeleting && this.txt === fullTxt)
  {   
      // make a pause at the end
      typseSpeed = this.wait;

      // set isdeleting to true
      this.isDeleting = true;
  }else if( this.isDeleting && this.txt === '')
  {
     this.isDeleting = false;

     // Move to the next word
     this.wordIndex++;
     // pause before start typing

     typseSpeed = 500;
  }
    setTimeout(()=> this.type(),typseSpeed)
}




// Init on DOM Load
document.addEventListener('DOMContentLoaded',init);

//Init App

function init()
{
    const txtElement = document.querySelector('.txt-type');
    const words = JSON.parse(txtElement.getAttribute('data-words'));
    const wait = txtElement.getAttribute('data-wait');;

    // Init Typewritter
    new TypewWritter(txtElement,words,wait);


}
