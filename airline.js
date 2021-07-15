// First Class Ticket

 document.getElementById('firstClassPlusBtn').addEventListener('click', function(){
	 btn(true)
 })
 document.getElementById('firstClassMinusBtn').addEventListener('click', function(){
	btn(false)
})


//Economy Class Ticket Start

document.getElementById('EconomyPlus').addEventListener('click', function(){
	EconomyBtn(true)
})
document.getElementById('EconomyMinus').addEventListener('click', function(){
	EconomyBtn(false)
})




//First Class Ticket start

function btn(firstClassButton){
	

	const firstClassInput = document.getElementById('firstClassInput').value;
	firstClassInputNumber = parseInt(firstClassInput);
	const anotherNum = firstClassInputNumber;

	if(anotherNum != 0){
		if(firstClassButton == true){
			const firstClassTicket = anotherNum + 1;
		 document.getElementById('firstClassInput').value = firstClassTicket;
		}
		else if(firstClassButton == false){
			const firstClassTicket = anotherNum - 1;
			document.getElementById('firstClassInput').value = firstClassTicket;
		}
		
		const firstAmount = document.getElementById('firstAmount').innerText;
		firstAmountNumber = parseInt(firstAmount);
		const newFirstAmountNumber = firstAmountNumber
	
		if(firstClassButton == true){
			const firstTotalAmount = newFirstAmountNumber + 150;
			document.getElementById('firstAmount').innerText= firstTotalAmount;
		}
		else if(firstClassButton == false){
			const firstTotalAmount = newFirstAmountNumber - 150;
			document.getElementById('firstAmount').innerText= firstTotalAmount;
		}
	}

	else{

		
		alert("Select Your First Class Ticket")
	}
	subtotalHandaler()
}
//First Class Ticket end

//Economy Class Ticket Start
function EconomyBtn(EconomyClassButton){
	const EconomyInput = document.getElementById('EconomyInput').value;
	EconomyInputNumber = parseInt(EconomyInput);
	const EconomyNum = EconomyInputNumber;

	if( EconomyNum != 0){
		if(EconomyClassButton == true){
			const EconomyTicket = EconomyNum + 1;
			document.getElementById('EconomyInput').value = EconomyTicket;
		}
		else if(EconomyClassButton == false){
			const firstClassTicket = EconomyNum - 1;
			document.getElementById('EconomyInput').value = firstClassTicket;
		}
		
		const EconomyAmount = document.getElementById('EconomyAmount').innerText;
		EconomyAmountNumber = parseInt(EconomyAmount);
		const newEconomyAmountNumber = EconomyAmountNumber;
	
		if(EconomyClassButton == true){
			const EconomyTotalAmount = newEconomyAmountNumber + 100;
			document.getElementById('EconomyAmount').innerText= EconomyTotalAmount;
		}
		else if(EconomyClassButton == false){
			const EconomyTotalAmount = newEconomyAmountNumber - 100;
			document.getElementById('EconomyAmount').innerText= EconomyTotalAmount;
		}
	}

	else{

		
		alert("Select Your Economy Class Ticket")
	}
	subtotalHandaler()
}
//Economy Class Ticket end


//subtotal start
function subtotalHandaler(){
	const firstClassInput = document.getElementById('firstClassInput').value;
	firstClassInputNumber = parseInt(firstClassInput);

	const EconomyInput = document.getElementById('EconomyInput').value;
	EconomyInputNumber = parseInt(EconomyInput);

	const subtotalAmount = EconomyInputNumber * 100 + firstClassInputNumber * 150;
	document.getElementById('subtotal').innerText = subtotalAmount;

	const vat = subtotalAmount * 0.1;
	const totalVat = Math.round(vat);
	document.getElementById('vat').innerText = totalVat;
	

	const grandTotal = subtotalAmount + totalVat;
	document.getElementById('totalBalance').innerText = grandTotal;
}


document.getElementById('BookBtn').addEventListener("click", function() {
	const frontInfo = document.getElementById('fontPage');
	frontInfo.style.display = "none";
	const BookedInfo = document.getElementById('Booked-details');
	BookedInfo.style.display = "block";
	


	const firstClassInput = document.getElementById('firstClassInput').value;
	firstClassInputNumber = parseInt(firstClassInput);
	document.getElementById('detailsFirstTicket').innerText = firstClassInputNumber;

	const EconomyInput = document.getElementById('EconomyInput').value;
	EconomyInputNumber = parseInt(EconomyInput);
	document.getElementById('detailsEconomyTicket').innerText = firstClassInputNumber;


	const vat = document.getElementById('vat').innerText;
	document.getElementById('detailsVat').innerText = vat;

	const totalBalace = document.getElementById('totalBalance').innerText;
	document.getElementById('detailsTotal').innerText = totalBalace;
})

