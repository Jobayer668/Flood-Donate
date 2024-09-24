
document.getElementById('blogbtn').addEventListener('click',function(){
    window.location.href = 'blog.html';
});

document.getElementById('donate-div-btn').addEventListener('click',function(){
    const donateDiv = document.getElementById('donate-div');
    const historyDiv = document.getElementById('history-div');
    const donateBtn = document.getElementById('donate-div-btn');
    
    donateDiv.classList.remove('hidden');
    historyDiv.classList.add('hidden');

    if (!donateBtn.classList.contains('bg-lime-200')) {
        donateBtn.classList.add('bg-lime-200');
    }

    document.getElementById('history-div-btn').classList.remove('bg-lime-300');
});

document.getElementById('history-div-btn').addEventListener('click',function(){
    const donateDiv = document.getElementById('donate-div');
    const historyDiv = document.getElementById('history-div');
    const historyDivBtn = document.getElementById('history-div-btn');
    
    donateDiv.classList.add('hidden');
    historyDiv.classList.remove('hidden');

    if (!historyDivBtn.classList.contains('bg-lime-300')) {
        historyDivBtn.classList.add('bg-lime-300');
    }
    
    document.getElementById('donate-div-btn').classList.remove('bg-lime-300');
});

document.getElementById('noakhali-donate').addEventListener('click', function(e) {
    e.preventDefault(); 
    donationCalculation('noakhali-amount','noakhali-donation','noakhali-h');
});

document.getElementById('feni-donate').addEventListener('click', function(e) {
    e.preventDefault();
    donationCalculation('feni-amount','feni-donation','feni-h');
});

document.getElementById('quota-donate').addEventListener('click', function(e) {
    e.preventDefault(); 
    donationCalculation('quota-amount','quota-donation','quota-h');
});





function donationCalculation(donationId,donatedId,donationHeadID){
    
    const balanceElement = document.getElementById('balance');
    const balance = parseFloat(document.getElementById('balance').innerHTML);

    const donationElement = document.getElementById(donatedId);
    const donationAmt = document.getElementById(donationId).value;
    const donatedAmt = parseFloat(document.getElementById(donatedId).innerHTML);

    const donationTxt = document.getElementById(donationHeadID).innerHTML;
    const donationAmount = parseFloat(donationAmt);

    if(isNaN(donationAmt) || !donationAmt){
        alert('Caution!! Inputed value is not a number!');
    }else if(donationAmount<=0){
        alert('Sorry, Your amount is too low!');
    }else if(donationAmount>balance){
        alert('Sorry, Your balance is not enough!');
    }
    else{
        
        balanceElement.innerHTML = balance - donationAmount;
        donationElement.innerHTML = donationAmount + donatedAmt;

        const historydiv = document.createElement('div');
        historydiv.className = 'w-full p-4 flex flex-col justify-center items-start border rounded-lg';

        const newP = document.createElement('p');
        newP.className = 'text-sm font-bold mb-5';
        newP.textContent = donationAmount + ' Tk. Donated for ' + donationTxt;

        const dateP = document.createElement('p');
        dateP.className = 'text-sm ml-2';
        dateP.textContent = 'Date: ' + new Date();

        const parentDiv = document.getElementById('all-history');

        historydiv.appendChild(newP);
        historydiv.appendChild(dateP);

        parentDiv.appendChild(historydiv);

        const modalMsgElement = document.getElementById('modal-success-amount');        
        modalMsgElement.innerHTML = donationAmount + ' Tk Successfully.';

        const modal = document.getElementById('donate-modal');
        modal.showModal(); 

        document.getElementById(donationId).value = '';
    }
    
    
}