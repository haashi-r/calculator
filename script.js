function buttonclick(type){
    document.getElementById("screen").value+=type
}
function clears(){
    document.getElementById("screen").value=""
}
function equalclick(){
    var tex=document.getElementById("screen").value  // aadyam aa text the illa values inagt kondan'var pinne tex parnja variable
    var result= eval(tex)
    document.getElementById("screen").value=result
   
}