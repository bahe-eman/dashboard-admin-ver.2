const TableRowCheckIn = ({
  no,
  idRegistrasi,
  nik,
  nama,
  noKamar,
  tanggalCheckin,
  onBtnClick,
}) => {
  return (
    <tr className="odd:bg-zinc-400 odd:bg-opacity-10 md:odd:bg-transparent">
      <td
        className="md:before:content-none before:capitalize before:content-[attr(data-cell)':'] before:block before:font-semibold flex justify-between md:table-cell p-3 border-secondary-gray border-2 border-opacity-10"
        data-cell="no"
      >
        {no}
      </td>
      <td
        className="md:before:content-none before:capitalize before:content-[attr(data-cell)':'] before:block before:font-semibold flex justify-between md:table-cell p-3 border-secondary-gray border-2 border-opacity-10"
        data-cell="id-registrasi"
      >
        {idRegistrasi}
      </td>
      <td
        className="md:before:content-none before:capitalize before:content-[attr(data-cell)':'] before:block before:font-semibold flex justify-between md:table-cell p-3 border-secondary-gray border-2 border-opacity-10"
        data-cell="nik"
      >
        {nik}
      </td>
      <td
        className="md:before:content-none before:capitalize before:content-[attr(data-cell)':'] before:block before:font-semibold flex justify-between md:table-cell p-3 border-secondary-gray border-2 border-opacity-10"
        data-cell="nama"
      >
        {nama}
      </td>
      <td
        className="md:before:content-none before:capitalize before:content-[attr(data-cell)':'] before:block before:font-semibold flex justify-between md:table-cell p-3 border-secondary-gray border-2 border-opacity-10"
        data-cell="no-kamar"
      >
        {noKamar}
      </td>
      <td
        className="md:before:content-none before:capitalize before:content-[attr(data-cell)':'] before:block before:font-semibold flex justify-between md:table-cell p-3 border-secondary-gray border-2 border-opacity-10"
        data-cell="tanggal-checkin"
      >
        {tanggalCheckin}
      </td>
      <td
        className="md:before:content-none before:capitalize before:content-[attr(data-cell)':'] before:block before:font-semibold flex justify-between md:table-cell p-3 border-secondary-gray border-2 border-opacity-10 md:text-center"
        data-cell="opsi"
      >
        <div className="min-w-[190px] w-full flex justify-center">
          <button
            onClick={() => onBtnClick(idRegistrasi)}
            title="detail"
            className="mr-1 px-5 py-1 bg-green-400 hover:bg-hover-green rounded-md"
          >
            {" "}
            <i className="ri-search-line text-white"> </i>
          </button>
          <button
            type="button"
            title="hapus"
            className="mr-1 py-1 px-5 bg-red-400 rounded-md hover:bg-hover-red"
          >
            <i className="ri-delete-bin-line text-white"></i>
          </button>
          <button
            type="button"
            title="edit"
            className="py-1 px-5 bg-yellow-400 rounded-md hover:bg-hover-yellow"
          >
            <i className="ri-file-edit-line text-white"></i>
          </button>
        </div>
      </td>
    </tr>
  );
};
export default TableRowCheckIn;
