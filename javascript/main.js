function validsystem() {
    var erro_icon = document.getElementById('s');
    var inp = document.getElementById('inp');
    var red_p = document.getElementById('notvalid');
    var green_p = document.getElementById('valid');
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    
    if(inp.value.match(regexEmail)){
        inp.value = '';
        green_p.style.display = 'block';
        setTimeout(()=>{
        green_p.style.display = 'none';
        }, 1000)
    }else {
        erro_icon.style.display = 'block';
        red_p.style.display = 'block';
        
        setTimeout(() => {
            erro_icon.style.display = 'none';
            inp.value = '';
            red_p.style.display = 'none';
        }, 1000);
    }
;}