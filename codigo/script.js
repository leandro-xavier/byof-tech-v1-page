var OSName="Desconocido";
if (navigator.appVersion.indexOf("Win")!=-1) OSName="Windows";
if (navigator.appVersion.indexOf("Mac")!=-1) OSName="MacOS";
if (navigator.appVersion.indexOf("X11")!=-1) OSName="UNIX";
if (navigator.appVersion.indexOf("Linux")!=-1) OSName="Linux";
if (navigator.appVersion.indexOf("Android")!=-1) OSName="Android";

if (OSName == "Android"){
    document.getElementById('apps').style.display = 'block';
}

else{
    document.getElementById('apps').style.display = 'none';
}