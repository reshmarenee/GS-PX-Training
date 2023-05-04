function allowlogin(usermail)
{
    var a = document.getElementById("usermail").value;
    if (a == 'reshmarenee@gmail.com' || a == 'reshmarenee@gainsight.com' || a == 'demoreshma@gainsight.com')
    { 
        var b= a.substr(0,5);
        location.href = "pxwebpage1.html";
    }
    else if(a == '')
    {
        alert('invalid User. Enter demoreshma@gmail.com as username');
    }
}
