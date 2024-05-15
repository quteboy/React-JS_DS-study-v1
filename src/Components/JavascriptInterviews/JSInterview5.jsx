// Difference bet var let const 
    /**
     * * var is global scoped variable
     * * let and const and block scoped variables
     * * var can be re-assigned and re-declared
     * * let and const cant be re-assigned
     * * var can be hoisted but its limited to its initilization only not its definition
     */
    if (true){
        var varVariable = 'i am batman'
        var varVariable = 'i am not over in my head'
    }
    console.log(varVariable) // i am batman // i am not over in my head
    // if (true) {
    //     let letVariable = 'i am vengence'
    // }
    // console.log(letVariable) // undefined
    console.log('var2Variable',var2Variable) // hoisted the initilization but not its declaration
    var var2Variable = 'true'
    console.log(letVar2)
    let letVar2 = 'false'

    const nameConst = 'John'
    nameConst = 'Sansa' // re-declare is not allowed
    let nameLet = 'Arya' 
    nameLet = 'Tyrion' // re-declare is allowed in let