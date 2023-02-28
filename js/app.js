var app = angular.module('myApp', ['ngRoute'])

app.controller('appCtrl', function ($scope, $http) {
    $http.get("data.json").then(function (response) {
        $scope.product = response.data.product
        $scope.account = response.data.account
    })

    $scope.info2 = {
        name : "",
        username: "",
        password: ""
    }
    $scope.addToCart = function (proId) {
        $scope.cart = [];
        a = localStorage.getItem('cart');
        if(a==undefined){
            b = [];
        }else{
            b = JSON.parse(this.a);

        }
        carrt = (localStorage.getItem('cart') != null) ? b : [];;
        totalPrice = 0;
        totallPrice = 0;
        $scope.product.forEach(element => {
            if(element.id == proId){
                $scope.cart.push(element);
            }
       });
       add(proId,cart);
       console.log(carrt);
    }
    function checkproduct(pro, id) {

        for (let index = 0; index < pro.length; index++) {
          if (pro[index].id == id) {
            return pro[index];
          }
        }
        return false;
      }
    
    function  checkcart(cart, id) {
    
        for (let index = 0; index < cart.length; index++) {
          if (cart[index].id == id) {
            return index;
          }
        }
        return -1;
      }
    function add(id, arr) {
        var check = checkproduct(arr, id);
        if (check) {
          let demo = checkcart(this.carrt, id);
          if (demo >= 0) {
            console.log(this.carrt[demo]);
            this.carrt[demo].qty += 1;
            localStorage.setItem("cart", JSON.stringify(this.carrt));
          } else {
            this.carrt.push(check);
            localStorage.setItem("cart", JSON.stringify(this.carrt));
          }
        }
      }
    $scope.getvalues = function () {
        console.log($scope.info2);
        check = false
        $scope.account.forEach(element => {
            console.log(element.username + $scope.info2.username)
            if(element.username == $scope.info2.username &&element.password == $scope.info2.password){
               check = true;
               $scope.info2.name = element.name;
            }else{
               
            }
        });
        
        if(check){
            localStorage.setItem('login',JSON.stringify($scope.info2));
        }else{
            alert("sai thong tin")
             window.location.href="http://localhost/techwiz/#!/login";
              
        }
    }
    


})


app.config(function ($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl: "view/home.html"
        })
        .when("/fetival", {
            templateUrl: "view/fetival.html"
        })
        .when("/news", {
            templateUrl: "view/news.html"
        })
        .when("/tour", {
            templateUrl: "view/tour.html"
        })
        .when("/contact", {
            templateUrl: "view/contact.html"
        })
        .when("/login", {
            templateUrl: "view/login.html"
        })
        .when("/register", {
            templateUrl: "view/register.html"
        })
});