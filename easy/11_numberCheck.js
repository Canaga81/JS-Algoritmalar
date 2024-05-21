export const numberCheck = (num1, num2) => {

    if(num1 === num2) {

        return 'Beraberdir';

    }
    else if(num1 > num2) {

        return '1-ci reqem boyukdur.';

    }
    else {

        return '2-ci reqem boyukdur.';

    }
    
}