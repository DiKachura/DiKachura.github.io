 function calculate(){
    totalCost = document.getElementById('total-cost').value;
    col = document.getElementById('col').value;
    amount=parseInt(totalCost)*parseInt(col);
    document.getElementById('amount').innerHTML="Стоимость заказа: "+amount+"₽";
    return false;
}