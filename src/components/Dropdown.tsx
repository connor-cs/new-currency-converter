import React from 'react'

type DropdownProps = {
    setCurrency: (val: string) => void
}

export const Dropdown:React.FC<DropdownProps> = ({setCurrency}) => {
  return (
    <select onChange={(e)=>setCurrency(e.target.value)} value='GBP'>
        <option disabled selected value=''>Select Currency</option>
        <option value="USD">USD</option>
        <option value="GBP">GBP</option>
    </select>
  )
}
