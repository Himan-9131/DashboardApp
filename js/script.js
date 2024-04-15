
/******************************************* Login page ****************************************/
// Accessing DOM Elements for Login Page
const loginBox = document.getElementById('login-box');
const mainContainer = document.getElementById('main-container');
const loginBtn = document.getElementById('login-btn');
const logoutBtn = document.getElementById('admin-logout-container');

// Accessing DOM Elements
const adminProfileContainer = document.querySelector('.admin-profile-container');
const adminLogoutContainer = document.querySelector('.admin-logout-container');
const adminProfileAngleDown = document.getElementById('angle-down');

// Accessing DOM Elements for responsive sidebar
const barIcon = document.getElementById('menu-bar-icon');
const closeIcon = document.getElementById('menu-close-icon');
const navMenu = document.getElementById('nav-menu');
const menuItems = document.querySelectorAll('.menu-item');

barIcon.addEventListener('click', function () {
   if(window.innerWidth <= 768) {
      barIcon.style.display = 'none';
      navMenu.classList.add('extracted');
      closeIcon.style.display = 'block';
   }
});

closeIcon.addEventListener('click', function () {
   if(window.innerWidth <= 768) {
      closeIcon.style.display = 'none';
      navMenu.classList.remove('extracted');
      barIcon.style.display = 'block';
   }
});

menuItems.forEach(item => {
   item.addEventListener('click', function () {
      if(window.innerWidth <= 768) {
         navMenu.classList.remove('extracted');
         closeIcon.style.display = 'none';
         barIcon.style.display = 'block';
      } else {
         barIcon.style.display = 'none';
      }
   });
});

loginBtn.addEventListener('click', () => {
   loginBox.style.display = 'none';
   mainContainer.style.display = 'flex';
})

logoutBtn.addEventListener('click', () => {
   mainContainer.style.display = 'none';
   loginBox.style.display = 'flex';
   // resetState();
})

function resetState() {
   location.reload();
}


/********************************************** Sidebar *******************************************/
// Remove Active Class from menuItems
const changeActiveItem = () => {
   menuItems.forEach(item => {
      item.classList.remove('active');
   })
}

//Page Navigation Code based on Anchors
document.addEventListener('DOMContentLoaded', function () {
   const sections = document.querySelectorAll('.main-content section');

   menuItems.forEach(item => {
      item.addEventListener('click', function (e) {
         e.preventDefault();
         const targetSectionId = this.getAttribute('href').substring(1);

         sections.forEach(section => {
            section.style.display = 'none';
         })

         document.getElementById(targetSectionId).style.display = 'flex';
         // Add 'active' class to each item in menuItems when they clicked 
         changeActiveItem();
         item.classList.add('active');
      });
   });
});

// Adding Event Listener to AngleDown Icon to Handle Clicking States
let isProfileVisible = true;
adminProfileAngleDown.addEventListener('click', () => {

   if (isProfileVisible) {
      adminProfileContainer.style.display = 'none';
      adminLogoutContainer.style.display = 'flex';
      adminProfileAngleDown.classList.replace('fa-angle-down', 'fa-angle-up');
   } else {
      adminLogoutContainer.style.display = 'none';
      adminProfileContainer.style.display = 'flex';
      adminProfileAngleDown.classList.replace('fa-angle-up', 'fa-angle-down');
   }

   isProfileVisible = !isProfileVisible;
})

/*********************************************** Main Content **********************************************/
// Main Content/Analytics Page

document.getElementById('analytics-filter').addEventListener('change', function () {

   var selectedOption = this.value;

   switch (selectedOption) {

      case 'weekly':
         updateEarning(selectedOption);
         showTimeRange(selectedOption);
         showWeekly();
         break;
      case 'monthly':
         updateEarning(selectedOption);
         showTimeRange(selectedOption);
         showMonthly();
         break;
      case 'quarterly':
         updateEarning(selectedOption);
         showTimeRange(selectedOption);
         showQuarterly();
         break;
      case 'half Yearly':
         updateEarning(selectedOption);
         showTimeRange(selectedOption);
         showHalfYearly();
         break;
      case 'yearly':
         updateEarning(selectedOption);
         showTimeRange(selectedOption);
         showYearly();
         break;
   }

   function updateEarning(message) {
      const capitalizeMessage = message.charAt(0).toUpperCase() + message.slice(1);
      document.getElementById('updateEarning').textContent = capitalizeMessage;
   }

   function showTimeRange(message) {
      const elements = document.getElementsByClassName('timeRange');
      for (var i = 0; i < elements.length; i++) {
         let msg = message.charAt(0).toUpperCase();
         let refinedMessage = msg + message.slice(1);
         let re_refinedMessage = refinedMessage.slice(0, -2);
         elements[i].textContent = re_refinedMessage;
      }
   }

   function showWeekly() {
      document.getElementById('earningValue').textContent = weekly.earningValue;
      document.getElementById('eVP').textContent = arrowMarks.gain + weekly.earningValuePercentage;
      document.getElementById('eVP').style.color = 'green';
      document.getElementById('ordersValue').textContent = weekly.ordersValue;
      document.getElementById('oVP').textContent = arrowMarks.loss + weekly.ordersValuePercentage;
      document.getElementById('oVP').style.color = 'red';
      document.getElementById('balanceValue').textContent = weekly.balanceValue;
      document.getElementById('bVP').textContent = arrowMarks.loss + weekly.balanceValuePercentage;
      document.getElementById('bVP').style.color = 'red';
      document.getElementById('totalSalesValue').textContent = weekly.totalSalesValue;
      document.getElementById('tSVP').textContent = arrowMarks.gain + weekly.totalSalesValuePercentage;
      document.getElementById('tSVP').style.color = 'green';

      document.getElementById('increased-customer-percentage').textContent = weekly.increasedCustomerPercentage;
      document.getElementById('decreased-customer-percentage').textContent = weekly.decreasedCustomerPercentage;

      document.getElementById('circle-green').style.border = '0.2rem dotted #01ab4f';
      document.getElementById('circle-red').style.border = '0.1rem dashed #ce0446';
   }

   function showMonthly() {
      document.getElementById('earningValue').textContent = monthly.earningValue;
      document.getElementById('eVP').textContent = arrowMarks.loss + monthly.earningValuePercentage;
      document.getElementById('eVP').style.color = 'red';
      document.getElementById('ordersValue').textContent = monthly.ordersValue;
      document.getElementById('oVP').textContent = arrowMarks.gain + monthly.ordersValuePercentage;
      document.getElementById('oVP').style.color = 'green';
      document.getElementById('balanceValue').textContent = monthly.balanceValue;
      document.getElementById('bVP').textContent = arrowMarks.loss + monthly.balanceValuePercentage;
      document.getElementById('bVP').style.color = 'red';
      document.getElementById('totalSalesValue').textContent = monthly.totalSalesValue;
      document.getElementById('tSVP').textContent = arrowMarks.loss + monthly.totalSalesValuePercentage;
      document.getElementById('tSVP').style.color = 'red';

      document.getElementById('increased-customer-percentage').textContent = monthly.increasedCustomerPercentage;
      document.getElementById('decreased-customer-percentage').textContent = monthly.decreasedCustomerPercentage;

      document.getElementById('circle-green').style.border = '0.3rem dotted #01ab4f';
      document.getElementById('circle-red').style.border = '0.2rem dashed #ce0446';

      resetBars();
   }

   function showQuarterly() {
      document.getElementById('earningValue').textContent = quarterly.earningValue;
      document.getElementById('eVP').textContent = arrowMarks.balanced + quarterly.earningValuePercentage;
      document.getElementById('eVP').style.color = 'blue';
      document.getElementById('ordersValue').textContent = quarterly.ordersValue;
      document.getElementById('oVP').textContent = arrowMarks.loss + quarterly.ordersValuePercentage;
      document.getElementById('oVP').style.color = 'red';
      document.getElementById('balanceValue').textContent = quarterly.balanceValue;
      document.getElementById('bVP').textContent = arrowMarks.gain + quarterly.balanceValuePercentage;
      document.getElementById('bVP').style.color = 'green';
      document.getElementById('totalSalesValue').textContent = quarterly.totalSalesValue;
      document.getElementById('tSVP').textContent = arrowMarks.gain + quarterly.totalSalesValuePercentage;
      document.getElementById('tSVP').style.color = 'green';

      document.getElementById('increased-customer-percentage').textContent = quarterly.increasedCustomerPercentage;
      document.getElementById('decreased-customer-percentage').textContent = quarterly.decreasedCustomerPercentage;

      document.getElementById('circle-green').style.border = '0.6rem dotted #01ab4f';
      document.getElementById('circle-red').style.border = '0.4rem dashed #ce0446';
   }

   function showHalfYearly() {
      document.getElementById('earningValue').textContent = halfYearly.earningValue;
      document.getElementById('eVP').textContent = arrowMarks.gain + halfYearly.earningValuePercentage;
      document.getElementById('eVP').style.color = 'green';
      document.getElementById('ordersValue').textContent = halfYearly.ordersValue;
      document.getElementById('oVP').textContent = arrowMarks.gain + halfYearly.ordersValuePercentage;
      document.getElementById('oVP').style.color = 'green';
      document.getElementById('balanceValue').textContent = halfYearly.balanceValue;
      document.getElementById('bVP').textContent = arrowMarks.gain + halfYearly.balanceValuePercentage;
      document.getElementById('bVP').style.color = 'green';
      document.getElementById('totalSalesValue').textContent = halfYearly.totalSalesValue;
      document.getElementById('tSVP').textContent = arrowMarks.gain + halfYearly.totalSalesValuePercentage;
      document.getElementById('tSVP').style.color = 'green';

      document.getElementById('increased-customer-percentage').textContent = halfYearly.increasedCustomerPercentage;
      document.getElementById('decreased-customer-percentage').textContent = halfYearly.decreasedCustomerPercentage;

      document.getElementById('circle-green').style.border = '0.8rem solid #01ab4f';
      document.getElementById('circle-red').style.border = '0.3rem dashed #ce0446';
   }

   function showYearly() {
      document.getElementById('earningValue').textContent = yearly.earningValue;
      document.getElementById('eVP').textContent = arrowMarks.gain + yearly.earningValuePercentage;
      document.getElementById('eVP').style.color = 'green';
      document.getElementById('ordersValue').textContent = yearly.ordersValue;
      document.getElementById('oVP').textContent = arrowMarks.gain + yearly.ordersValuePercentage;
      document.getElementById('oVP').style.color = 'green';
      document.getElementById('balanceValue').textContent = yearly.balanceValue;
      document.getElementById('bVP').textContent = arrowMarks.gain + yearly.balanceValuePercentage;
      document.getElementById('bVP').style.color = 'green';
      document.getElementById('totalSalesValue').textContent = yearly.totalSalesValue;
      document.getElementById('tSVP').textContent = arrowMarks.gain + yearly.totalSalesValuePercentage;
      document.getElementById('tSVP').style.color = 'green';

      document.getElementById('increased-customer-percentage').textContent = yearly.increasedCustomerPercentage;
      document.getElementById('decreased-customer-percentage').textContent = yearly.decreasedCustomerPercentage;

      document.getElementById('circle-green').style.border = '1rem solid #01ab4f';
      document.getElementById('circle-red').style.border = '0.5rem solid #ce0446';
   }

})


// Main Content/Admin Page
document.getElementById('product-select').addEventListener('change', function () {

   let selectedOption = this.value;

   switch (selectedOption) {

      case 'themes':
         updateCategory(selectedOption);
         break;
      case 'templates':
         updateCategory(selectedOption);
         break;
      case 'plugins':
         updateCategory(selectedOption);
         break;
      case 'softwares':
         updateCategory(selectedOption);
         break;
   }

   function updateCategory(message) {
      const capitalizeMessage = message.charAt(0).toUpperCase() + message.slice(1);
      document.getElementById('product-category').textContent = capitalizeMessage;
   }

})

/* Functionality for Admin page modals / remove category */
document.addEventListener('DOMContentLoaded', function () {
   // Accessing DOM nodes
   let selectElement = document.getElementById('product-select');
   let addCategoryButton = document.getElementById('add-category');
   let removeCategoryButton = document.getElementById('remove-category');
   let addCategoryModal = document.getElementById('addCategoryModal');
   let removeCategoryModal = document.getElementById('removeCategoryModal');
   let closeAddCategoryModal = document.getElementById('closeAddCategoryModal');
   let closeRemoveCategoryModal = document.getElementById('closeRemoveCategoryModal');
   let addNewCategoryButton = document.getElementById('addNewCategory');
   let categoriesList = document.getElementById('categories-list');
   let removeSelectedCategoriesButton = document.getElementById('remove-selected');

   // Display the modal for add categories
   addCategoryButton.addEventListener('click', function () {
      addCategoryModal.style.display = 'block';
   });

   // Displaying the modal for remove categories
   removeCategoryButton.addEventListener('click', function () {
      removeCategoryModal.style.display = 'block';
      populateCategoriesList();
   });

   // Closing the add category modal when click on the close button 
   closeAddCategoryModal.onclick = function () {
      addCategoryModal.style.display = 'none';
   }

   // Closing the remove category modal when click on close button
   closeRemoveCategoryModal.onclick = function () {
      removeCategoryModal.style.display = 'none';
   }
   // Closing the modal when click on outside of the modal
   window.onclick = function (event) {
      if (event.target == addCategoryModal) {
         addCategoryModal.style.display = 'none';
      }
      if (event.target == removeCategoryModal) {
         removeCategoryModal.style.display = 'none';
      }
   }

   addNewCategoryButton.addEventListener('click', function () {

      let categoryNameInput = document.getElementById('newCategoryName');
      let categoryName = categoryNameInput.value.trim();

      if (categoryName === '') {
         return;
      }

      if (categoryName !== '') {
         let category = document.createElement('option');
         category.text = categoryName;
         category.value = categoryName.toLowerCase();
         selectElement.appendChild(category);
         categoryNameInput.value = '';
         addCategoryModal.style.display = 'none';
      }
   });

   function populateCategoriesList() {
      categoriesList.innerHTML = '';
      let categories = selectElement.options;
      for (var i = 0; i < categories.length; i++) {
         let checkBox = document.createElement('input');
         checkBox.type = 'checkbox';
         checkBox.name = 'category';
         checkBox.value = categories[i].value;
         let label = document.createElement('label');
         label.appendChild(checkBox);
         label.appendChild(document.createTextNode(categories[i].text));
         categoriesList.appendChild(label);
         categoriesList.appendChild(document.createElement('br'));
      }

   }

   removeSelectedCategoriesButton.addEventListener('click', function () {
      let checkBoxes = document.querySelectorAll('input[name="category"]:checked');
      checkBoxes.forEach(function (checkBox) {
         let value = checkBox.value;
         let categories = selectElement.options;
         for (var i = 0; i < categories.length; i++) {
            if (categories[i].value === value) {
               selectElement.remove(i);
               break;
            }
         }
      });
      removeCategoryModal.style.display = 'none';
   });

});

// Main Content/Customers Page
const openModal = document.getElementById('add-customer');
const closeModal = document.getElementById('closeModalButton');
const customerModal = document.getElementById('customerModal');

const customerName = document.getElementById('customerName');
const customerContact = document.getElementById('customerContact');
const customerAddress = document.getElementById('customerAddress');
const addCustomerButton = document.getElementById('addCustomer');

const customersList = document.getElementById('customers-list');

openModal.addEventListener('click', function () {
   customerModal.style.display = 'block';
})

closeModal.addEventListener('click', function () {
   customerModal.style.display = 'none';
})

addCustomerButton.addEventListener('click', function () {

   const cName = customerName.value;
   const cContact = customerContact.value;
   const cAddress = customerAddress.value;

   // If input fields are empty
   if (cName === '' || cContact === '' || cAddress === '') {
      alert("Please enter valid customer details.");
      return;
   }

   // Generate Customer
   const customer = document.createElement('li');
   customer.classList.add('customerDesign');
   customer.innerHTML = `<div class="customerData"><h5>Name</h5><span>${cName}</span></div><div class="customerData"><h5>Contact</h5><span>${cContact}</span></div><div class="customerData"><h5>Address</h5><span>${cAddress}</span></div><button class="btn-danger" onclick="return this.parentNode.remove()">Remove</button>`;
   customersList.appendChild(customer);
   clearInputFields();

   function clearInputFields() {
      customerName.value = '';
      customerContact.value = '';
      customerAddress.value = '';
   }

   customerModal.style.display = 'none';
})


// Customer Engagement Pie Chart
google.charts.load('current', { 'packages': ['corechart'] });
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
   var lastFifteenDays = google.visualization.arrayToDataTable([
      ['Engagement', ''],
      ['Gained', 70],
      ['Loose', 30],
      ['Constant', 40],
   ]);
   var lastThirtyDays = google.visualization.arrayToDataTable([
      ['Engagement', ''],
      ['Gained', 40],
      ['Loose', 20],
      ['Constant', 50],
   ]);
   var lastSixMonths = google.visualization.arrayToDataTable([
      ['Engagement', ''],
      ['Gained', 80],
      ['Loose', 20],
      ['Constant', 10],
   ]);
   var lastOneYear = google.visualization.arrayToDataTable([
      ['Engagement', ''],
      ['Gained', 40],
      ['Loose', 20],
      ['Constant', 50],
   ]);
   var lastFiveYears = google.visualization.arrayToDataTable([
      ['Engagement', ''],
      ['Gained', 60],
      ['Loose', 30],
      ['Constant', 40],
   ]);

   var options = {
      title: 'Engagement',
      colors: ['#2ecc71', '#e74c3c', '#3498db'], // Customize colors for Gained, Loose, and Constant
      // width: 800,
      // height: 500
   };

   var chart = new google.visualization.PieChart(document.getElementById('piechart'));
   chart.draw(lastFifteenDays, options);
   document.getElementById('customerEngagement').addEventListener('change', function () {
      var ceSelectedOption = this.value;
      switch (ceSelectedOption) {
         case 'lastFifteenDays':
            chart.draw(lastFifteenDays, options);
            break;
         case 'lastThirtyDays':
            chart.draw(lastThirtyDays, options);
            break;
         case 'lastSixMonths':
            chart.draw(lastSixMonths, options);
            break;
         case 'lastOneYear':
            chart.draw(lastOneYear, options);
            break;
         case 'lastFiveYear':
            chart.draw(lastFiveYears, options);
            break;
      }
   })
}







