export const hammingDistance = (p1, p2) => {
    
    //^ Eyni sirada olan herf veya reqemlerin beraber olub olmadigini gosteren algoritma.
    let hamm = 0;

    for(let i=0; i<p1.length; i++) {

        if(p1[i] != p2[i]) {
            hamm += 1;
        }

    }

    return hamm;

}