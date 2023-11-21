import React from 'react'

const Table = (props) => {
  return (
    <table className="table-auto border-collapse border border-slate-800 w-full">
        <thead>
          <tr className=" bg-[#4383dd]">
            <th colSpan="3" className="border border-[#4383dd] p-2 text-white font-bold text-xl">
              {props.name}
            </th>
          </tr>
        </thead>

        <tbody>
         {
          props.firtRowName &&
          (
            <tr className="border border-slate-800 text-center font-semibold text-lg">
                  <td className="border bg-[#43d1a1] border-white text-white p-2">{props.firtRowName}</td>
                  <td className="border bg-[#a4d5f3] text-slate-800 p-2">{props.firtRowValue}</td>
            </tr>
          )
         }
         {
          props.secondRowName &&
          (
            <tr className="border border-slate-800 text-center font-semibold text-lg">
                  <td className="border bg-[#43d1a1] border-white text-white p-2">{props.secondRowName}</td>
                  <td className="border bg-[#a4d5f3] text-slate-800 p-2">{props.secondRowValue}</td>
            </tr>
          )
         }
         {
          props.thirdRowValue != null &&
          (
            <tr className="border border-slate-800 text-center font-semibold text-lg">
                  <td className="border bg-[#43d1a1] border-white text-white p-2">{props.thirdRowName}</td>
                  <td className="border bg-[#a4d5f3] text-slate-800 p-2">{props.thirdRowValue}</td>
            </tr>
          )
         }
         {
          props.fourthRowName &&
          (
            <tr className="border border-slate-800 text-center font-semibold text-lg">
                  <td className="border bg-[#43d1a1] border-white text-white p-2">{props.fourthRowName}</td>
                  <td className="border bg-[#a4d5f3] text-slate-800 p-2">{props.fourthRowValue}</td>
            </tr>
          )
         }
        </tbody>
      </table>
  )
}

export default Table