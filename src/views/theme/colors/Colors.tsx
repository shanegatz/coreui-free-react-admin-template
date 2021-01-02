import React, { useEffect, useState, createRef } from 'react'
import classNames from 'classnames'
import {
  CRow,
  CCol,
  CCard,
  CCardHeader,
  CCardBody
} from '@coreui/react'
import { DocsLink } from '../../../reusable'

const { rgbToHex } = require('@coreui/utils');

const ThemeView = () => {
  const [color, setColor] = useState('rgb(255, 255, 255)')
  const ref = createRef() as any;

  useEffect(() => {
    const el = ref.current.parentNode.firstChild
    const varColor = window.getComputedStyle(el).getPropertyValue('background-color')
    setColor(varColor)
  }, [ref])

  return (
    <table className="table w-100" ref={ref}>
      <tbody>
      <tr>
        <td className="text-muted">HEX:</td>
        <td className="font-weight-bold">{ rgbToHex(color) }</td>
      </tr>
      <tr>
        <td className="text-muted">RGB:</td>
        <td className="font-weight-bold">{ color }</td>
      </tr>
      </tbody>
    </table>
  )
}

interface ThemeProps {
  className: string;
  label: string;
}

const ThemeColor = ({className, label}: ThemeProps) => {
  const classes = classNames(className, 'theme-color w-75 rounded mb-3');

  return (
    <CCol xl="2" md="4" sm="6" xs="12" className="mb-4">
      <div className={classes} style={{paddingTop: '75%'}}></div>
      <h6>{label}</h6>
      <ThemeView />
    </CCol>
  );
}

const Colors = () => {
  return (
    <>
      <CCard>
        <CCardHeader>
          Theme colors
          <DocsLink href="https://coreui.io/docs/utilities/colors/"/>
        </CCardHeader>
        <CCardBody>
          <CRow>
            <ThemeColor className="bg-primary" label="Brand Primary Color" />
            <ThemeColor className="bg-secondary" label="Brand Secondary Color"/>
            <ThemeColor className="bg-success" label="Brand Success Color" />
            <ThemeColor className="bg-danger" label="Brand Danger Color" />
            <ThemeColor className="bg-warning" label="Brand Warning Color" />
            <ThemeColor className="bg-info" label="Brand Info Color" />
            <ThemeColor className="bg-light" label="Brand Light Color" />
            <ThemeColor className="bg-dark" label="Brand Dark Color" />
          </CRow>
        </CCardBody>
      </CCard>
      <CCard>
        <CCardHeader>
          Grays
        </CCardHeader>
        <CCardBody>
          <CRow className="mb-3">
            <ThemeColor className="bg-gray-100" label="Gray 100 Color" />
            <ThemeColor className="bg-gray-200" label="Gray 200 Color" />
            <ThemeColor className="bg-gray-300" label="Gray 300 Color" />
            <ThemeColor className="bg-gray-400" label="Gray 400 Color" />
            <ThemeColor className="bg-gray-500" label="Gray 500 Color" />
            <ThemeColor className="bg-gray-600" label="Gray 600 Color" />
            <ThemeColor className="bg-gray-700" label="Gray 700 Color" />
            <ThemeColor className="bg-gray-800" label="Gray 800 Color" />
            <ThemeColor className="bg-gray-900" label="Gray 900 Color" />
          </CRow>
        </CCardBody>
      </CCard>
    </>
  )
}

export default Colors
