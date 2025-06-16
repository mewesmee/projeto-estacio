<!DOCTYPE html>
<html lang="pt-br">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link href="reset.css" rel="stylesheet"/>
    <link href="style.css" rel="stylesheet"/>
    <title>Nossos Sabores</title>
  </head>
  <body>
    <?php 
    require_once('conectar.php');
    print_r($_REQUEST)
    ?>
      <header>
      <div class="top_page">
      <div class="logotipo" id="logotipo" name="logotipo">
          <img src="https://storage.alboom.ninja/sites/60238/albuns/738886/delcia_aca-11.png?t=1604943504" alt="logo icecream" />
      </div>
      
         
        <div class="menu" name="menu" id="menu">
          <ul>
            <li><a href="index.html">Home</a></li>
            <li><a href="cardapio.php">Cardápio</a></li>
            <li><a href="carrinho.html">Carrinho</a></li>
            <li><a href="cadastro.php">Cadastro</a></li>
            <li><a href="#">Mapa do Site</a></li>
            <li><a href="#">Sobre</a></li>
            <li><a href="#">Ajuda</a></li>
          </ul>
        </div>
      </div>
       
    </header>
    <section name="cardapio">
      <div class="titulo">Nosso Cardápio</div>
      <table class="cardapio" id="cardapio">
        <thead>
            <tr>
                <th>Produto</th>
                <th>Descrição</th>
                <th>Preço (R$)</th>
                <th>Ações</th>
                <th>Quantidade</th>
            </tr>
        </thead>
        <tbody>
            <?php 
              $result = pg_query($conn,'SELECT * FROM "PRODUTOS"');
              while ($row = pg_fetch_assoc($result)) {
                echo
                "
                <tr>
                <td class='produto' >$row[PRODUTO]</td>
                <td class='descricao' >$row[DESCRICAO]</td>
                <td class='price' > $row[PREÇO],00</td>
                <td>
                    <button onclick='adicionarQuantidade(this)'>Adicionar</button>
                    <button onclick='removerQuantidade(this)'>Remover</button>
                </td>
                <td><input type='number' class='quantidade' value='0' min='0'></td>
              </tr>
                ";
              }
            ?>
        </tbody>
    </table>
    
      
      
      
      
    </section>
    <section name="carrinho">
      <div class="container" style="margin-top: 40px;">
  <h2 style="color: #742278; text-align: center; margin-bottom: 20px;">Pedido</h2>
  
  <table id="carrinho" class="cardapio">
    <thead>
      <tr>
        <th>Item</th>
        <th>Preço</th>
        <th>Quantidade</th>
      </tr>
    </thead>
    <tbody id="itemlista">
      <!-- itens escolhidos -->
    </tbody>
  </table>
  
  <br>
  <button id="finalizarPedido" style="height:50px;display:flex; padding: 10px 20px;margin:25px auto; background-color: #4caf50; color: white; border: none; border-radius: 5px; cursor: pointer;" onclick="finalizar()">
    Finalizar Pedido
  </button>
</div>
</section>
<script src="https://cdn.jsdelivr.net/npm/sweetalert2@11/dist/sweetalert2.all.min.js"></script>
<script src="script.js"></script>

</body>