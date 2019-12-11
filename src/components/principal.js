import React, { useEffect, Fragment } from 'react'
import { Chart } from 'react-google-charts'
import { connect } from 'react-redux'
import { loadPedidos } from '../redux/actions/pedidosActions'
import { loadPrecios } from '../redux/actions/preciosActions'
import { loadProductos } from '../redux/actions/productosActions'
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardTitle } from 'mdbreact'
import { loadUsuarios } from '../redux/actions/usuariosActions'

const Principal = (props) => {

    useEffect(() => {
        props.getPedidos()
        props.getPrecios()
        props.getProductos()
        props.getUsuarios()
    }, [])

    const getDay = (data, type) => {
        if (data.length > 1){
            if (type === 'first'){
                return data[1][0]
            } else {
                return data[data.length-1][0]
            }
        }
    }

    return(<MDBContainer className="mb-5" >
        <MDBRow className="mb-3 mt-2" >
            <MDBCard className="card-body">
                <MDBCardTitle>DASHBOARD AIYU</MDBCardTitle>
            </MDBCard>
        </MDBRow>
        <MDBRow className="mb-3" >
            <h3 className="text-center w-100" >Pedidos por día</h3>
            <h5 className="w-100 text-left" >Nº Pedidos por Día</h5>
            {props.pedidos.length > 0 && <Fragment>
                <span className="w-100 text-left" >Desde {getDay(props.pedidos,'first')} hasta {getDay(props.pedidos,'last')}</span>
            
                <Chart
                    width={'100%'}
                    height={'300px'}
                    chartType="ColumnChart"
                    loader={<div>Cargando...</div>}
                    data={props.pedidos}
                    options={{
                        legend: {
                            position: "none"
                        },
                        chartArea: {
                            top: '10%', // set this to adjust the legend width
                            left: '8%',  // set this eventually, to adjust the left margin
                            height: "80%",
                            width: "100%"
                        },
                        pointsVisible: true
                    }}
                    rootProps={{ 'data-testid': '2' }}
                /> 
            </Fragment>}
        </MDBRow>
        <MDBRow className="mb-3">
            <h3 className="text-center w-100" >Ventas por día</h3>
            <h5 className="w-100 text-left" >Precio por día</h5>
            <span className="w-100 text-left" >Total de precios diarios</span>

            {props.precios.length > 0 && <Chart
                width={'100%'}
                height={'300px'}
                chartType="ColumnChart"
                loader={<div>Cargando...</div>}
                data={props.precios}
                options={{
                    legend: {
                        position: "none"
                    },
                    chartArea: {
                        top: '10%', // set this to adjust the legend width
                        left: '8%',  // set this eventually, to adjust the left margin
                        height: "80%",
                        width: "100%"
                    },
                    pointsVisible: true
                }}
                rootProps={{ 'data-testid': '3' }}
            />}
        </MDBRow>
        <MDBRow className="mb-3">
            <h3 className="text-center w-100" >Productos por día</h3>
            <h5 className="w-100 text-left" >Nº Productos por Día</h5>
            
            {props.productos.length > 0 && <Fragment>
                <span className="w-100 text-left" >Desde {getDay(props.productos,'first')} hasta {getDay(props.productos,'last')}</span>

                <Chart
                    width={'100%'}
                    height={'300px'}
                    chartType="ColumnChart"
                    loader={<div>Cargando...</div>}
                    data={props.productos}
                    options={{
                        legend: {
                            position: "none"
                        },
                        chartArea: {
                            top: '10%', // set this to adjust the legend width
                            left: '8%',  // set this eventually, to adjust the left margin
                            height: "80%",
                            width: "100%"
                        },
                        pointsVisible: true
                    }}
                    rootProps={{ 'data-testid': '2' }}
                /> 
                </Fragment>}
        </MDBRow>
        <MDBRow className="mb-3">
            <h3 className="text-center w-100" >Usuarios</h3>
            <h5 className="w-100 text-left" >Usuarios acumulado por día</h5>

            {props.usuarios.length > 0 && <Fragment>
                <span className="w-100 text-left" >Desde {getDay(props.usuarios,'first')} hasta {getDay(props.usuarios,'last')}</span>

                <Chart
                    width={'100%'}
                    height={'300px'}
                    chartType="ColumnChart"
                    loader={<div>Cargando...</div>}
                    data={props.usuarios}
                    options={{
                        legend: {
                            position: "none"
                        },
                        chartArea: {
                            top: '10%', // set this to adjust the legend width
                            left: '8%',  // set this eventually, to adjust the left margin
                            height: "80%",
                            width: "100%"
                        },
                        pointsVisible: true
                    }}
                    rootProps={{ 'data-testid': '2' }}
                /> 
            </Fragment>}
        </MDBRow>
    </MDBContainer>)
}

const mapStateToProps = state => {
    return {
        pedidos : state.pedidos.data,
        precios : state.precios.data,
        productos : state.productos.data,
        usuarios: state.usuarios.data
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getPedidos: () => dispatch(loadPedidos()),
        getPrecios: () => dispatch(loadPrecios()),
        getProductos: () => dispatch(loadProductos()),
        getUsuarios: () => dispatch(loadUsuarios())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Principal)