import React from 'react'
import './Card.css'

export default function Halaman({ gotoNextPage, gotoPrevPage }) {
  return (
    <div >
      {gotoPrevPage && <button class="prev" onClick={gotoPrevPage}>Previous</button>}
      {gotoNextPage && <button class="next"onClick={gotoNextPage}>Next</button>}
    </div>
  )
}
