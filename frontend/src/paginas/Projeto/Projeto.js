import React, {Component} from 'react'
import Modal from 'react-responsive-modal'
import logo from './loguinho.png'
import logoOng from './hex1.png'
import './Projeto.css'

class Projeto extends Component{
    constructor(props){
        super(props)
    
        this.state = {
        open: false,
        }
    }

     
    onOpenModal = () => {
        this.setState({ open: true })
        
    }
     
    onCloseModal = () => {
        this.setState({ open: false });
    }

    
    render(){
        const {open} = this.state;
        return(
            <main className="projeto">
                <img id="logoOng" src={logoOng}/>
                <section className="projeto--section">
                    <div>
                        <h3><img className="loguinho" src={logo}/>SOBRE A ENTIDADE:</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quis laoreet tellus. Donec dictum id justo in lobortis. Aliquam nibh ligula, laoreet et mollis in, venenatis in diam. Maecenas efficitur mattis turpis ac porta. Etiam sit amet malesuada justo. Nulla eu imperdiet turpis. Mauris consequat sollicitudin sapien id mattis. Nullam quis ipsum lorem.</p>
                    </div>
                    <div id="dados">
                        <div className="alinhar"> 
                            <h3><img className="loguinho" src={logo}/>O QUE VOU DESENVOLVER?</h3>
                            <p>Identidade visual completa</p>
                        </div>
                        <div className="alinhar">
                            <h3><img className="loguinho" src={logo}/>PRAZO DE ENTREGA:</h3>
                            <p>02 meses</p>
                        </div>
                    </div>
                    <div id="botao-projeto">
                        <button className="button-projeto" onClick={this.onOpenModal}>QUERO FAZER ESSE PROJETO!</button>
                        <Modal open={open} onClose={this.onCloseModal}>
                            <div className="modal">
                            <h4>FEITO!</h4>
                            <p>
                                A entidade tem até 3 dias úteis para escolher.
                            </p>    
                            <p>Você receberá um alerta informando se foi escolhido.</p>  
                            <p class="tks">Obrigado!!</p>
                            </div>
                        </Modal>
                    </div>
                </section>
            
            </main>
            )
        }
    }
    
    export default Projeto