// Given an integer N, can you fabricate the two numbers NE and NO such that NE is formed by even digits of N and NO is formed by odd digits of N ?
//
//     Return an array (tuple in Python) of two elements such as the first is NE and the second is NO.
//
//     Examples:
// input	NE	NO
// 126453	264	153
// 3012	2	31
// 4628	4628	0


function evenAndOdd(num) {
    let arr = [];
    let NE = ''
    let NO = ''

    let newValue = String(num)

    for (let i = 0; i < newValue.length; i++) {
        Number(newValue[i]) % 2 === 0 ? NE += newValue[i] : NO += newValue[i]
    }

    arr = [Number(NE), Number(NO)]

    return arr;
}
//