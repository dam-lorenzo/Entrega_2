let user = prompt('Ingrese su usuario')

let date = parseInt(prompt('Ingrese su año de nacimiento'))

let date2 = parseInt(prompt('Ingrese el año actual'))

if ( (user == 'Ramiro') || (user == 'Emiliano')) {
    alert('Bienenido ' + user)
}
else {
    alert('Usuario ' + user + ' no permitido')
}

if (date2-date < 18) {
    alert('El usuario es menor de edad')
}
else if (date2-date < 0) {
    alert('Año actual ingresado es incorrecto')
}
else {
    alert('El usuario es mayor de edad')
}