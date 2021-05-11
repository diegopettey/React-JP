import React from 'react';
import {Popover, PopoverHeader, PopoverBody, Table, Button, Badge} from 'reactstrap';
import {listaCarrito} from './listaCarrito.json';

class Carro extends React.Component{
    constructor(){
        super();
        this.state = {
            popoverOpen:false,
            listaCarrito
        };

        this.toggle = this.toggle.bind(this);
        
    }

    toggle(){
        this.setState(prevState => ({
            popoverOpen: !prevState.popoverOpen
        }));
    }

    sumaProductos(){
        var total = 0;
        var suma = this.state.listaCarrito.map(
            (listaCarrito) => {
                
                total += parseInt(listaCarrito.precio) * 1000
                return(total)
                }
        )
          
    }

    render() {
        const arregloCarrito = this.state.listaCarrito.map(
            (listaCarrito, i) => {
                return (
                    <tr>
                        <td>{(i += 1)}</td>
                        <td>{listaCarrito.titulo}</td>
                        <td>{listaCarrito.precio}</td>
                    </tr>
                );
            }
        )
        return(
        <div>
            <Button id="Popover1" color="info">
                <span className="material-icons">shopping_cart</span>
                <Badge color="secondary" id="secondbadge">{listaCarrito.length}</Badge>
            </Button>
            <Popover placement="bottom" isOpen={this.state.popoverOpen} target="Popover1" toggle={this.toggle}>
                <PopoverHeader>Listado de compras</PopoverHeader>
                <PopoverBody>
                    <Table>
                         <thead>
                            <tr>
                                <th>#</th>
                                <th>Producto</th>
                                <th>Precio</th>
                            </tr>
                        </thead>
                        <tbody>
                            {arregloCarrito}
                        </tbody>
                        <tfoot>
                            <th>Total: </th>
                            <th> </th>
                            <th>$ {Intl.NumberFormat("de-DE").format(this.sumaProductos())}</th>
                        </tfoot>

                    </Table>
                </PopoverBody>
            </Popover>
        </div>

        );
    }
}

export default Carro;

//map recorre la listaCarrito
//this. hace una llamada al método