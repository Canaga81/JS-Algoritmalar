export const firstGreatest = (arr) => {

    arr.sort((a, b) => b.length - a.length);

    return arr[2]

}