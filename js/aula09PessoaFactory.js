app.factory('Pessoa',function(){
    
    console.log("Criou o objeto Pessoa");
    
    var Pessoa = function(){
        
        console.log("Instanciou o objeto Pessoa");
        
        this.nome = "Eder";
        this.idade = 31;
        
        this.comprimentar = function(){
            return "Olá " + this.nome + " !";
        }
    }
    return Pessoa;
});