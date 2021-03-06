import React, { useEffect, Fragment } from 'react'
import { Chart } from 'react-google-charts'
import { connect } from 'react-redux'
import { loadPedidos } from '../redux/actions/pedidosActions'
import { loadPrecios } from '../redux/actions/preciosActions'
import { loadProductos } from '../redux/actions/productosActions'
import { MDBContainer, MDBRow, MDBCard, MDBCardTitle, MDBBtn } from 'mdbreact'
import { loadUsuarios } from '../redux/actions/usuariosActions'
import { loadCategorias } from '../redux/actions/categoriasActions'

const Principal = (props) => {

    useEffect(() => {
        props.getPedidos()
        props.getPrecios()
        props.getProductos()
        props.getUsuarios()
        props.getCategorias()
    }, [])

    const getDay = (data, type) => {
        if (data.length > 1) return (type === 'first') ? data[1][0] : data[data.length - 1][0]
    }

    return(<MDBContainer className="mb-5" >
        <MDBRow className="mb-3 mt-2" >
            <MDBCard className="card-body">
                <MDBCardTitle>DASHBOARD AIYU</MDBCardTitle>
            </MDBCard>
        </MDBRow>
        <MDBRow className="mb-2" >
            <MDBBtn
                href="https://aiyu-backend-dashboard.herokuapp.com/api/ventas/excel"
                color="success" >
                Excel ventas
            </MDBBtn>
        </MDBRow>
        <MDBRow className="mb-3" >
            <h3 className="text-center w-100" >Pedidos por día</h3>
            <h5 className="w-100 text-left" >Nº Pedidos por Día</h5>
            {props.pedidos.length > 1 && <Fragment>
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
            {props.precios.length > 1 && <Fragment>
                <span className="w-100 text-left" >Desde {getDay(props.pedidos,'first')} hasta {getDay(props.pedidos,'last')}</span>

                <Chart
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
                />
            </Fragment>}
        </MDBRow>
        <MDBRow className="mb-3">
            <h3 className="text-center w-100" >Productos por día</h3>
            <h5 className="w-100 text-left" >Nº Productos por Día</h5>
            {props.productos.length > 1 && <Fragment>
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
            {props.usuarios.length > 1 && <Fragment>
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
        <MDBRow className="mb-3">
            <h3 className="text-center w-100" >Categorias</h3>
            <h5 className="w-100 text-left" >Todas las categorias</h5>
            {props.categorias.length > 1 && <Fragment>
                {/* <span className="w-100 text-left" >Desde {getDay(props.usuarios,'first')} hasta {getDay(props.usuarios,'last')}</span> */}

                <Chart
                    width={'100%'}
                    height={'300px'}
                    chartType="PieChart"
                    loader={<div>Cargando...</div>}
                    data={props.categorias}
                    options={{
                        is3D: true,
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
        usuarios: state.usuarios.data,
        categorias: state.categorias.data
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getPedidos: () => dispatch(loadPedidos()),
        getPrecios: () => dispatch(loadPrecios()),
        getProductos: () => dispatch(loadProductos()),
        getUsuarios: () => dispatch(loadUsuarios()),
        getCategorias: () => dispatch(loadCategorias())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Principal)