let estudiantes = [
    {nombre:"carlos", edad:40},
    {nombre:"pedro", edad:25},
    {nombre:"juan", edad:33},
    {nombre:"julio", edad:48},
    {nombre:"Jose", edad:22}
];
let suma=0;
    for (let estudiante of estudiantes) {
    suma += estudiante.edad;
    }
    console.log(estudiantes.length);
    console.log(suma/estudiantes.length);