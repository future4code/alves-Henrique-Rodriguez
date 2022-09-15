import React from "react";
import axios from "axios";
import TelaDetalhe from "./TelaDetalhe";

export default class TelaUsuario extends React.Component {
    state = {
        tela: true,
        idAtual: '',
        usuarios: this.props.usuarios,
        query : ''
    }

    trocaTela = (tela, id) => {
        this.setState({ tela: tela })
        id && this.setState({ idAtual: id })
    }
    tela = () => {
        switch (this.state.tela) {
            case false:
               return <div>
                    <TelaDetalhe
                        id={this.state.idAtual}
                        remover = {this.removeUser}
                        trocar = {this.trocaTela}
                    />
                </div>

            default:
               return <>
                {this.state.usuarios.map((users) => {
                    return <div>
                        <h3 onClick={() => this.trocaTela(false, users.id)}>{users.name}</h3>
                        <button onClick={() => {
                            if (window.confirm('Remover este usuário?')) { this.removeUser(users.id) }
                        }}>Remover</button>

                    </div>
                })}
                <button onClick = {()=>this.props.detalhe('telaCadastro')}>Voltar</button>
                </>
        }
    }
    queryOnChange = (e) => {
        this.setState({query : e.target.value})     
    }
    querySubmit = () => {
        this.state.query? 
        axios.get(
            `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/search?name=${this.state.query}&email=`,

            {
              headers: {
                Authorization: "henrique-rodriguez-alves"
              }
            })
            .then((resposta) => {
              this.setState({usuarios : resposta.data})

            }) : this.setState({usuarios : this.props.usuarios})
    }
    removeUser = (id) => {

        axios.delete(
            `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`,
            {
                headers: {
                    Authorization: "henrique-rodriguez-alves"
                }
            })
            .then((resposta) => {
                alert('Usuário Removido')
                this.props.pegaUsuarios()

            })
            .catch((erro) => {
                alert(erro.response.data.message)
            })

    }
    render() {
        return (
            <ul>
                    <h2>Usuários:</h2>
                    <input
                    value ={this.state.query}
                    onChange ={this.queryOnChange}
                    /><button onClick={this.querySubmit}>Buscar</button>
                    {this.tela()}
                </ul>
        )
    }
}