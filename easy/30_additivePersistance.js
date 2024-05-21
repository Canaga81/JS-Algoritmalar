export const additivePersistence = (num) => {

    if (num < 10) {
        return 0;
    }

    let sumOfDig = num;
    let steps = 0;

    while (sumOfDig >= 10) {
        sumOfDig = sum(sumOfDig);
        steps++;
    }

    return 'Adim Sayisi: ' + steps + "  <--|----------|-->  "+ 'En son Toplami:' + sumOfDig;

}

const sum = (n) => {

    let toplam = 0;
    const rakamlar = n.toString().split('');

    for (let i = 0; i < rakamlar.length; i++) {
        toplam += parseInt(rakamlar[i]);
    }

    return toplam;

}