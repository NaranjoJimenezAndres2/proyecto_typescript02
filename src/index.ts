import { menuPral } from './view/menuPral'
import { leerTeclado } from './view/entradaTeclado'

const main = async () => {
    let n: number
    let n1: number, n2: number, n3: number
    let x: Date , y: Date
    do {

        n = await menuPral()
        switch(n){
            case 1:
                    console.log("Estoy en opción 1")
                    n1 =  parseInt( await leerTeclado('Dame un número'))
                    if (n1 % 2 == 0) {
                        console.log (n1 + " es un numero par")
                    } else {
                        console.log (n1 + " no es un numero par")
                    }  
                break

            case 2 :
                console.log("Estoy en opción 2")
                    n1 =  parseInt( await leerTeclado('Primer número')) 
                    n2 =  parseInt( await leerTeclado('Segundo número'))
                    n3 =  parseInt( await leerTeclado('Tercer número'))
                    if (n1 > n2 && n1 > n3){
                        console.log("El primer numero es el mayor")
                    } else if (n2 > n1 && n2 > n3){
                         console.log("El segundo numero es el mayor")
                    }else if (n1 == n2 && n1 == n3){
                            console.log("El segundo numero es el mayor")
                    } else {
                        console.log("El tercer numero es el mayor")
                    }
                break

                case 3:
                    
                    console.log("Estoy en opción 3")
                    n1 =  parseInt( await leerTeclado('Primer número')) 
                    n2 =  parseInt( await leerTeclado('Segundo número'))

                    let max : number = 0
                    let p1 : number, p2: number
                    let num1 : number, num2: number
                    
                    
                    if ( n1 < n2){
                            max = n2
                    
                    } else {
                            max = n1
                    
                    }

                     num1 = max % n1
                         p1 = num1
                     num2 = max % n2
                         p2 = num2

                    while (num1 != 0 || num2 != 0){
                        num1= max % n1
                        num2= max % n2
                        max = max + 1 
                    }
                        let z :number  = max 

                        if (p1 == 0 && p2 ==0){
                            console.log("El minimo comun multiplo es: " + z)
                        }else if (p1 != 0 || p2 != 0){
                            z= z-1
                            console.log("El minimo comun multiplo es: " + z )}
                    break

                case 4:
                    console.log("Estoy en opción 4")
                    n1 =  parseInt( await leerTeclado('año: ')) 
                    n2 =  parseInt( await leerTeclado('mes: '))
                    let N2 = n2-1
                    n3 =  parseInt( await leerTeclado('dia: '))

                    x = new Date()
                    y = new Date(n1,N2,n3)

                    function calcDate(date1: Date, date2: Date){
                        let diff :number = Math.floor(date1.getTime() - date2.getTime());
                        let day :number = 1000 * 60 * 60 * 24;
                    
                        let days :number = Math.floor(diff/day);
                        let months :number = Math.floor(days/31);
                        let years :number = Math.floor(months/12);
                    
                        let message :String = date2.toDateString();
                        message += " hace "
                        message += days + " dias " 
                        message += months + " meses "
                        message += years + " años\n"
                    
                        return message
                        }

                    let diff = calcDate(x,y)
                    console.log( "El proceso empezó " + diff)

            case 5:
                let i : number
                let Z : number
                console.log("Estoy en opción 5")
                n1 =  parseInt( await leerTeclado('Inserte un: '))
                for ( i = 2; i <= (n1-1); i++){
                    Z = n1 % i
                
                if (Z == 0){
                    console.log(n1+ " no es primo")
                    break
                }else{
                    console.log(n1+ " es primo")
                    break 
                    
                }}
                


            break
            case 0:
                console.log('\nSaliendo del Programa...')
                break
            default:
                console.log("Opción incorrecta")
                break
        }
    }while (n != 0)
}
main()