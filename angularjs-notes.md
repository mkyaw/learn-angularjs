Angular JS
---------
```
<!DOCTYPE html>
<html lang="en-US">
<head>
  <script src="http://ajax.googleapis.com/ajax/libs/angularjs/1.3.14/angular.min.js"></script>
</head>
<body>

<div ng-app="" ng-init="devFName = 'Myo'">
  <label>Favorite color:</label>
  <input type="text" ng-model="color">
  <p>Your favorite color is: {{color}}</p>
  
  <label>Favorite place:</label>
  <input type="text" ng-model="place">
  <p>Your favorite place is: </p>
  <p ng-bind="place"></p>

  <i>Coded by <span ng-bind="devFName"></span></i>

</div>

</body>
</html>
```

The **ng-app** directive tells AngularJS that the `<div>` element is the "owner" of an AngularJS application.

The **ng-model** directive binds the value of the input field to the application variable name.

The **ng-bind** directive binds the innerHTML of the `<p>` element to the application variable name.


The **ng-init** directive initialize AngularJS application variables.

### Expressions
```
<!DOCTYPE html>
<html>
<script src="http://ajax.googleapis.com/ajax/libs/angularjs/1.3.14/angular.min.js"></script>
<body>

<div ng-app="">
 	
 	<!--Result: My first expression: 10 -->
 	<p>My first expression: {{ 5 + 5 }}</p>
 	
 	<!-- ng-model + expression ==> ng-bind -->
 	<label>Name:</label>
 	<input type="text" ng-model="name">
 	<p>Your name is: {{name}}</p>
</div>

</body>
</html>
```

### Module and Controller

```
<!DOCTYPE html>
<html>
<head>
	<script src="http://ajax.googleapis.com/ajax/libs/angularjs/1.3.14/angular.min.js"></script>

</head>
<body>

	<div ng-app="myAngularApp" ng-controller="myAngularCtrl">
	 	
	 	First Name: <input type="text" ng-model="firstName">
	 	<br />
	 	Last Name: <input type="text" ng-model="lastName">
	 	<br />
	 	Your full name is: {{firstName + " " + lastName}}
	</div>

	<script>
		// module - defines application
		var app = angular.module('myAngularApp', [])
		
		// controller - controls application
		app.controller('myAngularCtrl', function($scope) {
			$scope.firstName = "John"
			$scope.lastName = "Smith"
		});
	</script>

</body>
</html>
```

Also:

```
<!DOCTYPE html>
<html>
<head>
	<script src="http://ajax.googleapis.com/ajax/libs/angularjs/1.3.14/angular.min.js"></script>

</head>
<body>

	<div ng-app="catApp" ng-controller="catCtrl">
		Cat's name: <input type="text" ng-model="catName">
		<br>
		Cat's sound: <input type="text" ng-model="catSound">
		<br>
		{{catName}} makes the sound: {{catSound}}
	</div>

	<script>
		var app = angular.module('catApp', [])

		app.controller('catCtrl', function($scope) {
			$scope.catName = ""
			$scope.catSound = ""
		});
	</script>

</body>
</html>
```