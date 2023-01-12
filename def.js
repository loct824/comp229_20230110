function add(x,y=3){
    return x+y;
}

function userFriends(user,...friends){
    return user + ' has ' + friends.length + ' friends'; 
}

console.log(add(1));
console.log(add(5,5));
console.log(userFriends('user','Bob','Amy'));