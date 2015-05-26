/**
 * Created by prrathore on 5/23/15.
 */

'use strict';

var grunt = require('grunt');

//To run: grunt default or grunt
grunt.registerTask('default', 'default task', function() {
    console.log('I am the default task.');
});

//To run: grunt hello:<param>
grunt.registerTask('hello', 'greeting task', function(name) {
   if(!name || !name.length)
        grunt.warn('you need to provide a name');

    console.log('hello ' + name + '!');

});

grunt.registerTask('sum', 'sum of two numbers', function sum(a, b) {
    var c = a + b;
    grunt.log.writeln('sum is: ' + c);
});

grunt.registerTask('gruntversion', 'get grunt version', function() {
   grunt.log.writeln('Grunt version is: ' + grunt.version);
});

grunt.registerTask('taskvalidator', 'validate if a task exist', function(taskname) {
   if(!taskname || !taskname.length) {
       grunt.fatal('Cannot run this task without task name');
   }

    grunt.log.writeln(taskname + ' exists: ' + grunt.task.exists(taskname));

});

grunt.registerTask('validateandruntask', 'if task available then run given task', function(taskname) {
   if(!taskname || !taskname.length) {
       grunt.warn('task name is needed to run this task');
   }

    if(!grunt.task.exists(taskname)) {
        grunt.log.writeln('this task does not exist!');
    } else {
        grunt.log.writeln(taskname + ' exists. Going to run this task');
        grunt.task.run(taskname);
    }

});

grunt.registerTask('multitask', 'runs multiple tasks', ['gruntversion', 'default', 'hello:Ricky']);
