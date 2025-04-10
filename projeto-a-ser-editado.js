function adicionarAoPedido(produto, preco) {
  let carrinho = document.getElementById("carrinho").getElementsByTagName("tbody")[0]; 
  let linha = carrinho.insertRow();
  linha.innerHTML = `
    <td>${produto}</td>
    <td>R$ ${preco.toFixed(2).replace('.', ',')}</td>
    <td><input type="number" value="1" min="1" class="quantidade"></td>
    <td><button class="remover" onclick="this.parentNode.parentNode.remove()">Remover</button></td>`;
}

function limparPedido() {
  document.getElementById("carrinho").getElementsByTagName("tbody")[0].innerHTML = ""; 
}

function finalizarPedido(){
    
}
