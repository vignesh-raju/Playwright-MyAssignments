let genderType = "Female"
function printGender(){
    let color = "brown"
    if(genderType == "Female"){
        var age = 30
        color = "Pink"
        console.log("the value of age inside if loop",age);
        console.log("the value of color inside the if loop",color);
        
    }
    console.log("the value of age outside the if loop",age);
    console.log("the value of color outside the if loop",color);
}
printGender()