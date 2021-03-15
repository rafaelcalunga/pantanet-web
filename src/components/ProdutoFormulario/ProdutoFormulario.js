import React, { useState } from 'react';
import './ProdutoFormulario.css';

function AdicionarProduto(props) {
	const [nome, setNome] = useState('');
	const [descricao, setDescricao] = useState('');
	const [preco, setPreco] = useState('');

	const adicionarProduto = (event) => {
		event.preventDefault();

		const produto = { nome, descricao, preco };

		fetch(`${process.env.REACT_APP_API_URL}/produtos`, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(produto),
		})
			.then((res) => res.json())
			.then(() => {
				setNome('');
				setDescricao('');
				setPreco('');
				props.obterProdutos();
			});
	};

	return (
		<div className="ProdutoFormulario">
			<form onSubmit={adicionarProduto}>
				<div className="Linha">
					<div className="Coluna">
						<label>Nome</label>
						<input
							type="text"
							name="nome"
							value={nome}
							onChange={(event) => setNome(event.target.value)}
							required
						/>
					</div>
					<div className="Coluna">
						<label>Preço</label>
						<input
							type="number"
							name="preco"
							value={preco}
							onChange={(event) => setPreco(event.target.value)}
							required
						/>
					</div>
				</div>
				<div className="Linha">
					<div className="Coluna">
						<label>Descrição</label>
						<textarea
							type="text"
							name="descricao"
							value={descricao}
							onChange={(event) => setDescricao(event.target.value)}
							required
						/>
					</div>
				</div>
				<button type="submit">Adicionar</button>
			</form>
		</div>
	);
}

export default AdicionarProduto;
