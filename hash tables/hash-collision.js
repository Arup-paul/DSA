let user = {
    age:23,
    name:'Arup Paul',
    magic:true,
    scream:function(){
        console.log('ahhh!');
    }
}

console.log(user.age) //O(1)

user.spell = 'hash';
console.log(user) //O(1)

user.scream(); //O(1)
