/*function validateEmail()
{
	var email=document.myform.email2.value;
	atops=email.indexOf("@");
	dotops=email.indexOf(".");

	if(atops<1 || (dotops-atops<2))
	{
      alert("Please enter correct E-mail ID");
      document.myform.email2.focus();
      return false;
	}
	return true;
}
*/
function validate()
{
	var ffname = document.form1.fname.value;
    var llname = document.form1.lname.value;
    var pnum  = document.form1.num1.value;
    
    if(ffname==null || ffname=="" )
    {
      alert("First name can't be blank");
      document.form1.fname.focus();
      return false;
      
    }
    if(llname==null||llname="")
    {
    	alert("Last name can't be blank");
    	document.form1.lname.focus();
      return false;
    }
   
   if( pnum.lenght != 10)
   {
   	  alert("Phone Number Must be 10 digits");
      console.log(pnum.lenght);
      document.form1.num1.focus();
      return false;
   }
 return true;
}
/*
if(document.myform.email2.value=="")
      {
        alert("Please provide your E-mail!");
        document.myform.email2.focus();
        return false;
      }
      else
      	validateEmail();*/




//