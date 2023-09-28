

// 1.Write a JavaScript program that accept two integers and display the larger 
   
   // let a = parseInt(prompt("enter The value"))
   // let b = parseInt(prompt("enter The value"))

   //  if (a > b) {
   //    console.log(a + " is Greater Than " + b);
   //  } 
   //  else {
   //    console.log(b + " is Greater Than " + a);
   //  }

  // 2.>JavaScript conditional statement to find the sign of product of three numbers  

           //      var x = 3;
           //      var y = -7;
           //      var z = 2;
          
           // if (x>0 && y>0 && z>0){
           //    console.log("The sign is +");
           //  }

           //  else if (x<0 && y<0 && z<0){
           //    console.log("The sign is -");
           //  }

           //  else if (x>0 && y<0 && z<0){
           //    console.log("The sign is +");
           //  }

           //  else if (x<0 && y>0 && z<0){
           //    console.log("The sign is +");
           //  }

           //  else{
           //    console.log("The sign is -");
           //  }    
 
 // 3.Write a JavaScript program to get the current date.

    // var today = new Date();
    // var date = today.getDate();
    // var month = today.getMonth();
    // var year = today.getFullYear();

    // console.log(date,year,month)

    // if(date<10){
    //     date="0"+date;
    // }

    // else if(month<10){
    //     month="0"+month;
    // }

    // today = date+"-"+month+"-"+year;

    // console.log(today)

  // 4.The area of a triangle

           // var side1 = 5; 
           // var side2 = 6; 
           // var side3 = 7; 
           //     var s = (side1 + side2 + side3)/2;
           //  var area =  Math.sqrt(s*((s-side1)*(s-side2)*(s-side3)));
           //   console.log(area);
   
   // 5. Write a JavaScript program where the program takes a random integer between 1 and 10, and the user is then prompted to input a guess number. The program displays a message "Good Work" if the input matches the guess number otherwise "Not matched". 

          // var rand = Math.floor(Math.random()*10);
          // var a = 8;

          // if(a==rand){
          //   console.log("Good Work")
          // }

          // else{
          //   console.log(rand +" Not Matched")
          // }

   // 6. Create a variable using a user-defined name

         //   var var_name = 'abcd';
         //          var n = 120;
        
         // this[var_name] = n;

         //  console.log(this[var_name])

   // 7.JavaScript program to compute the absolute difference between a specified number and 19.  Returns triple their absolute difference if the specified number is greater than 19.

      // let n = 20;
      // let output= check(n);

      // function check(n){
      //   if(n<=19){
      //      return (19 - n)
      //   }

      //   else{
      //       return (n - 19)* 3
      //   }
      // }

      // console.log(output)

   // 8. Write a JavaScript program to check a pair of numbers and return true if one of the numbers is 50 or if their sum is 50.

     // let a = 30;
     // let b = 50;
     // let output= check(a,b);

     // function check(a,b){
     //    if((a==50)||(b==50)||(a+b==50)){
     //        console.log(true)
     //    }

     //    else{
     //        console.log(false)
     //    }
     // }

    // 9.JavaScript program to check whether a given integer is within 20 of 100 or 400.

     // let a = 90;
     // if(((100-a)<+20)||((400-a)<=20)){
     //    console.log(a+" is Less Than or Equal to 20")
     // }

     // else{
     //    console.log("Wrong")
     // }

    // 10.Write a JavaScript program to create another string by adding "Py" in front of a given string. If the given string begins with "Py" return the original string.  

      // let string = "Python";
      // let output = check(string)

      // function check(string){
      //   if(string.substring(0,2)=="Py"){
      //       return string
      //   }

      //   else{
      //      return "Py"+string
      //   }
      // }

      // console.log(output)

    // 11. Write a JavaScript program to remove a character at the specified position in a given string and return the modified string. 

   // let string = "HelloWorld";
   // let position = 7;
   // let output = check(string,position)

   // function check(a,b){
   //   let modifiedStr = "";
   //  for(i=0;i<a.length;i++){
   //      if(i!==position){
   //        modifiedStr+=string[i]
         
   //      }
   //  }

   //  return modifiedStr
   // }

   // console.log(output)