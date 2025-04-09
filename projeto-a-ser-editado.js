function adicionarAoPedido(produto, preco) {
    let tabela = document.getElementById("carrinho").getElementsByTagName("tbody")[0];
    let linha = tabela.insertRow();
    linha.innerHTML = `<td>${produto}</td><td>R$ ${preco},00</td>`;
  }
