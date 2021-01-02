import React from 'react'
import PropTypes from 'prop-types'
import { CChartBar } from '@coreui/react-chartjs'
const { getColor } = require('@coreui/utils');

const ChartBarSimple = (props:any) => {

  const {
    backgroundColor,
    pointHoverBackgroundColor,
    dataPoints,
    label,
    pointed,
    style,
    ...attributes
  } = props

  const defaultDatasets = (()=>{
    return [
      {
        data: dataPoints,
        backgroundColor: getColor(backgroundColor),
        pointHoverBackgroundColor: getColor(pointHoverBackgroundColor),
        label: label,
        barPercentage: 0.5,
        categoryPercentage: 1
      }
    ]
  })()

  const defaultOptions = (()=>{
    return {
      maintainAspectRatio: false,
      legend: {
        display: false
      },
      scales: {
        xAxes: [{
          display: false
        }],
        yAxes: [{
          display: false
        }]
      }
    }
  })()

  // render
  return (
    <CChartBar
      {...attributes}
      datasets={defaultDatasets}
      options={defaultOptions}
      labels={label}
      style={style}
    />
  )
}

ChartBarSimple.propTypes = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string,
  //
  backgroundColor: PropTypes.string,
  pointHoverBackgroundColor: PropTypes.string,
  dataPoints: PropTypes.array,
  label: PropTypes.string,
  pointed: PropTypes.bool,
  style: PropTypes.any
};

ChartBarSimple.defaultProps = {
  backgroundColor: 'rgba(0,0,0,.2)',
  dataPoints: [10, 22, 34, 46, 58, 70, 46, 23, 45, 78, 34, 12],
  label: 'Sales'
};

export default ChartBarSimple
