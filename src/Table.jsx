import React from 'react'

const Table = ({tableData}) => {
  return (
    <table className="table table-bordered">
    <thead>
      <tr>
        <th scope="col">S.No</th>
        <th scope="col">Name</th>
        <th scope="col">Email</th>
        <th scope="col">Country</th>
        <th scope="col">Gender</th>
        <th scope="col">Status</th>
        <th scope="col">Favorites</th>
        <th scope="col">Dob</th>
        <th scope="col">Message</th>
      </tr>
    </thead>
    <tbody>
      {tableData.map((data, index) => (
        <tr key={index}>
          <th scope="row">{index + 1}</th>
          <td>{data.username}</td>
          <td>{data.email}</td>
          <td>{data.country}</td>
          <td>{data.gender}</td>
          <td>{data.status}</td>
          <td>{data.fav.join(", ")}</td>
          <td>{data.dob}</td>
          <td>{data.message}</td>
        </tr>
      ))}
    </tbody>
  </table>
  
    )
}

export default Table