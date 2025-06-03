var compras = []
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
function adicionarAoPedido(produto, preco,quantidade) {
	let carrinho = document.getElementById("itemlista"); // serve paga pegar a tabela carrinho
	carrinho.innerHTML = ""
	let total = 0
	for(i=0 ;i < compras.length;i++)
		{
			carrinho.innerHTML += ` <tr>         
				<td class="selectProd" >${compras[i].produto}</td>
				<td class="selectPrice" >R$ ${compras[i].preco}</td>
				<td class="selectquantidade">${compras[i].quantidade} </td>
				</tr>								  
			`
			total += parseFloat(compras[i].preco)*parseFloat(compras[i].quantidade)
		}
	carrinho.innerHTML += `<tr style='textalising: center'>Total : RS ${total}</tr>`
	
	
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

function enviarMensagem() {
	
	const numero = "5521970124125";
	const produtos = document.querySelectorAll(".selectProd")
	const preços = document.querySelectorAll(".selectPrice")
	const quantidade = document.querySelectorAll(".selectquantidade")
	console.log(quantidade)
	let total = 0
	let mensagem =`Olá, gostaria de fazer o pedido: \n`
	for(let i = 0; i < produtos.length; i++)
		{
			mensagem += `produto:${produtos[i].innerHTML} quantidade: ${quantidade[i].innerText} preço unitario:${preços[i].innerHTML} \n`
			let asNuber = parseFloat(preços[i].innerHTML.replace(",",".").replace("R$ ",""))
			console.log(quantidade.innerText)
			total += asNuber*parseInt(quantidade[i].innerText)
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
	const produto = linha.querySelector('.produto').innerText;
	const descricao = linha.querySelector('.descricao').innerText;
	const preco = linha.querySelector('.price').innerText;
	inputQuantidade.value = parseInt(inputQuantidade.value) + 1;
	salvarEditarSessionStorage(produto,descricao,preco,inputQuantidade.value)
	adicionarAoPedido(produto, preco,inputQuantidade.value)
	

}
function salvarEditarSessionStorage(produto,descricao,preco,quantidade)
{
	const dadosLinha = {
		produto: produto,
		descricao: descricao,
		preco: preco,
		quantidade: quantidade
	};
	let repetido = false
	for(i=0;i < compras.length;i++)
		{
			if(compras[i].produto == produto)
				{
					compras[i].quantidade = parseInt(compras[i].quantidade) + 1
					repetido = true
				}
				
		}
	if(repetido === false){compras.push(dadosLinha)}
	for(i=0;i < compras.length;i++)
		{
			
		}
	
}
function deletarEditarSessionStorage(produto,descricao,preco,quantidade)
{
	const dadosLinha = {
		produto: produto,
		descricao: descricao,
		preco: preco,
		quantidade: quantidade
	};
	let repetido = false
	for(i=0;i < compras.length;i++)
		{
			if(compras[i].produto == produto)
				{
					compras[i].quantidade = parseInt(compras[i].quantidade) - 1
					if (compras[i].quantidade <= 0)
						{
							compras.splice(i,1)
						}
					repetido = true
				}
				
		}
	if(repetido === false){compras.push(dadosLinha)}
	for(i=0;i < compras.length;i++)
		{
			
		}
	
}


  function removerQuantidade(botao) {
	const linha = botao.closest('tr');
	const inputQuantidade = linha.querySelector('.quantidade');
	const produto = linha.querySelector('.produto').innerText;
	const descricao = linha.querySelector('.descricao').innerText;
	const preco = linha.querySelector('.price').innerText;
	
	if(inputQuantidade.value <= 0)
		{
			inputQuantidade.value = 0
		}
	else
	{
		inputQuantidade.value -= 1 
		deletarEditarSessionStorage(produto,descricao,preco,inputQuantidade.value)
		adicionarAoPedido(produto, preco,inputQuantidade.value)
	}
	{
		
	}
	
}
