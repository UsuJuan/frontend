import React, { useEffect } from 'react'
import { Chart } from 'react-google-charts'
import { connect } from 'react-redux'
import { loadPedidos } from '../redux/actions/pedidosActions'
import { loadPrecios } from '../redux/actions/preciosActions'
import { loadProductos } from '../redux/actions/productosActions'
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardTitle } from 'mdbreact'

const Principal = (props) => {

    useEffect(() => {
        props.getPedidos()
        props.getPrecios()
        props.getProductos()
    }, [])

    return(<MDBContainer>
        <MDBRow className="mb-3 mt-2" >
            <MDBCard className="card-body">
                <MDBCardTitle>DASHBOARD</MDBCardTitle>
            </MDBCard>
        </MDBRow>
        <MDBRow className="mb-3" >
            <MDBCard className="card-body">
                <MDBCardTitle>Chart Pedidos</MDBCardTitle>
                <MDBCol>
                        {/* PEDIDOS */}
                        {props.pedidos.length > 0 && <Chart
                            height={'300px'}
                            chartType="Bar"
                            loader={<div>Cargando...</div>}
                            data={props.pedidos}
                            options={{
                                chart: {
                                    title: 'Nº Pedidos x Día',
                                    subtitle: 'Desde el inicio hasta hoy',
                                },
                            }}
                            rootProps={{ 'data-testid': '2' }}
                        /> }
                </MDBCol>
            </MDBCard>
        </MDBRow>
        <MDBRow className="mb-3">
            <MDBCard className="card-body">
                <MDBCardTitle>Chart Precios</MDBCardTitle>
                <MDBCol>
                    {/* PRECIOS */}
                    {props.precios.length > 0 && <Chart
                        height={'400px'}
                        chartType="Line"
                        loader={<div>Cargando...</div>}
                        data={props.precios}
                        options={{
                            chart: {
                                title: 'Precios x Día',
                                subtitle: 'total de precios diario',
                            },
                        }}
                        rootProps={{ 'data-testid': '3' }}
                    />}
                </MDBCol>
            </MDBCard>
        </MDBRow>
        <MDBRow className="mb-3">
            <MDBCard className="card-body">
                <MDBCardTitle>Chart Productos</MDBCardTitle>
                <MDBCol>
                    {/* PRODUCTOS */}
                    {props.productos.length > 0 && <Chart
                        height={'300px'}
                        chartType="Bar"
                        loader={<div>Cargando...</div>}
                        data={props.productos}
                        options={{
                            chart: {
                                title: 'Nº Productos x Día',
                                subtitle: 'Desde el inicio hasta hoy',
                            },
                        }}
                        rootProps={{ 'data-testid': '2' }}
                    /> }
                </MDBCol>
            </MDBCard>
        </MDBRow>
    </MDBContainer>)
}

const mapStateToProps = state => {
    return {
        pedidos : state.pedidos.data,
        precios : state.precios.data,
        productos : state.productos.data
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getPedidos: () => dispatch(loadPedidos()),
        getPrecios: () => dispatch(loadPrecios()),
        getProductos: () => dispatch(loadProductos())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Principal)