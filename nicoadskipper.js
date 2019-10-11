// JavaScript source code
adSkip = setInterval(skip, 100);

function skip() {
    const elem1 = document.getElementsByTagName('video');
        if (elem1[1] == null){
        } else if(elem1[1].src !=""){
            elem1[1].src="";
            clearInterval(adSkip);
        }
}