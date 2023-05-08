(function(n,t,a,e,co){var i="aptrinsic";n[i]=n[i]||function(){
      (n[i].q=n[i].q||[]).push(arguments)},n[i].p=e;n[i].c=co;
    var r=t.createElement("script");r.async=!0,r.src=a+"?a="+e;
    var c=t.getElementsByTagName("script")[0];c.parentNode.insertBefore(r,c)
})(window,document,"https://web-sdk.aptrinsic.com/api/aptrinsic.js","AP-AQ9DFAUZEKGT-2");


function allowlogin(usermail)
{
    var a = document.getElementById("usermail").value;
    if (a == 'reshmarenee@gmail.com' || a == 'reshmarenee@gainsight.com' || a == 'demoreshma@gainsight.com')
    { 
        var b= a.substr(0,5);
       
       //passing user and account objects:
aptrinsic("identify",
  {
  //User Fields
    "id": b, // Required for logged in app users
    "email": a,
    "firstName": "John",
    "lastName": "Smith"
  },
  {
  //Account Fields
    "id":"IBM", //Required
    "name":"IBM-India"
 });
 
        
        location.href = "pxwebpage1.html";
    }
    else if(a == '')
    {
        alert('invalid User. Enter demoreshma@gmail.com as username');
    }
}
