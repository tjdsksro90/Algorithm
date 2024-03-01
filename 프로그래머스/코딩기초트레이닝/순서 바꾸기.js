function solution(num_list, n) {
    let right = num_list.slice(0,n)
    let left = num_list.slice(n,num_list.length)
    return [...left, ...right];
}