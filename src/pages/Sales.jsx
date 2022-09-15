import React, { useState } from 'react';
import Select from 'react-select'
import Highcharts from 'highcharts/highstock'
import HighchartsReact from 'highcharts-react-official'
import data from '../data/sales.json'
require('highcharts/modules/map')(Highcharts);


function getAllCategories(data) {
  const categories = [];
  data.forEach(d => {
    if (!categories.includes(d.category)) {
      categories.push(d.category);
    }
  });
  return categories.map(c => ({ value: c, label: c }));
}

function getAllProducts(data, category) {
  const products = [];
  data.forEach(d => {
    if (d.category === category && !products.includes(d.product)) {
      products.push(d.product);
    }
  });
  return products.map(c => ({ value: c, label: c }));
}

function getAllBrands(data, category, product) {
  const brands = [];
  data.forEach(d => {
    if (d.category === category && d.product === product && !brands.includes(d.brand)) {
      brands.push(d.brand);
    }
  });
  return brands.map(c => ({ value: c, label: c }));
}

function getSales(data, category, product, brand) {
  for (let i = 0; i < data.length; i++) {
    if (data[i].category === category && data[i].product === product && data[i].brand === brand) {
      return data[i].sales;
    }
  }
}


const Sales = () => {
  const [category, setCategory] = useState(null);
  const [product, setProduct] = useState(null);
  const [sales, setSales] = useState([]);


  const options = {
    chart: {
      type: "column"
    },
    title: {
      text: 'Sales By Month for:'
    },
    series: [
      {
        name: 'Ventas',
        color: '#46A0E9',
        data: sales.map(s => s.amount)
      }
    ],
    xAxis: {
      categories: sales.map(s => s.month),
      crosshair: true
    },
  
  };
  
  const onChangeCategory = (e) => {
    setCategory(e.value);
    setProduct(null);
  }
  
  const onChangeProduct = (e) => {
    setProduct(e.value);
  }
  
  const onChangeBrand = (e) => {
    setSales(getSales(data, category, product, e.value));
  }

  return (
    <>
      <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly' }}>
        <div style={{ width: '200px' }}>Categoria: <Select onChange={onChangeCategory} options={getAllCategories(data)} /></div>
        <div style={{ width: '200px' }}>Producto: <Select onChange={onChangeProduct} options={getAllProducts(data, category)} /></div>
        <div style={{ width: '200px' }}>Marca: <Select onChange={onChangeBrand} options={getAllBrands(data, category, product)} /></div>
      </div>
      <HighchartsReact
        options={options}
        highcharts={Highcharts}
      />
    </>
  )
};

export default Sales;
