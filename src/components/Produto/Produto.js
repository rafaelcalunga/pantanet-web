import React from 'react';
import './Produto.css';

function Produto(props) {
	return (
		<div className="Produto">
			<strong>{props.nome}</strong>
			<div>{props.descricao}</div>
			<div className="preco">R$ {props.preco}</div>
		</div>
	);
}

export default Produto;
