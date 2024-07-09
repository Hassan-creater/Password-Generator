let string = document.querySelector("#code");
let button = document.querySelector("#btn");
let para1 = document.querySelector("#first");
let para2 = document.querySelector("#second");
let para3 = document.querySelector("#third");

button.addEventListener("click", function (i) {

   
    
     if(string.value.length == 6   || string.value.length > 6 )
     {
        para1.style.color= `green`;
        
     }
     if(check(string.value.length))
     {
        para2.style.color = "green";
     }
     if(numcheck(string.value.length)){
        para3.style.color = "green";
     }

})

function check (len){
    for (let i = 0; i < len; i++) {
         
        if(string.value[i] == "#")
        {
            return true;
        }
        
    }
}

function numcheck(size){
    for (let i = 0; i < size; i++) {
        for (let j = 1; j <= 9; j++) {
            
            if(string.value[i]==j)
                {
                       return true;
                }
        }
       
        
    }
}
// 