import { leerTeclado } from '../view/entradaTeclado'

export const menuPral = async () => {
    let n: number
    console.log('\n')
    console.log('1.- Par o Impar')
    console.log('2.- Comparador de números')
    console.log('3.- MCM')
    console.log('4.- Tiempo de procesos')
    console.log('5.- Primo/No Primo')
    n = parseInt( await leerTeclado('opción: ') )
    return n
}