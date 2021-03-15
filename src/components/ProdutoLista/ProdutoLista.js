import React, { useEffect, useState } from 'react';
import Produto from '../Produto/Produto';
import ProdutoFormulario from '../ProdutoFormulario/ProdutoFormulario';

function ProdutoLista() {
	const [produtos, setProdutos] = useState([]);

	useEffect(() => {
		obterProdutos();
	}, []);

	const obterProdutos = () => {
		fetch(`${process.env.REACT_APP_API_URL}/produtos`)
			.then((res) => res.json())
			.then((data) => setProdutos(data))
			.catch((error) => {
				console.error(error);
			});
	};

	return (
		<div>
			<h1>Lista de Produtos</h1>
			<ProdutoFormulario obterProdutos={obterProdutos} />
			{produtos.map((produto) => (
				<Produto
					key={produto.id}
					nome={produto.nome}
					descricao={produto.descricao}
					preco={produto.preco}
				/>
			))}
		</div>
	);
}

export default ProdutoLista;
