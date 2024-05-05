function solution(my_string) {
    const lowerStr = my_string.toLowerCase();
    return lowerStr.split('').sort().join('')
}