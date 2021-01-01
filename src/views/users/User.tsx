import React from 'react'
import { CCard, CCardBody, CCardHeader, CCol, CRow } from '@coreui/react'
import CIcon from '@coreui/icons-react'

import usersData from './UsersData'

const User = (props: any) => {
  const { match } = props;
  const user = usersData.find( user => user.id.toString() === match.params.id)

  return (
    <CRow>
      <CCol lg={6}>
        <CCard>
          <CCardHeader>
            User id: {match.params.id}
          </CCardHeader>
          <CCardBody>
            {
              user ?
                <table className={"table table-striped table-hover"}>
                  <tbody>
                    <tr key="id">
                      <td>id:</td>
                      <td><strong>{user.id}</strong></td>
                    </tr>
                    <tr key="name">
                      <td>name:</td>
                      <td><strong>{user.name}</strong></td>
                    </tr>
                    <tr key="registered">
                      <td>registered:</td>
                      <td><strong>{user.registered}</strong></td>
                    </tr>
                    <tr key="role">
                      <td>role:</td>
                      <td><strong>{user.role}</strong></td>
                    </tr>
                    <tr key="status">
                      <td>status:</td>
                      <td><strong>{user.status}</strong></td>
                    </tr>
                  </tbody>
                </table>
                :
                <span><CIcon className="text-muted" name="cui-icon-ban" /> Not Found</span>
            }
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default User
