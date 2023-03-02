const { serialize } = require("v8");

const operations = [
    { func: function1, args: args1 },
    { func: function2, args: args2 },
    { func: function3, args: args3 },
  ];
  
  function executeFunctionWithArgs(operation, callback) {
    const { args, func } = operation;
    func(args, callback);
  }
  
  function serialProcedure(operation) {
    if (!operation) process.exit(0); 
    executeFunctionWithArgs(operation, function (result) {
      serialProcedure(operations.shift());
    });
  }
  
  serialProcedure(operations.shift());
  