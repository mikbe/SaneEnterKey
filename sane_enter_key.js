// Name: SaneEnterKey.js
// Version: 0.1.0 beta
// Date: Date: 12 Nov 2014
// Licence type: Creative Commons Attribution Share-Alike 4.0 International
// Licence link: http://creativecommons.org/licenses/by-sa/4.0/
//
// Dependencies:
// jQuery
// 
// Author: Mike Bethany (MBSD)
// Web: http://mikebethany.com
// Source: https://github.com/mikbe/SaneEnterKey
// 
// Description:
// Makes the "enter" key behave like the tab key
// and allows tabbing to wrap around front and back.
//
// Presses "enter," the expected behavior, on textareas 
// and submit buttons.
//
// Notes:
// Uses tabindexes if defined otherwise uses visible
// inputs on the parent form.

var mbsd_sane_enter_key = function() {
  var input_types;
  input_types = "input, select, button, textarea";

  return $("body").on("keydown", input_types, function(e) {
    var enter_key, form, input_array, move_direction, move_to, new_index, self, tab_index, tab_key;
    enter_key = 13;
    tab_key = 9;
  
    if (e.keyCode === tab_key || e.keyCode === enter_key) {
      self = $(this);
    
      // some controls should react as designed when pressing enter
      if (e.keyCode === enter_key && (self.prop('type') === "submit" || self.prop('type') === "textarea")) {
        return true;
      }
              
      form = self.parents('form:eq(0)');
    
      // Sort by tab indexes if they exist
      tab_index = parseInt(self.attr('tabindex'));
      if (tab_index) {
        input_array = form.find("[tabindex]").filter(':visible').sort(function(a, b) {
          return parseInt($(a).attr('tabindex')) - parseInt($(b).attr('tabindex'));
        });
      } else {
        input_array = form.find(input_types).filter(':visible');
      }
    
      // reverse the direction if using shift
      move_direction = e.shiftKey ? -1 : 1;
      new_index = input_array.index(this) + move_direction;
    
      // wrap around the controls
      if (new_index === input_array.length) {
        new_index = 0;
      } else if (new_index === -1) {
        new_index = input_array.length - 1;
      }
    
      move_to = input_array.eq(new_index);
      move_to.focus();
      move_to.select();
      return false;
    }
  });
};

// Uncomment these lines if you want
// the code to work on all pages
//$(window).on('ready page:load', function() {
//  mbsd_sane_enter_key();
//});