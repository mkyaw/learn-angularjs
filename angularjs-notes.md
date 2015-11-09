# Angular JS

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

## Expressions

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

More code with Expressions (with objects and arrays also):

```
<!DOCTYPE html>
<html>
<head>
	<meta charset="UTF-8">
	<title>Angular JS | Expressions</title>
	<script src="http://ajax.googleapis.com/ajax/libs/angularjs/1.3.14/angular.min.js"></script>
</head>
<body>
	<h2>Angular JS Expressions</h2>
	<div ng-app="" 
		ng-init="unit_price=5; qty=20; 
				fname='myo'; lname='kyaw'; 
				cat={name : 'Romie', sound : 'meowwww'};
				luckyno=[7, 14, 21, 35, 42, 49, 99] ">
		Sum of 5 and 5 is: {{ 5 + 5 }}
		<br><br>
		Total is: {{ unit_price * qty }}
		<br><br>
		Full name is: {{ fname + " " + lname }}
		
		<br><br>
		
		<!-- expression with object -->
		<h3>Taking cats seriously...</h3>
		{{ cat.name }} makes the sound: {{ cat.sound }}
		<br><br>
		So, it is obvious the cat's name is <span ng-bind='cat.name'></span> :)

		<br><br>

		<!-- expression with array -->
		<h3>Lucky numbers...</h3>
		My first lucky number is: {{ luckyno[0] }}
		<br>
		Making my second lucky number: <span ng-bind='luckyno[1]'></span>
		<br>
		Guess what my last lucky number is: {{ luckyno[6] }}
	</div>
</body>
</html>
```

JS <=> AngularJS

AngularJS & JS: expressions can contain literals, operators, and variables.

AngularJS (not JS): can be written inside HTML, support filters.

JS (not AngularJS):  support conditionals, loops, and exceptions.




## Module and Controller

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

## Directives

```
<!DOCTYPE html>
<html>
<head>
	<meta charset="UTF-8">
	<title>Angular JS | Directives</title>
	<script src="http://ajax.googleapis.com/ajax/libs/angularjs/1.3.14/angular.min.js"></script>
</head>
<body>
	<h2>Angular JS Directives</h2>
	<br><br>
	<h3>Repeating elements...</h3>
	<br>

	<div ng-app="" ng-init="cats=['Kitty', 'Barbie', 'Johnny'];
							dogs=[{name: 'Jack', color: 'brown'}, {name: 'Ted', color: 'black'}, {name: 'Chee', color: 'blonde'}];
							">
		Cat names are:
		<ul>
			<li ng-repeat='x in cats'>
				{{ x }}
			</li>
		</ul>
		<br><br>

		Dog names and colors are:
		<ul>
			<li ng-repeat='x in dogs'>
				{{ x.name + " has color " + x.color + " :)"}}
			</li>
		</ul>
	</div>
</body>
</html>

```

Some Wisdom*:

The **ng-app** Directive


- The ng-app directive defines the root element of an AngularJS application.
	
- The ng-app directive will auto-bootstrap (automatically initialize) the application when a web page is loaded.
- ng-app can have a value (like ng-app="myModule"), to connect code modules.

The **ng-init** Directive
- The ng-init directive defines initial values for an AngularJS application.
- Normally, you will not use ng-init. You will use a controller or module instead.

The **ng-model** Directive
- The ng-model directive binds the value of HTML controls (input, select, textarea) to application data.
- The ng-model directive can also:
		
	- Provide type validation for application data (number, email, required).
		
	- Provide status for application data (invalid, dirty, touched, error).
		
	- Provide CSS classes for HTML elements.
		
	- Bind HTML elements to HTML forms.

The **ng-repeat** Directive
	
- The ng-repeat directive clones HTML elements once for each item in a collection (in an array). 

**not my words - from W3school*

### Separate HTML and JavaScript files

*angularjs-4b-controllers.html*

```
<!DOCTYPE html>
<html>
<head>
	<meta charset="UTF-8">
	<title>Angular JS | Controllers 2</title>
	<script src="http://ajax.googleapis.com/ajax/libs/angularjs/1.3.14/angular.min.js"></script>
</head>
<body>
	<h2>Angular JS Controllers Part 2</h2>
	
	<div ng-app="catApp" ng-controller="catsCtrl">
		<ul>
			<li ng-repeat="x in cats">
				{{ x.name + " has color: " + x.color }}
			</li>
		</ul>
	</div>

	<script src="angularjs-4b-controllers.js"></script>
</body>
</html>

```

*angularjs-4b-controllers.js*

```
angular.module('catApp', []).controller('catsCtrl', function($scope){
	$scope.cats = [
		{name : 'Jack', color : 'brown'},
		{name : 'Ted', color : 'black'},
		{name : 'Kit', color : 'white'}
	]
});
```

## Filters

```
<!DOCTYPE html>
<html>
<head>
	<meta charset="UTF-8">
	<title>Angular JS | Filters</title>
	<script src="http://ajax.googleapis.com/ajax/libs/angularjs/1.3.14/angular.min.js"></script>
</head>
<body>
	<h2>Angular JS Filters</h2>
	
	<div ng-app="myAngularApp" ng-controller="myAngularCtrl">
		<label>First Name:</label>
		<input type="text" ng-model="fname" placeholder="John">
		<br><br>
		<label>Last Name:</label>
		<input type="text" ng-model="lname" placeholder="Smith">
		<br><br>
		Your Name is: {{lname + ", " + fname}}
		<br><br>
		
		<!-- "| uppercase" is a filter -->
		Your Fullname is: {{fullName() | uppercase}}

		<br><br><br>

		Quantity: <input type="text" ng-model="qty">
		<br><br>
		Unit Price: <input type="text" ng-model="unitprice">
		<br><br>
		
		<!-- "| currency" is a filter -->
		Total: {{ qty * unitprice | currency }}
	</div>

	<script>
		angular.module('myAngularApp', []).controller('myAngularCtrl', function($scope){
			$scope.fname = "John";
			$scope.lname = "Smith";
			$scope.fullName = function() {
				return $scope.fname + " " + $scope.lname;
			}
		});

	</script>

</body>
</html>
```

## "http" - get JSON

- $http is an XMLHttpRequest object for requesting external data.

- $http.get() reads JSON data from http://www.w3schools.com/angular/customers.php.

- If success, the controller creates a property (names) in the scope, with JSON data from the server. 

```
<!DOCTYPE html>
<html>
<head>
	<meta charset="UTF-8">
	<title>Angular JS | http</title>
	<script src="http://ajax.googleapis.com/ajax/libs/angularjs/1.3.14/angular.min.js"></script>
</head>
<body>
	<h2>Angular JS "http"</h2>
	
	<div ng-app="myAngularApp" ng-controller="myAngularCtrl">
		<ul>
			<li ng-repeat="x in names">
				{{ x.Name + ', ' + x.Country }}
			</li>
		</ul>
	</div>

	<!-- 

	$http is an XMLHttpRequest object for requesting external data.

	$http.get() reads JSON data from http://www.w3schools.com/angular/customers.php.

	If success, the controller creates a property (names) in the scope, with JSON data from the server. 

	-->
	<script>
		// --Shortcut w/o declaring "app"--
		// angular.module('myAngularApp', []).controller('myAngularCtrl', function($scope, $http){
		// });
		
		app = angular.module('myAngularApp', []);
		
		app.controller('myAngularCtrl', function($scope, $http) {
			$http.get("http://www.w3schools.com/angular/customers.php").success(function(response){
				$scope.names = response.records;
			});
		});

	</script>

</body>
</html>
```

## Directives, Filters and Binding

```
<!DOCTYPE html>
<html>
<head>
	<meta charset="UTF-8">
	<title>Angular JS | Directives, Filters and Data Binding</title>
	<script src="http://ajax.googleapis.com/ajax/libs/angularjs/1.3.14/angular.min.js"></script>
</head>
<body>
	<h2>Angular JS Directives, Filters and Data Binding</h2>
	<br><br>
	
	<div ng-app="" ng-init="students= 	[{ name : 'John Smith',	major : 'CIS', tuition : 3000},
										{ name : 'John Doe', 	major : 'CIS', tuition : 2000},
										{ name : 'Jane Doe',	major : 'IBM', tuition : 5000},
										{ name : 'Jack Dan',	major : 'HRT', tuition : 1500},
										{ name : 'Anne Michaels',	major : 'MHR', tuition : 1000},
										{ name : 'Craigs Dave',	major : 'CS', tuition : 500},
										{ name : 'Myo Kyaw',	major : 'CIS', tuition : 200},
										{ name : 'Mark Lutz',	major : 'FRL', tuition : 1000},
										{ name : 'John Flanagan',	major : 'MHR', tuition : 6000},
										{ name : 'Johnny Doos',	major : 'ECE', tuition : 1200},
										{ name : 'Romie Boom',	major : 'ECE', tuition : 2200}, ]">
		
	Name:
	<br />
	<input type="text" ng-model="name"> {{name}}
	<br />
	<ul>
		<li ng-repeat="stud in students | filter:name | orderBy: 'major' ">
			{{stud.name | uppercase}}  - {{stud.major | lowercase}} Major - owes {{stud.tuition | currency}}
		</li>
	</ul>

	</div>
</body>
</html>
```

## Multiple Controllers

```
<!DOCTYPE html>
<html>
<head>
	<meta charset="UTF-8">
	<title>Angular JS | Controller and View (Scope as glue)</title>
	<script src="http://ajax.googleapis.com/ajax/libs/angularjs/1.3.14/angular.min.js"></script>
</head>
<body ng-app="myApp">
	<h2>Angular JS Multiple Controllers</h2>
	<br><br>
	
	<h3>First controller (myCtrl)</h3>
	<div ng-controller="myCtrl">
		<input type="text" ng-model="name">
		<br><br>
		{{name}}
	</div>

	<br><br>
	<hr>
	
	<h3>Another controller (catCtrl)</h3>
	<div ng-controller="catCtrl">
		<ol>
			<li ng-repeat="x in cats">
				{{x}}
			</li>
		</ol>
	</div>
	

	<script>
		// ***** ALT 1 TO CREATE APP AND CONTROLLER *****

		// var app = angular.module("myApp", []);

		// app.controller("myCtrl", function($scope){
		// 	$scope.name = "Myo";
		// });



		// ***** ALT 2 TO CREATE APP AND CONTROLLER ******
		
		var app = angular.module("myApp", []);
		
		var controllers = {};
		
		controllers.myCtrl = function($scope) {
			$scope.name = "Myo";
		};

		controllers.catCtrl = function($scope) {
			$scope.cats = ["Jack", "Joe", "Kitty"];
		}
		
		app.controller(controllers);
		
	</script>
</body>
</html>
```
_____

## Angular JS Scopes 2.0

ng-click:

```
<p ng-init="authorized = true">
  The secret code is
  <span ng-show="authorized">0123</span>
  <span ng-hide="authorized">not for you to see</span>
  <br>
  <input type="button" value="toggle" ng-click="authorized = !authorized">
</p>
```

ng-model:

```
<input type="text" ng-model="title">
is bound to
"<strong>{{title}}</strong>".
Type something in the box!
```

ng-init-and-model:
```
<input type="text" ng-init="title = 'Angular'" ng-model="title">
is bound to
"<strong ng-bind="title"></strong>".
Change it!
```

checkbox:
```
<input type='checkbox' ng-init='checked = true' ng-model='checked'>
is bound to
<strong ng-bind="checked"></strong>.
Change it!
```

checkbox-string:
```
<input type='checkbox' ng-init='feeling = "love it"' ng-model='feeling'
    ng-true-value='"love it"' ng-false-value='"hate it"'>
is bound to
"<strong ng-bind="feeling"></strong>".
Change it!
```

select:
```
<select ng-init='answer = "maybe"' ng-model='answer'>
  <option value='yes' selected>Yes</option>
  <option value='no'>No</option>
  <option value='maybe'>Maybe</option>
</select>
is bound to
"<strong ng-bind="answer"></strong>".
Change it!
```

radios
```
<div ng-init='answer = "maybe"'>
  <input type='radio' ng-model='answer' value='yes'> Yes
  <input type='radio' ng-model='answer' value='no'> No
  <input type='radio' ng-model='answer' value='maybe'> Maybe
  is bound to
  "<strong ng-bind="answer"></strong>".
  Change it!
</div>
```