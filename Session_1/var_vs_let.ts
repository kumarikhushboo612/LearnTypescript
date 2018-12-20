/*
    var has function scope
    let has block scope
*/
function  test() {
    //change var to let to see the difference
    for(var i=0;i<5;i++){
        console.log(i);        
    }
    console.log(i);
}
test();