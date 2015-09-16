angular.module('starter.controllers', [])

.controller('sobreCtrl', function($scope) {

  $scope.$on("$ionicView.beforeEnter", function() {

    montharray=new Array("Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec")

    function countup(yr,m,d){
    today=new Date()
    todayy=today.getYear()
    if (todayy < 1000)
    todayy+=1900
    todaym=today.getMonth()
    todayd=today.getDate()
    todaystring=montharray[todaym]+" "+todayd+", "+todayy
    paststring=montharray[m-1]+" "+d+", "+yr
    difference=(Math.round((Date.parse(todaystring)-Date.parse(paststring))/(24*60*60*1000))*1)
    difference+=" dias ao Seu Lado "
    document.getElementById("data").innerHTML = difference;

    }
    //enter the count up date using the format year/month/day
    countup(2014,08,23)


}); //termino da primeira funcao do sobreCtrl




}) //Termino de sobreCtrl

.controller('365Ctrl', function($scope, AppRequest, $ionicModal) {
  function filtro(arrayTextos) {
    for (var i = 0; i < arrayTextos.length; i++) {
      if(arrayTextos[i].liberado == "0"){
        arrayTextos.splice(i);
      }
    }
    return arrayTextos;
  }
  AppRequest.get()
    // then() called when son gets back
    .then(function(data) {
      // promise fulfilles
      $scope.mostrar = filtro(data);


    }, function(error) {
      // promise rejected, could log the error with: console.log('error', error);
      console.log(error);
    });//termino da primeira funcao do 365Ctrl




    $scope.categorias = [
      { categoria: "1"},
      { categoria: "2"},
      { categoria: "3"}
    ];//365Ctrl

    imagens = [
      { link: "img/fotos/1.png"},
      { link: "img/fotos/2.jpg"},
      { link: "img/fotos/3.jpg"},
      { link: "img/fotos/4.jpg"},
      { link: "img/fotos/5.jpg"},
      { link: "img/fotos/6.jpg"},
      { link: "img/fotos/7.jpg"},
      { link: "img/fotos/8.jpg"},
      { link: "img/fotos/9.jpg"},
      { link: "img/fotos/10.jpg"},
      { link: "img/fotos/11.jpg"},
      { link: "img/fotos/12.jpg"},
      { link: "img/fotos/13.jpg"},
      { link: "img/fotos/14.jpg"},
      { link: "img/fotos/15.jpg"},
      { link: "img/fotos/16.jpg"},
      { link: "img/fotos/17.jpg"},
      { link: "img/fotos/18.jpg"},
      { link: "img/fotos/19.jpg"},
      { link: "img/fotos/20.jpg"}
    ];

    function fotoAleatoria(array) {
      var i = Math.floor(Math.random() * array.length);
      return array[i].link;

        }

    // Create the login modal that we will use later
    $ionicModal.fromTemplateUrl('templates/popup_msg.html', {
      scope: $scope
    }).then(function(modal) {
      $scope.modal = modal;
    });

    // Triggered in the Popup modal to close it
    $scope.closePopup = function() {
      $scope.modal.hide();
    };

    // Open the Popup modal
    $scope.openPopup = function(itemMostrar) {
      $scope.modal.show();
      $scope.popupMostrar = itemMostrar;
      $scope.imagem = fotoAleatoria(imagens);
    };



}) //Termino de 365Ctrl

.controller('diaCtrl', function($scope, AppRequest) {

  imagens = [
    { link: "img/fotos/1.png"},
    { link: "img/fotos/2.jpg"},
    { link: "img/fotos/3.jpg"},
    { link: "img/fotos/4.jpg"},
    { link: "img/fotos/5.jpg"},
    { link: "img/fotos/6.jpg"},
    { link: "img/fotos/7.jpg"},
    { link: "img/fotos/8.jpg"},
    { link: "img/fotos/9.jpg"},
    { link: "img/fotos/10.jpg"},
    { link: "img/fotos/11.jpg"},
    { link: "img/fotos/12.jpg"},
    { link: "img/fotos/13.jpg"},
    { link: "img/fotos/14.jpg"},
    { link: "img/fotos/15.jpg"},
    { link: "img/fotos/16.jpg"},
    { link: "img/fotos/17.jpg"},
    { link: "img/fotos/18.jpg"},
    { link: "img/fotos/19.jpg"},
    { link: "img/fotos/20.jpg"}
  ];

  function fotoAleatoria(array) {
    var i = Math.floor(Math.random() * array.length);
    return array[i].link;

      }

      $scope.imagem = fotoAleatoria(imagens);

      function filtro(array) {
        var novoArray = [
          {categoria: "",texto: "",liberado: "",favorito: ""}
        ]
        var j = 0
        novoArray.splice(0);
        for (var i = 0; i < array.length; i++) {
          if(array[i].liberado == "0"){
            novoArray[j] = array[i];
            j++;
          }
        }
        return novoArray;
      }
      function aleatorioTexto(array) {
        var i = Math.floor(Math.random() * array.length);
        console.log(i);
        return array[i];
      }

      AppRequest.get()
        // then() called when son gets back
        .then(function(data) {
          // promise fulfilles
          $scope.mostrar = aleatorioTexto(filtro(data));

        }, function(error) {
          // promise rejected, could log the error with: console.log('error', error);
          console.log(error);
        });

});
