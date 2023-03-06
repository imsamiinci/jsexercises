// JavaScript code for Earth Mover Company website

// Display pop-up message when user clicks on product image
var productImage = document.querySelector('.product img');
productImage.addEventListener('click', function() {
	alert('This is a featured product from Earth Mover Company!');
});

// Change color of navigation link when user hovers over it
var navLinks = document.querySelectorAll('nav a');
navLinks.forEach(function(link) {
	link.addEventListener('mouseover', function() {
		link.style.backgroundColor = '#ffffff';
		link.style.color = '#333333';
	});
	link.addEventListener('mouseout', function() {
		link.style.backgroundColor = '';
		link.style.color = '#ffffff';
	});
});
