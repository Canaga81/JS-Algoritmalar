export const binaryReversal = (str) => {

    const binary = Number(str).toString(2);
    const zerosBinary = "0".repeat(8-binary.length) + binary;
    const reverseBinary = zerosBinary.split('').reverse().join('');
    const decimalToBinary = parseInt(reverseBinary, 2);

    return decimalToBinary;

}