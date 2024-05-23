export const wovelSquare = (arr) => {

    for(let i=0; i<arr.length-1; i++) {
        
        for(let j=0; j<arr[0].length - 1; j++) {

            if((/[aeiou]/).test(arr[i][j])) {

                if((/[aeiou]/).test(arr[i][j+1])) {

                    if((/[aeiou]/).test(arr[i+1][j])) {

                        if((/[aeiou]/).test(arr[i+1][j+1])) {
                            return i + "-" + j;
                        } 

                    } 

                } 

            }

        }

    }
    return 'Not Found';
    
}