export const findIntersection = (arr) => {

    let ortaqReqemler = [];

    let sira_2 = arr[1].replace(/\s/g, "").split(',');
    let sira_1 = arr[0].replace(/\s/g, "").split(',');
    
    sira_2.forEach((num) => {

        if(sira_1.includes(num)) {

            ortaqReqemler.push(num);

        }

    });

    if (ortaqReqemler !== 0) {

        return ortaqReqemler.sort((a, b) => a.length - b.length).toString();
    
    }
    else {
        return false;
    }

}