// Nested if else //
let num2 = Math.floor(num /2);
if (num2 > 0){
    console.log("num2 is positive");
    if (num2 % 2 == 0){
        console.log("num2 is even");
    }
}

//  num is +,-,0 using nested if else //
let num = 0;
if (num > 0){
    console.log("num is positive");
    if (num % 2 == 0){
        console.log("num is negative");

    }
    else {
        console.log("num is neutral")
    }
    
}


//  eligible for vote or not using nested if else //
let age =18;
if (age >= 18) {
    console.log("eligible for vote");}
    if (age < 60){
        console.log("eligible for vote in India");}
        else {
            console.log("not eligible for vote in India");
        }
    
      //  max number from 3 user input variables //
      
      let a=10;
      let b=20;
      let c=30;
      if (a >b){
        if (a > c){
            console.log("a is max number");
    }
    else {
        console.log("c is max number");
    }
   
        if (b > c){
            console.log("b is max number");

        }
    }
      else if (b > c){
        console.log("b is max number");
      }
      else {
        console.log("c is max number");
      }

     // fid min number from 4  //  
     // variables using nested if else //
     let x=10;
     let y=20;
     let z=30;
     let w=40;
     if (x < y){
        if (x < z){
            if (x < w){
                console.log("x is min number");

            }
            else {
                console.log("w is min number");
            }

        }
        else if (z < w){
            console.log("z is min number");

        }
        else {
            console.log("w is min number");
        }


     }
     //fid max number from 5      " " " "  using nested if else
     let p=10;
     let q=20;
     let r=30;
     let s=40;
     let t=50;
        if (p > q){
            if (p > r){
                if (p > s){
                    if (p > t){
                        console.log("p is max");
                        
                    }
                }
            }
        }
//  fid max number from 5 using nested if else

p=10;
q=20;
r=30;
s=40;
t=50;
if (p > q){
    if (p > r){
        if (p >s){
            if (p > t){
                console.log("p is max");
            }
        }
    }
    if (q > r){
        if (q > s){
            if (q > t){
                console.log("q is max");
            }
        }
    }
    if (r > s){
        if (r > t){
            console.log("r is max");
        }
    }
    if (s > t){
        console.log("s is max");
    }
    else {
        console.log("t is max");
    }
}
 //  fid min number from 4 using ladder if else.
 let g=10;
 let h=20;
 let i=30;
 let j=40;
 if (g < h && g < i && g < j){
    console.log("g is min");
 }
 else if (h < i && h < j){
    console.log("h ios min");
 }
 else if (i < j){
    console.log("i is min");
 }
 else {
    console.log("j is min");
 }