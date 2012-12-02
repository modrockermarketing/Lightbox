/*
 *
 * LightBox Class
 *
 *
 * Blurb:
 * 
 * LightBox was written to satisfy two needs:
 *  - To learn how to code in an object oriented way in javascript.
 *  - To provide a lightweight, flexible light box/modal window solution.
 *
 *
 * Copyright:
 *  - James Carroll, 2012
 *
 *
 */


/*
 *
 * LightBox Class, constructor method
 *
 */

function LightBox(openerId) {

	// Declare variables
	var body, lbW, lbI, lbC, lbO;

	// Get opener element by id passed in
	lbO				= document.getElementById('lbOpener');

	// Get body element
	body			= document.getElementsByTagName('body')[0];

	// Create lightbox wrapper div and set attributes
	lbW 			= document.createElement('div');
	lbW.id 			= 'lightboxWrap';
	lbW.className 	= 'hidden';

	// Create lightbox inner div and set attributes
	lbI 			= document.createElement('div');
	lbI.id 			= 'lightboxInner';
	lbI.className 	= 'hidden';

	lbC 			= document.createElement('a');
	lbC.id 			= 'lightboxCloser';
	lbC.innerHTML	= 'Close Window';

	// Append close link to lightbox inner
	lbI.appendChild(lbC);

	// Append lightbox elements to document body
	body.appendChild(lbW);
	body.appendChild(lbI);

	// Store wrap and inner variables as properties
	this.lbO 		= lbO;
	this.lbW 		= lbW;
	this.lbI 		= lbI;
	this.lbC 		= lbC;

	// Enable event handling
	this.enableEventHandling();
}


/*
 *
 * LightBox Class, open method
 *
 */

LightBox.prototype.Open = function () {

	// Show lightbox elements using css class
	this.lbW.className = 'visible';
	this.lbI.className = 'visible';
}


/*
 *
 * LightBox Class, close method
 *
 */

LightBox.prototype.Close = function () {

	// Hide lightbox elements using css class
	this.lbW.className = 'hidden';
	this.lbI.className = 'hidden';
}


/*
 *
 * LightBox Class, enable event handling method
 *
 */

LightBox.prototype.enableEventHandling = function () {

	// New variable to keep 'this' object (lighbox) in scope
	var lb = this;

	// Handle click on light box wrapper div
    this.lbW.onclick	= function() {
        lb.Close();
    }

	// Handle click on light box closer link
    this.lbC.onclick	= function() {
        lb.Close();
    }

    // Handle click on opener links
    this.lbO.onclick	= function() {
        // Open lightbox
        lb.Open();
    }

}


/*
 *
 * Window load event
 *
 */

window.onload = function() {

	// Instantiate a lightbox object
	var lb = new LightBox('lbOpener');
};