

document.querySelector("#iniciar-juego").addEventListener('click',function iniciarJuego(){
    window.scrollTo(0,1000)
    
    document.querySelector("#centro1").classList.add("dontsee") ;

    document.querySelector("#ContainerPE").classList.add("dontsee") ;

    document.querySelector(".ganar").classList.add("dontsee") ;

    document.querySelector("canvas").focus();

    document.querySelector("#PalabraConGuion").innerHTML="";

    document.querySelector("#PError").innerHTML="";

        // Escoger palabra , Poner Guion y mostarlo

    var palabraSecretra="";
    var  palabraconGuion="";

    palabraSecretra=sortearPalabra(palabras);
    palabraconGuion= ponerGuion(palabraSecretra);

    var elemento=document.querySelector("#PalabraConGuion");
    var pguion=document.createElement('p');

    pguion.textContent=palabraconGuion;

    elemento.appendChild(pguion);
    var palabra_E = [];

    document.querySelector("body").addEventListener('keyup',(event)=>{
        var letra=event.key;
        letra=letra.toLowerCase();
        let fallo=true;

        for (const i in palabraSecretra) {
    
            if (letra == palabraSecretra[i]) {
    
                String.prototype.REMPLAZAR=function (i , letra) {
                    return this.substring(0,i)+letra+this.substring(i+letra.length); 
                    fallo=false;                  
                }
                
                palabraconGuion= palabraconGuion.REMPLAZAR(i*2,letra);
            }
        }
        
        var repetir = palabra_E.indexOf(letra);
        var encontrar = palabraSecretra.includes(letra);

        if (repetir=="-1"&& !encontrar ) {
            palabra_E.push(letra);
        }
        buscarLetra(letra,palabraSecretra,palabraconGuion,fallo,repetir,palabra_E,encontrar);
        });
    })

  
 
    document.querySelector(".volver").addEventListener("click",()=>{
        window.scrollTo(0,0);
        location.reload ();
    
        });
    


function buscarLetra(letra,palabraSecretra,palabraconGuion,fallo,repetir,palabra_E,encontrar) {
    
        var guiones =palabraconGuion.indexOf("_");

        var ganar =document.querySelector(".ganar");
        
        var pERROR =letraEror.indexOf(letra);

        if (guiones<0 && palabraconGuion.indexOf("_")<0){

            document.querySelector("#centro1").classList.add("dontsee");

            ganar.classList.remove("dontsee");

            ganar.classList.add("exito");

            ganar.innerHTML="Felicidades Haz en contrado la palabra " 

            document.querySelector("#centro").classList.add("exito") ;

            document.querySelector(".volver").classList.remove("dontsee") ;

        }
        if (!encontrar && pERROR=="-1" && repetir=="-1") { 
               
                    
                    if (fallo) {
                        if(palabra_E.length==1){
                            firstTry()
                            document.querySelector("#PError").innerHTML=palabra_E;
                        }else{
                            if(palabra_E.length==2){
                                secondTry()
                                document.querySelector("#PError").innerHTML=palabra_E;
                            }else{
                                if(palabra_E.length==3){
                                    thirdTry()
                                    document.querySelector("#PError").innerHTML=palabra_E;
                                }else{
                                    if(palabra_E.length==4){
                                        fourthTry()
                                        document.querySelector("#PError").innerHTML=palabra_E;
                                    }else{
                                        if(palabra_E.length==5){
                                            fifthTry()
                                            document.querySelector("#PError").innerHTML=palabra_E;
                                        }else{
                                            if(palabra_E.length==6){
                                                sixthTry()
                                                document.querySelector("#PError").innerHTML=palabra_E;
                                            }else{
                                                if(palabra_E.length==7){  
                                                    seventhTry()
                                                    document.querySelector("#PError").innerHTML=palabra_E;
                                                }else{
                                                    if(palabra_E.length==8){
                                                        eighthTry()
                                                        document.querySelector("#PError").innerHTML=palabra_E;
                                                    }else{
                                                        if(palabra_E.length==9){
                                                            ninthTry()
                                                            document.querySelector("#PError").innerHTML=palabra_E;
                                                        }else{
                                                            if(palabra_E.length==10){
                                                                tenthTry()
                                                                document.querySelector("#PError").innerHTML=palabra_E;
                                                                document.querySelector("#centro1").classList.add("dontsee") ;
                                                                ganar.classList.remove("dontsee") ;
                                                                document.querySelector(".volver").classList.remove("dontsee") ;
                                                                ganar.innerHTML="Has Perdido:La palabra era  "+palabraSecretra +" intenta de nuevo "; 
                                                                ganar.classList.add("error") ;                                                               
                                                            }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                
                }

                document.querySelector("#ContainerPE").classList.remove("dontsee") ;
    }
    document.querySelector("#PalabraConGuion").innerHTML=palabraconGuion;
  }

  var palabras =["electroencefalograma","iglesia","obispal","electroencefalografia","atrofio","electroencefalografista ","indio","ubicacion","anillo","imaginacion","ornitorinco","Otorrinolaringologo","corporacion","fragmentado","obstaculo","deteriorio","factorial",
    "esternocleidomastoideo"]


    var letraEror=["1","2","3","4","5","6","7","8","9","0",")","(","espace","#","$","%","*","^","control","shift","capslock","`","=",",",".","/","'","[","]","-","tab","f4","f5","f6","f7","f8","f9","f10","f11","f12","printscreen","scrolllock","pause","insert","home","pageup","delete","end","pagedown","numlock","+","arrowup","arrowleft","arrowdown","arrowright","contextmenu","alt","meta",";","escape","enter"]








function sortearPalabra(palabras) {
        var aleatorio =palabras[Math.floor(Math.random()*palabras.length)];

return aleatorio
}
function ponerGuion(palabraS) {
    var cambiar=palabraS.replace(/[abcdefghijklmnopqrstuvxyz]/gi,"_ ");
    return cambiar
}
