myApp.controller('myAppCtrl', function ($scope) {

    $scope.templates = [{
        name: 'Todo',
        url: 'views/todo.html',
        isActive: true
        }, {
        name: 'myNewApp 1',
        url: 'views/new1.html',
        isActive: false
        }, {
        name: 'myNewApp 2',
        url: 'views/new2.html',
        isActive: false
         }];

    $scope.template = $scope.templates[0];

    $scope.tabActive = function (index) {
        $scope.templates.forEach(function (t) {
            
            console.log(t);
            if(t.isActive==true)
            {
                t.isActive=false;
            }
        });
        
        $scope.templates[index].isActive=true;
        $scope.template = $scope.templates[index];
    }

});



myTodoApp.controller('myTodoCtrl', function ($scope) {

    $scope.todo = [{
        item: "this is my first todo",
        isDone: true
     }, {
        item: "this is my second todo",
        isDone: false
     }];

    $scope.removeItem = function (ti) {
        $scope.todo.splice(ti, 1);
    };

    $scope.newTodo = function () {
        $scope.todo.push({
            item: $scope.TodoInput,
            isDone: false
        });
        $scope.TodoInput = "";
    }

});