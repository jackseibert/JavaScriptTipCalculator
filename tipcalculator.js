<!DOCTYPE html>
<!--Created By: Jack Seibert-->
<!--Tip Calculator using JavaScript-->
<!--Created Date: 11.14.2018-->

<html>
   <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
   <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
   
   <head>
      <title>Tip Calculator</title>
      
      <style>
         body {
         font-family: Roboto;
         background: #8E0E00;
         /* fallback for old browsers */
         background: -webkit-linear-gradient(to left, #8E0E00, #1F1C18);
         /* Chrome 10-25, Safari 5.1-6 */
         background: linear-gradient(to left, #8E0E00, #1F1C18);
         /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
         }
         
         #container {
         height: 525px;
         width: 360px;
         margin: 100px auto;
         background: #f7f7f7;
         box-shadow: 0 0 3px rgba(0, 0, 0, 0.1);
         border-radius: 20px;
         -webkit-border-radius: 20px;
         -moz-border-radius: 20px;
         }
         
         h1 {
         background: #1F030C;
         color: white;
         margin: 0;
         padding: 10px 100px;
         text-transform: uppercase;
         font-size: 18px;
         font-weight: normal;
         border-top-left-radius: 20px;
         border-top-right-radius: 20px;
         }
         
         h2 {
         background: #1F030C;
         color: white;
         text-align: center;
         text-transform: uppercase;
         font-size: 12px;
         font-weight: normal;
         }
         
         p {
         padding-left: 20px;
         text-align: center;
         }
         
         form input[type="text"] {
         width=90px;
         }
         
         input {
         padding-left: 20px;
         }
         
         #amount {
         font-size: 14px;
         /*color: #2980b9;*/
         color: #red;
         background-color: #f7f7f7;
         width: 60%;
         padding: 5px 5px 8px 8px;
         position: relative;
         display: block;
         margin: 0 auto;
         }
         
         #amount:focus {
         background: #fff;
         border: 3px solid #2980b9;
         outline: none;
         }
         
         #quality {
         padding: 13px 13px 20px 20px;
         margin-left: 20px;
         font-size: 25px;
         text-align: center;
         display: block;
         margin: 0 auto;
         }
         
         button {
         text-transform: uppercase;
         font-weight: bold;
         display: block;
         margin: 30px auto;
         background: #AD133A;
         border-radius: 5px;
         width: 200px;
         height: 50px;
         font-size: 17px;
         color: white;
         }
         
         button:hover {
         background: #4c2827;
         border-bottom-color: #111;
         }
         
         button:active {
         position: relative;
         top: 1px;
         }
         
         #tiptotal {
         font-size: 30px;
         margin-top: 5px;
         text-align: center;
         }
      </style>
      
   </head>
   
   <body>
      <div id="container">
      
         <h1>Tip Calculator</h1>
         <h2>Created By: Jack Seibert</h2>
         
         <div id="calculator">
            <form>
               <p>
                  How much was your bill?
               </p>
               <input id="amount" placeholder="$" type="text">
               
               <p>
                  Select Quality of Service
               </p>
               <select id="quality">
                  <option value="0.3">Exceptional</option>
                  <option value="0.2">Above Average</option>
                  <option value="0.15">Average</option>
                  <option value="0.1">Not Very Good</option>
               </select>
               </br></br>
               
               <button type="button" id="calculate">Calculate Tip</button>
         </div>
         </form>
         </br>
         
         <div id="tiptotal">
            <span id="tip">$0.00</span>
         </div>
      </div>
      
      <script>
         function calculateTip() {
           var amount =
               document.getElementById("amount").value;
           var quality =
               document.getElementById("quality").value;

           var total =
               (amount * quality);

           total = Math.round(total * 100) / 100;
           total = total.toFixed(2);

           document.getElementById("tip").innerHTML = total;

         }

         document.getElementById("calculate").onclick =
           function() {
           calculateTip();
         };

      </script>
   </body>
</html>
