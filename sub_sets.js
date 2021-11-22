function sub_set(k, s) {
    let array=[]
    for(var i = 0 ; i<k ; i++){
        array.push(0)
    }
    for (i of s){
        array[i%k]+=1}
    
    let count=Math.min(array[0],1)
    for (var i = 1 ; i<Math.floor(k/2)+1;i++){
        if (i == k-i){
            count+=1
        }else{
            count+=Math.max(array[i],array[k-i])
        }
    }return count   

}
console.log (sub_set(4,[19,10,24,25,22,10,12]))
