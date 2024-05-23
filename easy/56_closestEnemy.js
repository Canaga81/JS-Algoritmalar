export const closestEnemy = (arr) => {

    const index_num_1 = arr.indexOf(1);
    
    const index_num_2_base = [];
    const difference = [];

    for(let i=0; i<arr.length; i++) {
        
        if(arr[i] === 2) index_num_2_base.push(i);
        
    }

    if(index_num_2_base.length === 0) return 0;

    index_num_2_base.forEach((item) => {
        
        difference.push(Math.abs(item - index_num_1));
        
    });

    return Math.min(...difference);

}