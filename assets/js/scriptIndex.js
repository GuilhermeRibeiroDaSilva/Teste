const produtosLocalStorage = JSON.parse(localStorage.getItem("Produtos"))

const listaProdutos = document.getElementById("lista-produtos")
// Usar o .map() para escrever no html os produtos
// '' apóstrofo ou aspas simples
// "" aspas duplas
// `` crase ${variavel}
listaProdutos.innerHTML = 
produtosLocalStorage.map((produto) => `
   <tr>
        <td>${produto.nome}</td>
        <td>R$ ${Number(produto.preco).toFixed(2)}</td>
        <td>${produto.categoria}</td>
    </tr>
`).join("")


