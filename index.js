let startCity = 'Kiev'
let trainTickets = ['Paris-Skopje', 'Zurich-Amsterdam', 'Prague-Zurich', 'Barcelona-Berlin', 'Kiev-Prague', 'Skopje-Paris', 'Amsterdam-Barcelona', 'Berlin-Kiev', 'Berlin-Amsterdam']
let citiesVisited = ['Amsterdam', 'Kiev', 'Zurich', 'Prague', 'Berlin', 'Barcelona']
let routeTaken=[]
for (let i=1; i<citiesVisited.length;i++){
    if(i==1)
        routeTaken.push(startCity)
    else{
        trainTickets.map(ticket=>{
        let start=ticket.split('-')[0]
        let destination=ticket.split('-')[1]
        if(routeTaken[routeTaken.length-1]===start){
            routeTaken.push(destination) 
            return
            }
        })    
    }
}
document.querySelector('.answer').innerText = routeTaken.join(' -> ').toString() 