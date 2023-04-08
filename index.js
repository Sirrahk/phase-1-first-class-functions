/*takes a callback function as an argument
call the callback function, doesnt matter what it returns as long as its the call back function
*/

function receivesAFunction(callBackFunction){
  let favAnimalMessage = `I love elephants because they are stunning creatures`
   callBackFunction(favAnimalMessage);


}

/** takes no arguments and returns a named function */
function returnsANamedFunction() {
    let name = "Arya Stark"
    let notSoHotTake  = `${name} was the strongest, toughest, and bravest character, hands down!`

    return function aNamedFunction () {
        console.log(notSoHotTake)
    }
    

}
/** takes no arguments and returns an anonymous function */
const returnsAnAnonymousFunction = (() => {
   const greatShows = ["Game of Thrones","Shameless", "Power Book 2", "Power Book 3"];
   
   return function (){
    const almostForgotOne = greatShows.push("True Blood")
    console.log(almostForgotOne)
   }
  
   

})