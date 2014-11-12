#Sane Enter Key
###Version: 0.1.0

**Dependencies**  
jQuery

**Author** Mike Bethany  
**Web:** http://mikebethany.com  
**Source:** https://github.com/mikbe/SaneEnterKey  

###Description
Makes the "enter" key behave like the tab key and allows tabbing to wrap around front and back.

Presses "enter," the expected behavior, on text areas and submit buttons.  

###Notes
Uses tabindexes if defined otherwise uses visible inputs on the parent form.

This is jQuery based so of course you need to use that.  

###Installation

**Rails**  
Put `sane_enter_key.js.coffee`into your `app/assets/javascripts` folder.

**Non-Rails**  
Put `sane_enter_key.js` into the folder you keep your Javascripts in.  
Include the script into your webpage, for example: `<script src="/javascripts/sane_enter_key.min.js"></script>`

###Usage
Call `mbsd_sane_enter_key();` on any page you wish this behavior to run or put that at the end of your application template file (if you have one). 

To run the code on all pages uncomment the code at the end of the script file you're using.

###License
<a rel="license" href="http://creativecommons.org/licenses/by-sa/4.0/"><img alt="Creative Commons License" style="border-width:0" src="https://i.creativecommons.org/l/by-sa/4.0/88x31.png" /></a><br /><span xmlns:dct="http://purl.org/dc/terms/" property="dct:title">Sane Enter Key</span> by <a xmlns:cc="http://creativecommons.org/ns#" href="http://mikebethany.com" property="cc:attributionName" rel="cc:attributionURL">Mike Bethany</a> is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by-sa/4.0/">Creative Commons Attribution-ShareAlike 4.0 International License</a>.<br />Based on a work at <a xmlns:dct="http://purl.org/dc/terms/" href="https://github.com/mikbe/SaneEnterKey" rel="dct:source">https://github.com/mikbe/SaneEnterKey</a>.