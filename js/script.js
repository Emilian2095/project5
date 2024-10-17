const input = document.getElementById("input");
const checkBtn = document.getElementById("check-btn");
const clearBtn = document.getElementById("clear-btn");
const results = document.getElementById("results-div");

checkBtn.addEventListener("click", ()=>{
    const regex = /^(1\s?)?(\(\d{3}\)|\d{3})([\s-]?)\d{3}([\s-]?)\d{4}$/

  if(!input.value){
 results.innerText = "Please provide a phone number"
 alert("Please provide a phone number");

  }else if(regex.test(input.value)){
    results.innerText = `Valid US number: ${input.value}`;
  }else {
    results.innerText = `Invalid US number: ${input.value}`;
  }
});

clearBtn.addEventListener("click", () =>{
results.innerText = "";
input.value = ""
} )


