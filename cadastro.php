<!DOCTYPE html>
<html lang="pt-br">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link href="style.css" rel="stylesheet"/>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossorigin="anonymous">
    <title>Acai Delicia</title>
  </head>
  <body>
    <header>
      <div class="top_page">    
      <div class="logotipo" id="logotipo" name="logotipo">
          <img src="https://storage.alboom.ninja/sites/60238/albuns/738886/delcia_aca-11.png?t=1604943504" alt="logo icecream" />
      </div>
      
         
        <div class="menu" name="menu" id="menu">
          <ul>
            <li><a href="index.html">Home</a></li>
            <li><a href="cardapio.html">Cardápio</a></li>
            <li><a href="carrinho.php">Carrinho</a></li>
            <li><a href="cadastro.php">Cadastro</a></li>
            <li><a href="#">Mapa do Site</a></li>
            <li><a href="popUpConfirmacao.html">Sobre</a></li>
            <li><a href="#">Ajuda</a></li>
          </ul>
        </div>
      </div>
      
    </header>
    <h2>Login </h2>
    <form class="formulario" action="login.php" method="post">
         <Label>email:</Label>
          <input id="email" name="email" required/>
         <Label>senha:</Label>
          <input type="password" id="senha" name="senha">
          <br>
         <input type="submit" /> 
         <br><br><br><br><br><br>
         <span style="margin: 0 auto;"><a href="criarconta.php">Não Possui conta? Clique aqui </a></span>
      </form>
    </body>
