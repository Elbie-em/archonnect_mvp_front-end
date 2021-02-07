import React from 'react'

function LoadingSpinner() {
  return (
    <>
    <div className="d-flex justify-content-center mt-5">
      <div className="spinner-grow loading-sp" style={{ width: 150, height: 150 }} role="status" />
    </div>
    <div className="w-100 text-center">
      <h3 className="text-white brand-font">Loading...</h3>
    </div>
  </>
  )
}

export default LoadingSpinner
