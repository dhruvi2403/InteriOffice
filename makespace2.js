 // quantity k inputs lo
 const quantityInputs = document.querySelectorAll('.quantity-input');

 // every input par event
 quantityInputs.forEach(input => {
     input.addEventListener('change', updateCosts);
     input.addEventListener('input', updateCosts);
 });

 // Toggle section visibility
 const toggleButtons = document.querySelectorAll('.toggle-btn');
 toggleButtons.forEach(button => {
     button.addEventListener('click', function () {
         const section = this.closest('.furniture-section');
         const table = section.querySelector('.furniture-table');

         if (table.style.display === 'none') {
             table.style.display = 'table';
             this.textContent = '✕';
         } else {
             table.style.display = 'none';
             this.textContent = '▼';
         }
     });
 });

 // Calculate costs based on quantity inputs
 function updateCosts() {
     let ecototal = 0;
     let midtotal = 0;
     let hightotal = 0;

     // Update individual row costs
     quantityInputs.forEach(input => {
         const quantity = parseInt(input.value) || 0;
         const row = input.closest('tr');

         const ecocell = row.querySelector('.economy-cost');
         const midcell = row.querySelector('.midrange-cost');
         const highcell = row.querySelector('.highend-cost');

         if (ecocell && midcell && highcell) {
             const economyBase = parseFloat(ecocell.getAttribute('data-base'));
             const midrangeBase = parseFloat(midcell.getAttribute('data-base'));
             const highendBase = parseFloat(highcell.getAttribute('data-base'));

             const ecocost = quantity * economyBase;
             const midcost = quantity * midrangeBase;
             const highcost = quantity * highendBase;

             ecocell.textContent = ecocost.toLocaleString();
             midcell.textContent = midcost.toLocaleString();
             highcell.textContent = highcost.toLocaleString();

             ecototal += ecocost;
             midtotal += midcost;
             hightotal += highcost;
         }
     });

     //  subtotals
     const economySubtotal = document.getElementById('economy-subtotal');
     const midrangeSubtotal = document.getElementById('midrange-subtotal');
     const highendSubtotal = document.getElementById('highend-subtotal');

     if (economySubtotal && midrangeSubtotal && highendSubtotal) {
         economySubtotal.textContent = ecototal.toLocaleString();
         midrangeSubtotal.textContent = midtotal.toLocaleString();
         highendSubtotal.textContent = hightotal.toLocaleString();
     }
 }

 updateCosts();
 function printQuote() {
     window.print();
 }