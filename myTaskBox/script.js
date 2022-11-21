function log(arg){
    console.log(arg);
};

document.addEventListener('click', function(e){
    log(e.target)
    if(e.target.id == "mtb_submit"){
        log("TEST : Envoyé");
        let inp_title = document.getElementById("inp_title").value;
        log("Test: titre de la tache = " + inp_title);
        let inp_textarea = document.getElementById("inp_textarea").value;
        log("Test: texte du textarea = " + inp_textarea);
        
        document.querySelector('body').innerHTML +=`
        <div class="myTaskBox">
            <article class="mtb_flex">
                <div class="mtb_btn_edit"></div>
                <h2>`+inp_title+`</h2>
            </article>
            <article >
                <p>`+inp_textarea+`</p>
            </article>
        </div>`
    }
    else if(e.target.className == "mtb_btn_edit"){
        // Ouverture des options
        log('TEST : Ouverture des options')
        e.target.style = "transition: 0.5s; margin-bottom: 10px; left: 25px; width: 148px; height: 50px;";
        setTimeout(() => {
            e.target.innerHTML +=`
                <input style="width: 40px; height: 40px; margin-top: 5px; font-size: 26px;" type="button" value="🖍">
                <input style="width: 40px; height: 40px; margin-top: 5px; font-size: 26px;" type="button" value="🗑">
                `
        }, 500)
        e.target.className += " mtb_option";
    }
    else if(e.target.className == "mtb_btn_edit mtb_option"){
        // Fermeture des options
        log('TEST : Fermeture des options')
        e.target.style = "transition: 0.5s; margin-bottom: 0px; left: 175px; width: 10px; height: 10px;";
        e.target.innerHTML = '';
        e.target.className = "mtb_btn_edit";
    };
});





