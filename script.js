/*CONSTANTES*/
const CALCULAR = document.getElementById('calcular');
const ERROR = document.getElementById('error');
const FLUJO = document.getElementById('flujo');
const MANTENIMIENTO = document.getElementById('mantenimiento');
const BUTTON = document.querySelector('button');

/*FUNCIONES*/

//------------------------------------------------------------------------------------
CALCULAR.addEventListener('click', () => {

    if(document.getElementById('peso').valueAsNumber > 0){
        document.getElementById('error').style.display = "none"; 
        const VALOR_PESO = document.getElementById('peso').valueAsNumber;

        //Validacion para cargar el dato
        if(VALOR_PESO > 0 && VALOR_PESO <= 30){
            ERROR.style.display = 'none';

            let flujo = (calcularFlujo(VALOR_PESO) / 24).toFixed(2);
            let mantenimiento = (flujo * 1.5).toFixed(2);

            FLUJO.innerHTML = "m : " + flujo + ' cc/hr';
            MANTENIMIENTO.innerHTML = 'm + m/2 : ' + mantenimiento + ' cc/hr';
            FLUJO.style.display = 'block';
            MANTENIMIENTO.style.display = 'block';
        }
        
        else if(VALOR_PESO > 30){
            ERROR.style.display = 'none';

            let flujo1 = ((calcularFlujo(VALOR_PESO) *1500) / 24).toFixed(2);
            let flujo2 = ((calcularFlujo(VALOR_PESO) *2000) / 24).toFixed(2);

            let mantenimiento1 = (flujo1 * 1.5).toFixed(2);
            let mantenimiento2 = (flujo2 * 1.5).toFixed(2);

            FLUJO.innerHTML = "m = " + flujo1 + ' cc/hr' + ' o ' + flujo2 + ' cc/hr';
            MANTENIMIENTO.innerHTML = 'm + m/2 = ' + mantenimiento1 + ' cc/hr o ' + mantenimiento2 + ' cc/hr';
            FLUJO.style.display = 'block';
            MANTENIMIENTO.style.display = 'block';
        }

        else{
            ERROR.style.display = 'block';
            FLUJO.style.display = 'none';
            MANTENIMIENTO.style.display = 'none';
        }

    }

    else{
        document.getElementById('error').style.display = 'block'; 
    }
}) 


function calcularFlujo(peso){
    let resto = 0;
    let flujo = 0;

    if(peso <= 10){
        flujo = peso * 100;
        return flujo;
    }

    if(peso > 10 && peso <= 20){
        resto = peso - 10;
        flujo = (10 * 100) + (resto * 50);
        return flujo;
    }

    if(peso > 20 && peso <= 30){
        resto = peso - 20;
        flujo = (10 * 100) + (10 * 50) + (resto * 20);
        return flujo;
    }

    else{
        flujo = (((peso * 4) + 7) / (peso + 90)); 
        return flujo;
    }
}
//------------------------------------------------------------------------------------

BUTTON.addEventListener('mouseenter', () => {
    BUTTON.style.backgroundColor = "#008B8B";
});

BUTTON.addEventListener('mouseleave', () => {
    BUTTON.style.backgroundColor = "#FF416C";
});
