const TableRowCheck = ({ no, idRegistrasi, nik, nama, noKamar, tanggalCheck, btnDetail, btnCheck, btnReBook }) => {

  return (
    <tr className='odd:bg-zinc-400 odd:bg-opacity-10 md:odd:bg-transparent'>
                  <td
                    className="md:before:content-none before:capitalize before:content-[attr(data-cell)':'] before:block before:font-semibold flex justify-between md:table-cell p-3 border-secondary-gray border-2 border-opacity-10"
                    data-cell='no'
                  >
                    {no}
                  </td>
                  <td
                    className="md:before:content-none before:capitalize before:content-[attr(data-cell)':'] before:block before:font-semibold flex justify-between md:table-cell p-3 border-secondary-gray border-2 border-opacity-10"
                    data-cell='id-registrasi'
                  >
                    {idRegistrasi}
                  </td>
                  <td
                    className="md:before:content-none before:capitalize before:content-[attr(data-cell)':'] before:block before:font-semibold flex justify-between md:table-cell p-3 border-secondary-gray border-2 border-opacity-10"
                    data-cell='nik'
                  >
                    {nik}
                  </td>
                  <td
                    className="md:before:content-none before:capitalize before:content-[attr(data-cell)':'] before:block before:font-semibold flex justify-between md:table-cell p-3 border-secondary-gray border-2 border-opacity-10"
                    data-cell='nama'
                  >
                    {nama}
                  </td>
                  <td
                    className="md:before:content-none before:capitalize before:content-[attr(data-cell)':'] before:block before:font-semibold flex justify-between md:table-cell p-3 border-secondary-gray border-2 border-opacity-10"
                    data-cell='no-kamar'
                  >
                    {noKamar}
                  </td>
                  <td
                    className="md:before:content-none before:capitalize before:content-[attr(data-cell)':'] before:block before:font-semibold flex justify-between md:table-cell p-3 border-secondary-gray border-2 border-opacity-10"
                    data-cell='tanggal-checkin'
                  >
                    {tanggalCheck}
                  </td>
                  <td
                    className="md:before:content-none before:capitalize before:content-[attr(data-cell)':'] before:block before:font-semibold flex justify-between md:table-cell p-3 border-secondary-gray border-2 border-opacity-10 md:text-center"
                    data-cell='opsi'
                  >
                    <div className='min-w-[220px] w-full flex justify-center'>

                    <button
                      onClick={btnDetail}
                      title='detail'
                      className='mr-1 px-5 py-1 rounded-md bg-blue-400 hover:bg-hover-blue'
                    >
                      {' '}
                      <i className='ri-search-line text-white'> </i>
                    </button>
                    <button
                      onClick={btnCheck}
                      title='done'
                      className='px-5 py-1 rounded-md bg-green-400 hover:bg-hover-green'
                    >
                      {' '}
                      <i className='ri-checkbox-circle-line text-white'> </i>
                    </button>
                    {
                      btnReBook && (
                        <button
                          onClick={btnReBook}
                          title='rebook'
                          className='ml-1 px-5 py-1 rounded-md bg-red-400 hover:bg-hover-red'
                        >
                          {' '}
                          <i className='ri-repeat-line text-white'> </i>
                        </button>
                      )
                    }
                    </div>
                  </td>
                </tr>
  )
}
export default TableRowCheck