var controller = (function(budgetCtrl, uiCtrl) {
  var setupEventListeners = function() {
    var DOM = uiController.getDOMstrings();
    document.querySelector(DOM.inputBtn).addEventListener("click", ctrlAddItem);
    document.addEventListener("keypress", function(event) {
      if (event.keyCode === 13 || event.which === 13) {
        ctrlAddItem();
      }
    });
  };

  var updateBudget = function() {
    // 1. Calculate the budget
    // 2. Return the budget
    // 3. Display the budget on the UI
  };

  var ctrlAddItem = function() {
    var input, newItem;
    // 1. Get the field input data
    input = uiCtrl.getInput();
    // Checking if user entered data
    if (input.description !== "" && !isNaN(input.value) && input.value > 0) {
      // 2. Add the item to the budget controller
      newItem = budgetCtrl.addItem(input.type, input.description, input.value);
      // 3. Add the item to the UI
      uiCtrl.addListItem(newItem, input.type);
      // 4. Clear fields after submitting
      uiCtrl.clearFields();
      // 5. Calculate and update budget
      updateBudget();
    }
  };

  return {
    init: function() {
      console.log("App started");
      setupEventListeners();
    }
  };
})(budgetController, uiController);

controller.init();
