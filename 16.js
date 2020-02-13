let arr=[
    {id:1,name:"mahima"},
    {id:2, name:"Santosh"},
    {id:3, name:"Girish"},
    {id:4, name:"Ramesh"},
    {id:5, name:"Divya"},
    {id:6, name:"Daniel"},
    {id:7, name:"Joseph"},

    "ashok",12,15
]


let users= arr.filter(function(item){
    if(item.id>3)
    return item.id;

});

console.log(users);

console.log(typeof users);