app.controller("aula08Controller", function ($scope) {
    
    $scope.estados = ['RS','SP','RJ','SC'];
    $scope.pessoa = novaPessoa();
    
    $scope.pessoas = [] ;
    
    $scope.salvarPessoa = function(pessoa){
        $scope.pessoas.push(pessoa);
        $scope.pessoa = novaPessoa();
    }
});
    
function novaPessoa(){
    return {
        nome:"",
        email:"",
        idade:0,
        sexo:"f",
        estado:"RJ"}
}