// // 1. Write a program that takes two user inputs for first and last name using prompt and merge them in a new variable titled fullName. Greet the user using his full name.

// var first_name=prompt("Enter 1st Name :");
// var last_name=prompt("Enter Last Name :");
// var fullName=first_name+" "+last_name;
// alert("Your full name is "+fullName);

// // 2. Write a program to take a user input about his favorite mobile phone model. Find and display the length of user input in your browser

// var mobile=prompt("Enter your favorite mobile phone model");
// var length=mobile.length;
// document.write("My favorite phone is: "+mobile+"Length of string: "+length)

// // 3. Write a program to find the index of letter “n” in the word “Pakistani” and display the result in your browser .

// var string=("Pakistani");
// var index=string.indexOf("n");
// document.write("String: "+string+"<br/>");
// document.write("Index of 'n': "+index);

// // 4. Write a program to find the last index of letter “l” in the word “Hello World” and display the result in your browser .

// var string = ("Hello word");
// var x="l"
// var index = -1;
// for (let i = 0; i < string.length; i++) {
//     if (string[i] == x){
//         index = i;
//     }
// }    
// document.write("String: "+string+"<br/>");
// document.write("Last index of 'l' :"+index);


// // 5. Write a program to find the character at 3 rd index in the
// // word “Pakistani” and display the result in your browser .

// var string=("Pakistani");
// var character=string[3];
// document.write("String: "+string+"<br/>");
// document.write("Character of Index 3: "+character);

// // 6. Repeat Q1 using string concat() method.

// var first_name=prompt("Enter 1st Name :");
// var last_name=prompt("Enter Last Name :");
// var fullName=first_name.concat (last_name);
// alert("Your full name is "+fullName);


// // 7. Write a program to replace the “Hyder” to “Islam” in the word “Hyderabad” and display the result in your browser.

// var city=("Hyderabad");
// var rec=city.replace("Hyderabad","Islamabad");
// document.write("City: "+city+"<br/>");
// document.write("After replacement: "+rec);

// // 8. Write a program to replace all occurrences of “and” in the string with “&” and display the result in your browser. var message = “Ali and Sami are best friends. They play cricket and football together.”;

// var message = ("Ali and Sami are best friends. They play cricket and football together.");
// for (let i = 0; i < message.length; i++) 
// {
//     if (message.slice(i,i+3) == "and") 
//     {
//         message= message.slice(0,i)+"&"+message.slice(i+3);
//     }
// }
// document.write(message);

// // 9. Write a program that converts a string “472” to a number 472. Display the values & types in your browser.

// var Value=("472");
// var Type=typeof(Value);
// document.write(Type);
// var integer =parseInt(Value);
// Type=typeof(integer);
// document.write(Type);

// // 10. Write a program that takes user input. Convert and show the input in capital letters.

// var str = prompt("Enter capital letters");
// var res = str.toUpperCase();
// document.write(res);

// // 11. Write a program that takes user input. Convert and show the input in title case.

// var str = prompt("Enter capital letters");
// var res = str.toLowerCase();
// document.write(res);


// // 12. Write a program that converts the variable num to string.
// // var num = 35.36 ; Remove the dot to display “3536” display in your browser.

// var num=prompt("Enter a Number")
// document.write("Number: "+num+"</br>");
// var string =num.toString();
// document.write("Result in srting: "+string);

// // 13. Write a program to take user input and store username
// // in a variable. If the username contains any special symbol
// // among [@ . , !], prompt the user to enter a valid username.
// // For character codes of [@ .
// // Note:
// // ASCII code of ! is 33
// // ASCII code of , is 44
// // ASCII code of . is 46
// // ASCII code of @ is 64

// var userName=prompt("Enter your Input: ");
//     var message;
//     var split=[];
//     var arr=[];
//     for(var i=0;i<userName.length;i++)
//     {
//         split[i]=userName.split("&nbsp;");
//         arr[i]=userName.charCodeAt(i);
//         if(arr[i]!=33||arr[i]!=44||arr[i]!=46||arr[i]!=64)
//         {
//                 message="Correct User Name";
//         }
//         while(arr[i]==33||arr[i]==44||arr[i]==46||arr[i]==64)
//         {

//             if(arr[i]!=33||arr[i]!=44||arr[i]!=46||arr[i]!=64)
//             {
//                 message="correct in";
//                 break;
//             }
//         }

//     }
//     alert(message);


// // 14. You have an array
// // A = [cake”, “apple pie”, “cookie”, “chips”, “patties”]
// // Write a program to enable “search by user input” in an array. After searching, prompt the user whether the given item is found in the list or not.
// // Note: Perform case insensitive search. Whether the user enters cookie, Cookie, COOKIE or coOkIE, program should inform about its availability. Example:

// var bakery=prompt("Welcome to M-Z Bakery. What do you want to order sir/mam?");
// bakery = bakery.toLowerCase();
// arr = ["cake","apple pie","cookie","chips","patties"];
// for (let i = 0; i < arr.length; i++) {
//        if (bakery==arr[i]) {
//         document.write(arr[i]+" is available at index "+i+" in our bakery");
//         break;
//     } else {
//         document.write("We are sorry. "+arr[i]+" is not available our bakery");
//         break;
//     }
// }

// // 15. Write a program to take password as an input from user. The password must qualify these requirements:
// // a. It should contain alphabets and numbers
// // b. It should not start with a number
// // c. It must at least 6 characters long
// // If the password does not meet above requirements, prompt the user to enter a valid password. For character codes of a-z, A-Z & 0-9, refer to ASCII table at the end of this document.

// var password=prompt("Enter password");
// document.write("Entered Password = "+password+"</br>");
// if (password!=String && password!=Number) {
// } else {
//     document.write("Please enter a valid password");
// }


// // 16. Write a program to convert the following string to an array using string split method.
// // var university = “University of Karachi”;
// // Display the elements of array in your browser.

// var university = "University of Karachi";
// for (let i = 0; i < university.length; i++) {
// document.write(university[i]+"</br>");    
// }

// // 17. Write a program to display the last character of a user input.

// var character = prompt("Enter a character");
// for (let i = character.length-1; i >character.length-2 ; i--) {
//     document.write("Last vharacter of input: "+character[i]);    
// }


// // 18. You have a string “The quick brown fox jumps over the lazy dog”. Write a program to count number of occurrences of word “the” in given string.

// var str = ("The quick brown fox jumps over the lazy dog")
// var count = 0;
// for (let index = 0; index < str.length; index++) {
//     if (str[index] = "the") {
//         count = count + 1;
//     }
// }
// document.write("Text: " + str + "</br>" + "There are " + count + " occurrence(s) of word'the'" +)















// // // ***********Math METHODS***********
// // // **************LAB 2***********


// // 1. Write a program that takes a positive integer from user & display the following in your browser.
// // a. number
// // b. round off value of the number
// // c. floor value of the number
// // d. ceil value of the number

// var number = 3.45214;
// document.write("number: "+number + "</br>");
// var round=Math.round(number)
// document.write("round of value: "+round + "</br>");
// var floor=Math.floor(number)
// document.write("floor value: "+floor + "</br>");
// var ceil=Math.ceil(number)
// document.write("ceil value: "+ceil + "</br>");


// // 2. Write a program that takes a negative floating point
// // number from user & display the following in your browser.
// // a. number
// // b. round off value of the number
// // c. floor value of the number
// // d. ceil value of the number

// var number = prompt("Enter a negative floating point number");
// document.write("number: "+number + "</br>");
// var round=Math.round(number)
// document.write("round of value: "+round + "</br>");
// var floor=Math.floor(number)
// document.write("floor value: "+floor + "</br>");
// var ceil=Math.ceil(number)
// document.write("ceil value: "+ceil + "</br>");


// // 3. Write a program that displays the absolute value of a
// // number.
// // E.g. absolute value of -4 is 4 & absolute value of 5 is 5

// var number = prompt("Enter a negative floating point number");
// var absolute=Math.abs(number)
// document.write("absolute value of: "+absolute + " is "+absolute+"</br>");


// // 4. Write a program that simulates a dice using random() method of JS Math class. Display the value of dice in your browser.:

// var random=Math.floor( Math.random()*10)+1;
// document.write("random dice value: "+random+"</br>");


// // 5. Write a program that simulates a coin toss using random()// method of JS Math class. Display the value of coin in your// browser

// if (Math.random()<0.5) {
//     document.write("random coin value: Heads")
// } else {
//     document.write("random coin value: Tails")
// }

// // 6. Write a program that shows a random number between 1 and 100 in your browser.

// var random=Math.floor( Math.random()*100)+1;
// document.write("random dice value: "+random+"</br>");


// // 7. Write a program that asks the user about his weight. Parse the user input and display his weight in your browser. Possible user inputs can be:
// // a. 50
// // b. 50kgs
// // c. 50.2kgs
// // d. 50.2kilograms

// var weight=prompt("Enter your weight in Kilograms")
// weight=parseInt(weight)
// document.write("The weight of user is "+weight+" Kilograms")

// // 8. Write a program that stores a random secret number from 1 to 10 in a variable. Ask the user to input a number between 1 and 10. If the user input equals the secret number, congratulate the user.
 

// var random=Math.floor( Math.random()*10)+1;
// document.write("random dice value: "+random+"</br>");
// var secret = prompt("Enter a number between 1 and 10")
// if (random==secret) {
//     document.write("congratulate the user")
// } else {
//     document.write("try again")
// }
















// // // ***********DATE METHODS***********
// // // **************LAB 3***********


// // 1. Write a program that displays current date and time in your browser.

// var d = new Date();
// document.write(d)



// // 2. Write a program that alerts the current month in words.
// // For example December.

// var months=["january","february","march","april","may","june","july","august","september","october","november","december"];
// var x=new Date();
// indexOfMonth=x.getMonth();
// current_month=months[indexOfMonth];
// alert(current_month);

// // 3. Write a program that alerts the first 3 letters of the current day, for example if today is Sunday then alert will show Sun.

// var x=new Date();
// var y=x.toString();
// var day=y.slice(0,3);
// document.write("today is :"+day);

// // 4. Write a program that displays a message “It’s Fun day” if its Saturday or Sunday today.

// var months=["sun","mon","tue","wed","thu","fri","sat"];
// var x=new Date();
// indexOfDay=x.getDay();
// current_day=months[indexOfDay];
// alert("today is : "+current_day);
// switch(current_day)
// {
//     case months[0]:
//         {
//             alert("its fun day");
//         }
//         break;
//     case months[6]:
//         {
//             alert("its fun day");
//         }
//         break;
// }


// // 5. Write a program that shows the message “First fifteen days of the month” if the date is less than 16 th of the month else shows “Last days of the month”.

// var x=new Date();
// Date=x.getDate();
// alert("date of today is : "+Date);
// if(Date<16)
// {
//     alert("first fifteen days of the month");
// }
// else
// {
//     alert("last days of month");
// }


// // 6. Write a program that determines the minutes since midnight, Jan. 1, 1970 and assigns it to a variable that hasn't been declared beforehand. Use any variable you like to represent the Date object.

// var current_date=new Date();
// document.write("current date :"+current_date+"</br>");
// var miliseconds=current_date.getTime();
// document.write("elapsed miliseconds since january 1,1970:  "+miliseconds+"</br>");
// var minutes=miliseconds/1000*60;
// document.write("elapsed minutes since january 1,1970 : "+minutes+"</br>");


// // 7. Write a program that tests whether it's before noon and alert “Its AM” else “its PM”.

// var x=new Date();
// var y=x.toString();
// console.log(y);
// var time=y.slice(15,24);
// console.log(time);
// if(x < 12)
// {
//     console.log("its am!") 
// }
// else 
// {
//     console.log("ITS pm!")
// }


// // 8. Write a program that creates a Date object for the last day of the last month of 2020 and assigns it to variable named laterDate.

// var date=new Date("Dec,31 2020");
// alert(date);



// // 9. Create a date object of the starting date of this Ramadan and alert the number of days past since 1 st Ramadan? Note: 1 st Ramadan was on June 18, 2015

// var date=new Date("june,18 2015");
// var miliseconds=date.getTime();
// var nowDate=new Date();
// var nowMiliSeconds=nowDate.getTime();
// total_miliseconds= nowMiliSeconds-miliseconds;
//  var days=total_miliseconds/(1000*60*60*24);
//  document.write("<b>"+Math.floor(days)+"</b>"+" days have been passed since 1st ramadan,2015");



// // 10. Write a program that displays in your browser the seconds that elapsed between the reference date and the beginning of 2015.

// var refdate=new Date("Dec,05 2015");
// document.write(refdate+"</br>");
// var miliseconds=refdate.getTime();
// var seconds=miliseconds/1000;
// var date=new Date("jan,01 2015");
// var datemiliseconds=date.getTime();
// var dateseconds=datemiliseconds/1000;
// var seconds_left=seconds-dateseconds;
// document.write(seconds_left+" seconds left since the begining of 2015");


// // 11. Create a Date object for the current date and time. Extract the hours, reset the date object an hour ahead and finally display the date object in your browser.

// var day=new Date();
// document.write(day+"</br>");
// var hour=day.getHours();
// var aheadhours=hour-1;
// var newdate=day.setHours(aheadhours+"</br>");
// document.write("1 hour ago, it was "+newdate);



// // 12. Write a program that creates a date object and show the
// // date in an alert box that is reset to 100 years back?

// var date=new Date();
//  document.write(date+"</br>");
//  var years=date.getFullYear();
//  var aheadyear=years-100;
//  var newdate=date.setFullYear(aheadyear+"</br>");
//  document.write("100 years ago, it was "+newdate);

















// // // ***********FUNCTION***********
// // // **************LAB 4***********


// // 1. Write a function that displays current date & time in your browser.

// var d = new Date();
// document.write(d)


// // 2. Write a function that takes first & last name and then it greets the user using his full name.

// function greets(){
//     var fsname=prompt("Enter 1st name");
//     fsname = fsname.toUpperCase();
//     var lsname=prompt("Enter last name ");
//     lsname = lsname.toUpperCase();
//     alert("WELCOME "+" "+fsname+" "+lsname);
// }
// greets();

// // 3. Write a function that adds two numbers (input by user) and returns the sum of two numbers.

// function sum(){ 
// var num1=prompt("Enter 1st Number");
// num1=parseInt(num1);
// var num2=prompt("Enter 2nd Number");
// num2=parseInt(num2)
// sum= num1+num2;
// return sum;
// }
// document.write("sum of the Number is: "+ sum())



// // 4. Calculator:Write a function that takes three arguments num1, num2 & operator & compute the desired operation. Return and show the desired result in your browser.

//  function sum()
//  { 
//     var num1=prompt("Enter 1st Number");
//     num1=parseInt(num1);
//     var num2=prompt("Enter 2nd Number");
//     num2=parseInt(num2)
//     var operator=prompt("Enter a operator ")
//     var  calculate;
//     if (operator=="+")
//     {
//         calculate= num1+num2;
//     } else if(operator=="-")
//     {
//         calculate= num1-num2;
//     }else if(operator=="/")
//     {
//         calculate= num1/num2;
//     }else if(operator=="*")
//     {
//         calculate= num1*num2;
//     }
//     return calculate;
// }
//     document.write("Answer the Number is: "+ sum())
    


// // 5. Write a function that squares its argument.



// // 6. Write a function that computes factorial of a number.



// // 7. Write a function that take start and end number as inputs & display counting in your browser.



// // 8. Write a nested function that computes hypotenuse of a
// // right angle triangle.
// // Hypotenuse 2 = Base 2 + Perpendicular 2
// // Page 1 of 4function | JAVASCRIPT
// // Take base and perpendicular as inputs.
// // Outer function : calculateHypotenuse()
// // Inner function: calculateSquare()
// // 9. Write a function that calculates the area of a rectangle.
// // A = width * height
// // Pass width and height in following manner:
// // i. Arguments as value
// // ii. Arguments as variables
// // 10. Write a JavaScript function that checks whether a passed
// // string is palindrome or not?
// // A palindrome is word, phrase, or sequence that reads the same backward as
// // forward, e.g., madam.
// // 11. Write a JavaScript function that accepts a string as a
// // parameter and converts the first letter of each word of the
// // string in upper case.
// // EXAMPLE STRING : 'the quick brown fox'
// // EXPECTED OUTPUT : 'The Quick Brown Fox'
// // 12. Write a JavaScript function that accepts a string as a
// // parameter and find the longest word within the string.
// // EXAMPLE STRING : 'Web Development Tutorial'
// // EXPECTED OUTPUT : 'Development'
// // 13. Write a JavaScript function that accepts two arguments, a
// // string and a letter and the function will count the number of
// // Page 2 of 4function | JAVASCRIPT
// // occurrences of the specified letter within the string.
// // Sample arguments : 'JSResourceS.com', 'o'
// // 14. The Geometrizer
// // Create 2 functions that calculate properties of a circle, using
// // the definitions here.
// // Create a function called calcCircumference:
// // •
// // •
// // Pass the radius to the function.
// // Calculate the circumference based on the radius, and output
// // "The circumference is NN".
// // Create a function called calcArea:
// // •
// // •
// // Pass the radius to the function.
// // Calculate the area based on the radius, and output "The area
// // is NN".
// // Circumference of circle = 2πr
// // Area of circle πr 2


