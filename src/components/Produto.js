import React from 'react';

function Produto(props) {
	return (
		<div>
			<strong>{props.nome}</strong>
			<div>{props.descricao}</div>
			<div>{props.preco}</div>
		</div>
	);
}

export default Produto;
