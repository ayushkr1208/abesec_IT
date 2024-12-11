function fetchdata(){
    return new promise((resolve ,reject)=> {
        setTimeout(() => {
            const students = [
                {name:"Alice",score:50},
                {name:"Bob", score:65},
                {name:"charlie",score:80},
                {name:"Rahul",score:85},
                {name:"Ayush",score:89}
            ]
        })
    })
}