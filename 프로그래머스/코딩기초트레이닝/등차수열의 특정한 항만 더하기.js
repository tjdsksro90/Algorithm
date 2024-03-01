function solution(a, d, included) {
    var answer = 0;
    var num = a;
    var list = [];
    
    list.push(num);
    
    for( var i=0; i<included.length - 1; i++ ) {
        num += d
        list.push(num);
    }
    
    for( var j=0; j<included.length; j++) if(included[j]) answer += list[j];
    
    return answer;
}