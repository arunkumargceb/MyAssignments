let genderType = "female"

function printGender(){
    let color = "brown"
    if(genderType.startsWith("female"))
    {
        var  age = 30
        let color = "pink"
        console.log("inside if block", color)
    }
    console.log("inside function but outside if block", age)
}

printGender()
 console.log("globally:", genderType)