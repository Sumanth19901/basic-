const container=document.querySelector('.container');
const seats=document.querySelectorAll('.row .seat:not(.occupied)');

const count=document.getElementById('count');
const total=document.getElementById('total');
const destinationSelect=document.getElementById('destination');


let price = +destinationSelect.value;

// const buses=document.querySelectorAll('.row .seat(.selected)');
// buy.addEventListener('click',e=>{
//     if(e.target.classList.contains('selected') && !e.target.classList.contains('occupied')){
//         e.target.classList.toggle('occupied');
//         updateSelected();
//     }
// });


container.addEventListener('click',e=>{
    if(e.target.classList.contains('seat') && !e.target.classList.contains('occupited')){
        e.target.classList.toggle('selected');
        updateSelected();
    }
});


destinationSelect.addEventListener('click',e=>{
    price = +e.target.value;
    priceperseat.innerText=price;
    setDestinationData(e.target.selectedIndex,e.target.value);
    updateSelected();
})

function updateSelected(){
    const selectedSeats=document.querySelectorAll('.row .seat.selected');
    const contests=selectedSeats.length;
    const seatsIndex=[...selectedSeats].map(seat=>[...seats].indexOf(seat));
    localStorage.setItem("selectedSeats",JSON.stringify(seatsIndex));
    count.innerText=contests;
    total.innerText=contests * price;
    priceperseat.innerText=price;
}
function setDestinationData(destinationIndex,destinationPrice){
    localStorage.setItem("destinationIndex",destinationIndex);
    localStorage.setItem("destinationPrice",destinationPrice);
}
function showDataUI(){
    const selectedSeats=JSON.parse(localStorage.getItem("selectedSeats"));
    const  selectDestinationIndex=localStorage.getItem("destinationIndex");
    const selectDestinationPrice=localStorage.getItem("destinationPrice");
    seats.forEach((seat,index)=>{
        if(selectedSeats.indexOf(index)>-1){
            seat.classList.add('selected');
        }
    });
    if(selectDestinationIndex !=null){
        destinationSelect.selectedIndex=selectDestinationIndex;
        price=selectDestinationPrice;
    }
}

showDataUI();
updateSelected();