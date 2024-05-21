export const aritGeo = (arr) => {

    let ferq = arr[1] - arr[0];
    let arithmetic = true;

    let nisbet = arr[1] / arr[0];
    let geometric = true;

    for(let i=2; i<arr.length; i++) {

        if(arr[i] - arr[i-1] != ferq) {
            arithmetic = false;
        }

        if(arr[i] / arr[i-1] != nisbet) {
            geometric = false;
        }

    }

    if (arithmetic) {
        return 'Bu Array Aritmetikdir !';
    }
    else if (geometric) {
        return 'Bu Array Geometricdir !';
    }
    else {
        return 'Bu Array ne Aritmetikdir ne de Geometric';
    }

}




































// let ferq = arr[1] - arr[0];
//     let isArithmetric = true;

//     let qismet = arr[1] / arr[0];
//     let isGeometric = true;

//     for(let i=2; i<arr.length; i++) {

//         if(arr[i] - arr[i-1] != ferq) {
//             isArithmetric = false
//         }

//         if(arr[i] / arr[i-1] != qismet) {
//             isGeometric = false
//         }

//     }

//     if(isArithmetric) {
        
//         return "Bu Sayilar Arithmetricdir !"

//     }
//     else if(isGeometric) {

//         return "Bu Sayilar Geometricdir !"

//     }
//     else {

//         return "Bu Sayilar ne Aritmetricdir, ne de Geometricdir !"

//     }