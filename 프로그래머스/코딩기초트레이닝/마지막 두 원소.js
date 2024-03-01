function solution(num_list) {
    let last = num_list[num_list.length - 1];
    let lastFront = num_list[num_list.length - 2];
    
    if(last > lastFront) num_list.push(last - lastFront);
    else num_list.push(last * 2);
    
    return num_list;
}