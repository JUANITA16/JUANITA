const data = require("./data-N2kNVMfrTfKu6IK0i2HFX.json");

module.exports ={
 getUsers:() => data,
 getUser:(id)=>{
    let idf = Number(id);
    let user = data.filter((person)=> person.id === idf)(0);
    return user;

 },

 createUser:(dataUser) => {
    let newUser = {
        id: data.length + 1,
        ...dataUser
    }
    data.push(newUser);
    return newUser;
 }

}
   

  