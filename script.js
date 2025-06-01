function alert()
{
	alert('kfsdjlkfds')
}
function finalizar()
{
	Swal.fire(
		'Pedido feito',
		'voce sera direcionado para o whatsaap para finalizar seu pedido',
		'success'
	);
	setTimeout(enviarMensagem,2000)
}
// A função adicionar ao pedido cria um elemento DOM InnerHtml
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
		<td class="selectProd" >${produto}</td>
		<td class="selectPrice" >R$ ${preco.toFixed(2).replace('.', ',')}</td>
		<td><input type="number"  class="quantidade"  value="1" ></td>                                  
		<td><button class="remover" onclick="this.parentNode.parentNode.remove()">Remover</button></td> 
	`;
}
function removerQuantidade()
{
	
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
function enviarMensagem() {
	
	const numero = "5521970124125";
	const produtos = document.querySelectorAll(".selectProd")
	const preços = document.querySelectorAll(".selectPrice")
	const quantidade = document.querySelectorAll(".quantidade")
	console.log(quantidade)
	let total = 0
	let mensagem =`Olá, gostaria de fazer o pedido: \n`
	for(let i = 0; i < produtos.length; i++)
		{
			mensagem += `produto:${produtos[i].innerHTML} quantidade: ${quantidade[i].valueAsNumber} preço unitario:${preços[i].innerHTML} \n`
			let asNuber = parseFloat(preços[i].innerHTML.replace(",",".").replace("R$ ",""))
			total += asNuber*quantidade[i].valueAsNumber
		}
	total = total.toString().replace(",",".")
	mensagem += `Total: RS ${total}`
	console.log(mensagem)
	const mensagem1 =encodeURIComponent(mensagem)
	window.open(`https://wa.me/${numero}?text=${mensagem1}`)}

// Event onclick
function adicionarQuantidade(botao) {
    const linha = botao.closest('tr');
    const inputQuantidade = linha.querySelector('.quantidade');
    inputQuantidade.value = parseInt(inputQuantidade.value) + 1;

}


  function removerQuantidade(botao) {
    const linha = botao.closest('tr');
    const inputQuantidade = linha.querySelector('.quantidade');
    const quantidadeAtual = parseInt(inputQuantidade.value);

    if (quantidadeAtual > 0) {
      inputQuantidade.value = quantidadeAtual - 1;}}
