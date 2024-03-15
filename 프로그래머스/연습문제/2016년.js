function solution(a, b) {
    //     let answer = '';
    //     let sum = 0;
    //     let date = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    //     let day = ["THU","FRI","SAT","SUN","MON","TUE","WED"];
        
    //     for(var i =0;i<a-1;i++){
    //         sum += date[i];
    //     }
        
    //     sum += b;
    //     answer = (sum % 7);
        
    //     return day[answer];
        
        let day = ['SUN','MON','TUE','WED','THU','FRI','SAT'];
        let date = new Date('2016-' + a + '-' + b);
        return day[date.getDay()];
    }