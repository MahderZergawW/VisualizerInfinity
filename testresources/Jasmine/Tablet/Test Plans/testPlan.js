//This is the entry point for automation. You can either:
//1.Require any one of the created test plans like this:
require([/*<test plan file>*/]);

// or
//2.  require the test suites along with executing jasmine as below
//Nested require for test suites will ensure the order of test suite exectuion
require([/*<Test Suites/test suite1>*/],function(){
  require([/*<Test Suites/test suite2>*/], function(){
    //and so on
    	require([/*<Test Suites/last test suite>*/], function(){
        		jasmine.getEnv().execute();  
        });
  });
});

//Since this is file is to be manually edited, make sure to update 
//any changes (rename/delete) to the test suites/plans.