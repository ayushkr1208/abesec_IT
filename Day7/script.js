// let num=[1,2,3,4,5,45];
// let newnum=num.map(x=>x*2);nod
// console.log(newnum);


// let evennum=num.filter(x=>x%2==0);
// console.log(evennum);
// let sum=num.reduce((x,y)=>x*y,1);
// console.log(sum);
const students=[
    {  name:"ALice",score:50},
    {  name:"Bob",score:65},
    {  name:"Charlie",score:80},
    {  name:"David",score:45},
    {  name:"Rahul",score:50},
    ];
    // let scores=students.map(x=>x.score);
    // console.log(scores);
    let scores=students.filter((x)=>x.score>60).map((x)=>x.score+10).reduce((x,y)=>x+y,0);
    console.log(scores);
    let num=[12,3,2,34,3,56];
    num.forEach((x)=>console.log(x*3));
    sayHello=()=>{
        console.log("I am in Hello function.");
    
    }
    
        console.log("Start");
        setTimeout(sayHello,300);
        console.log("End");
        console.log("start");
        setTimeout(()=>{
            console.log("First task compeleted");
            setTimeout(()=>{
                console.log("Second task compeleted");
                setTimeout(()=>{
                    console.log("Third task compeleted");
                },3000);
            },2000);
    
        },1000);
        console.log("End");