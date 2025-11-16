
// var firstName = "mariam"

//var lastName = "hussien"

//var fullName = `${firstName} ${lastName}`
//console.log(fullName)


//var k =45

//var l =20

//var m = 15
//console.log(k==m)


//var score = prompt('Enter Your Score')
//if(score >= 90) {console.log("Excellent")}

//else if (score >= 80)  console.log("very good")
//else if (score >= 70)  console.log("good")
//else if (score >= 60)  console.log("failed")
    //else{ console.log("invalid score")
 


 /* function looping(startNum , endNum , BreakNum , ContNum){
    for(var i=startNum; i<= endNum; i++)
        if(i==ContNum) continue
    else if (i==BreakNum) break

    
}
console.log(looping(1 , 20 , 15 , 4))
 
 */

//////// task s14 //////

var p= prompt ("enter your course") 

var courses=["html", "css", "bootstrap" ,"javascript"]

if(courses.includes(p)){

    console.log("founded")

}
else{
    courses.push(p)
   console.log(courses)
} 
 

////let courses =["html",'css','bootstrap','js','php'] 
//splice(index , deletedCount , item/s)

//courses.splice(1 , 0 , "react" , "Ts") // add item/s
//courses.splice(2 , 2) // remove item/s
///courses.splice(1 , 1 , "Angular") // add - remove item/s
//console.log(courses)

//let ind = courses.indexOf("css")
 //console.log(ind)


/* let ind = courses.indexOf('c++')
  if(ind == -1) {
     courses.push('c++')
     console.log(ind) }
 */


/* let nums= [50,20,70,5,150]
for(let i = 0 ; i < nums.length ; i++ ){
  console.log(nums[i])
    console.log(i) }
 */
////////////// task s15 //////////
  let users=[]
  function addUser(){
    for (let i = 0; i==2 ;i++) {

    let username= prompt('enter your name')
    let id =prompt(' enter your Id')
    let balance =prompt('enter your balance')
    let user={
        username:username,
        id:id,
        balance:balance}

    //console.log(user)
    users.push(user)
   // console.table(users) 
}
  }
  
addUser()
 function editbalance(){
    let id =prompt( 'enter your id to edit balance')
    let user = users.find(u => u.id === i)
    if (user) {
    let newBalance = prompt('enter your new balance')
    user.balance = newBalance;
      
    console.table(users)
}

 }
 editbalance()
 function deleteuser(){
    let id  = prompt('enter your id to delete user')
    let user = users.filter(user => user.id !== id);

 console.log(users)

 }

 deleteuser()