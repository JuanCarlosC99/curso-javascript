const notes = [
    {
        course: "Educación Física",
        note: 10,
        credit: 2,
    },
    {
        course: "Programación",
        note: 8,
        credit: 5,
    },
    {
        course: "Finanzas personales",
        note: 7,
        credit: 5,
    },
];
//map crea una nueva matriz llamando a una función para cada elemento de la matriz.
//multiplica notas por creditos
const notesWithCredit = notes.map(function (noteObject) {
    return noteObject.note * noteObject.credit;
});

//Sumar todos los elementos del arreglo
const sumOfNotesWithCredit = notesWithCredit.reduce(
    function (sum = 0, newVal) {
        return sum + newVal;
    }
);
//extrae un arreglo de los creditos
const credits = notes.map(function (noteObject) {
    return noteObject.credit;
});
//suma los creditos
const sumOfCredits = credits.reduce(
    function (sum = 0, newVal) {
        return sum + newVal;
    }
);
const weightedAverageNotesWithCredit = sumOfNotesWithCredit / sumOfCredits;