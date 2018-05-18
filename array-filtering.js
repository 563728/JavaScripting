var array=[1,2,3,4,5,6,7,8,9,10];
var filtered=array.filter(even);
function even(array){

    return array%2 == 0;
}
console.log(filtered);