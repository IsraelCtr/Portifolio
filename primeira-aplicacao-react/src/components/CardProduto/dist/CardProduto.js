"use strict";
exports.__esModule = true;
require("./CardProduto.scss");
var CardProduto = function (_a) {
    var id = _a.id, nome = _a.nome, precoCheio = _a.precoCheio, precoDesconto = _a.precoDesconto;
    return (React.createElement(React.Fragment, null,
        React.createElement("div", { className: 'produtoimg' },
            React.createElement("img", { src: "", alt: "" }),
            React.createElement("ul", { className: "listaEstilo" },
                React.createElement("li", { className: "idProduto" }, id),
                React.createElement("li", { className: 'nomeProduto' },
                    nome,
                    "."),
                React.createElement("li", { className: 'pre\u00E7oCheio' },
                    "$ ",
                    precoCheio,
                    "."),
                React.createElement("li", { className: 'nomeProduto' },
                    "$ ",
                    precoDesconto,
                    ".")))));
};
exports["default"] = CardProduto;
