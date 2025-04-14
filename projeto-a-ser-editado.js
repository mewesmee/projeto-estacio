
function adicionarAoPedido(produto, preco) {
  let carrinho = document.getElementById("carrinho").getElementsByTagName("tbody")[0]; // serve paga pegar a tabela carrinho

  for (let i = 0; i < carrinho.rows.length; i++) {                            //
    if (carrinho.rows[i].cells[0] .textContent === produto) {                //
      alert(`"${produto}" ja esta no carrinho, tente mudar a quantidade`);  // verifica se o item ja esta no carrinho
      return;                                                              //
    }
  }

  let linha = carrinho.insertRow();  
  
  linha.innerHTML = `          
    <td>${produto}</td>
    <td>R$ ${preco.toFixed(2).replace('.', ',')}</td>
    <td><input type="number" value="1" min="1" class="quantidade"></td>                                  
    <td><button class="remover" onclick="this.parentNode.parentNode.remove()">Remover</button></td> 
  `;
}

function limparPedido() {
  document.getElementById("carrinho").getElementsByTagName("tbody")[0].innerHTML = ""; // tira os itens do carrinho
}


function finalizarPedido() {
  const carrinho = document.getElementById("carrinho").getElementsByTagName("tbody")[0]; // finalizar pedido
  
  
  if (carrinho.rows.length === 0) {
    alert("Seu carrinho está vazio!");    // verifica se tem itens no carrinho
    return;
  }

  
  let resumo = "<ul>";    // da o total do pedido
  let total = 0;
  
  for (let i = 0; i < carrinho.rows.length; i++) {
    const linha = carrinho.rows[i];
    const produto = linha.cells[0].textContent;
    const preco = parseFloat(linha.cells[1].textContent.replace("R$ ", "").replace(",", "."));
    const quantidade = linha.cells[2].querySelector("input").value;
    const subtotal = preco * quantidade;
    
    resumo += `<li>${quantidade}x ${produto} - R$ ${subtotal.toFixed(2).replace(".", ",")}</li>`;
    total += subtotal;
  }
  
  resumo += `</ul><p><strong>Total: R$ ${total.toFixed(2).replace(".", ",")}</strong></p>`;
  
 
  document.getElementById("resumo-pedido").innerHTML = resumo;
  document.getElementById("popup-confirmacao").style.display = "block"; // Mostra o popup 
  document.getElementById("overlay").style.display = "block";
}

function novoPedido() {
  if (confirm("Deseja fazer um novo pedido? isso vai limpar o seu carrinho atual.")){
    location.reload();
  }
}
