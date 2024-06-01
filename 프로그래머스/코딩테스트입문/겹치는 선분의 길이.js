function solution(lines) {
  const start = Math.min(...lines.flat())
  const end = Math.max(...lines.flat())
  const lst = [...Array(end-start)].fill(0)    
  
  lines.forEach(el => {
      for(let i=el[0];i<el[1];i++){
          lst[i-start] += 1
      }
  })

  return lst.reduce((acc,cur)=> cur > 1 ? acc + 1 : acc, 0)
}