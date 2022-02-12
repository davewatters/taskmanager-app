document.addEventListener("DOMContentLoaded", function() {
  // sidenav initialization
  let sidenav = document.querySelectorAll(".sidenav");
  M.Sidenav.init(sidenav);

  // Modal init
  var modals = document.querySelectorAll('.modal');
  var instances = M.Modal.init(modals);

  // datepicker initialization
  let datepicker = document.querySelectorAll(".datepicker");
  M.Datepicker.init(datepicker, {
      format: "dd mmmm, yyyy",
      i18n: {done: "Select"}
  });
  
  // select initialization
  let selects = document.querySelectorAll("select");
  M.FormSelect.init(selects); 

  // collapsible initialisation for home screen > tasks list 
  var collapsibles = document.querySelectorAll('.collapsible');
  var instances = M.Collapsible.init(collapsibles, {
    accordion: true
  });
});

