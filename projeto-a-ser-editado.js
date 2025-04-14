function adicionarAoPedido(produto, preco) {
	let carrinho = document.getElementById("carrinho").getElementsByTagName("tbody")[0]; 
	let linha = carrinho.insertRow();
	linha.innerHTML = `
		<td class="selectProd" >${produto}</td>
		<td class="selectPrice" >R$ ${preco.toFixed(2).replace('.', ',')}</td>
		<td><input type="number"  class="quantidade" placehorde= '45' value="1" ></td>
		<td><button class="remover" onclick="this.parentNode.parentNode.remove()">Remover</button></td>`;
}

function limparPedido() {
	document.getElementById("carrinho").getElementsByTagName("tbody")[0].innerHTML = ""; 
}

function finalizarPedido(){
		
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
	window.open(`https://wa.me/${numero}?text=${mensagem1}`)
}