app.controller("aula07Controller", function ($scope) {
    
   // $scope.nomes = ['Eder', 'Daniel', 'Tiago', 'Maria', 'José'];
    
    $scope.pessoas = [];
    
    $scope.pessoas.push(
        {nome: "Eder", idade: 31, status: false}
    );
    
    $scope.pessoas.push(
        {nome: "Daniel", idade: 31, status: false}
    );
    
    $scope.pessoas.push(
        {nome: "Tiago", idade: 31, status: false}
    );
    
    $scope.pessoas.push(
        {nome: "Maria", idade: 31, status: false}
    );
    
    $scope.pessoas.push(
        {nome: "José", idade: 31, status: false}
    );
    
    console.log($scope.pessoas);
    
    $scope.adcionaPessoa = function(){
        var nome = document.getElementById("nomepessoa");
        var idade = document.getElementById("idadepessoa");
        
        $scope.pessoas.push(
            {nome: nome.value,idade: idade.value}
        );
        
        nome.value = "";
        idade.value = "";
    };
    
});