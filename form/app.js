const inputText = document.querySelector('#text');
const enteredText = document.querySelector('#enteredText');
const checkbox = document.querySelector("#agree");
const selection = document.querySelector("#sport");

// inputText.addEventListener('input', function(){
//     enteredText.value = this.value;
// });
const formData = {};
for (let input of [inputText, checkbox, selection]){
    input.addEventListener('input', (e) => {
      formData[e.target.name] = e.target.value;
      if(e.target.type === "checkbox"){
        formData[e.target.name] = e.target.checked;
      }
      if(e.target.type === "text"){
          enteredText.value = e.target.value;
      }  
    });
    
}
