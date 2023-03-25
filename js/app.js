


//this uses the elementsbyclassname to insert a bunch of text into the outer HTML of the span inside the main, done by using a for loop//

let hacked = document.getElementsByClassName(`funny_loop`);

for(let counter = 0; counter<hacked.length; counter = counter +1){
hacked[counter][`outerHTML`] = `hackedhackedhackedhackedhackedhackedhackedhackedhackedhackedhackedhackedhackedhackedhackedhacked`;

};

//this uses querySelector to simply target everything with the funny_loop tag and insert some text using insertAdjecentHTML before the begginning. It also changes other things like text size and color//


let hacked_class = document.querySelector(`.funny_loop`);

hacked_class[`style`][`fontSize`] = `3em`;
hacked_class.insertAdjacentHTML(`beforebegin`, `<h1>HACKED</h1>`)
hacked_class[`style`][`color`] = `blue`;


//this simply grabs the image tag that I created by matching the ID and inserts the url into the html//

let insert_image = document.getElementById(`invis_image`);
insert_image.setAttribute(`src`, `https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80`);


//another querySelector that simply inserts text afterbegin and changes some text inside the main span/changes the width of the span//

let insert_after = document.querySelector(`#main_span`);

insert_after.insertAdjacentHTML(`afterbegin`, `<p>hacked</p>`);
insert_after[`style`][`color`] = `#E28413`;
insert_after[`style`][`width`] = `20%`;


//a loop using querySelectorAll that inserts text into the innerhtml of the main span//

let style_text = document.querySelectorAll(`.text`);

for(let counter = 0; counter < style_text.length; counter = counter +1){
    style_text[counter][`innerHTML`] = `hacked`;
    
    };

