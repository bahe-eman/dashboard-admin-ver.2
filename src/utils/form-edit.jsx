import { useContext } from "react";
import { global } from "../assets/context";

export default function FormEdit() {
  const close = () => {
    document.getElementById("layerFormEdit").classList.toggle("hidden");
    document.getElementById("layerFormEdit").classList.toggle("flex");
  };
  const loadUpdate = useContext(global).loadUpdate;
  const dataID = useContext(global).dataID;

  const submitTambah = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const {
      kategori,
      lantai,
      nomorKamar,
      fasilitas,
      harga,
      status,
      keterangan,
      image,
    } = Object.fromEntries(formData);
    fetch(
      `https://6507a74b3a38daf4803f9ee4.mockapi.io/api/v1/rooms/${dataID}`,
      {
        method: "PUT",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          kategori: kategori.toLowerCase(),
          lantai: lantai,
          nomorKamar: nomorKamar,
          fasilitas: fasilitas,
          harga: harga,
          status: status,
          keterangan: keterangan,
          image: image,
          aktif: true,
        }),
      }
    );
    loadUpdate(true);
    close();
  };

  return (
    <div
      id="layerFormEdit"
      className="h-screen w-screen absolute z-30 top-0 left-0 justify-center hidden"
    >
      <div className="min-w-[500px] w-screen h-screen bg-primary-blue opacity-60" />
      <div
        className="font-raleway px-8 py-4 bg-zinc-100 rounded-sm h-fit absolute top-[70px]
        w-[500px] min-[1024px]:w-[800px] min-[1440px]:w-[1000px] min-[1700px]:w-[1300px] min-[1920px]:w-[1500px]"
      >
        <div className="text-center text-3xl font-semibold">Edit Kamar</div>
        <form onSubmit={submitTambah} className="text-sm mt-4 overflow-auto">
          <div className="grid mx-sm:grid-cols-1 lg:grid-cols-2 lg:my-8 min-w-[350px]">
            <div className="grid gap-1 mb-2 ml-2">
              <label className="text-left">Kategori Kamar</label>
              <select
                name="kategori"
                className="font-raleway h-10 pl-1 border rounded-sm bg-blue-50 active:bg-blue-100 md:w-[500px] lg:w-full"
              >
                <option value="Junior Suite">Junior Suite</option>
                <option value="Executive Suite">Executive Suite</option>
                <option value="Super Deluxe">Super Deluxe</option>
              </select>
            </div>
            <div className="grid gap-1 mb-2 ml-2">
              <label className="text-left">Lantai Kamar</label>
              <select
                name="lantai"
                className="font-raleway h-10 pl-1 border rounded-sm bg-blue-50 active:bg-blue-100 md:w-[500px] lg:w-full"
              >
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
              </select>
            </div>
            <div className="grid gap-1 mb-2 ml-2">
              <label className="text-left">Harga</label>
              <select
                name="harga"
                className="font-raleway h-10 pl-1 border rounded-sm bg-blue-50 active:bg-blue-100 md:w-[500px] lg:w-full"
              >
                <option value="100">100</option>
                <option value="200">200</option>
                <option value="300">300</option>
              </select>
            </div>
            <div className="grid gap-1 mb-2 ml-2">
              <label className="text-left">Status</label>
              <select
                name="status"
                className="font-raleway h-10 pl-1 border rounded-sm bg-blue-50 md:w-[500px] lg:w-full"
              >
                <option value="tersedia">tersedia</option>
                <option value="penuh">penuh</option>
              </select>
            </div>
            <div className="grid gap-1 mb-2 ml-2">
              <label className="text-left">Fasilitas</label>
              <textarea
                name="fasilitas"
                className="font-raleway h-16 px-2 pt-2 border rounded-sm bg-blue-50 active:bg-blue-100 resize-none md:w-[500px] lg:w-full"
              >
                ac, tv
              </textarea>
            </div>
            <div className="grid gap-1 mb-2 ml-2">
              <label className="text-left">Keterangan</label>
              <textarea
                name="keterangan"
                className="font-raleway h-16 px-2 pt-2 border rounded-sm bg-blue-50 resize-none md:w-[500px] lg:w-full"
              ></textarea>
            </div>
            <div className="grid gap-1 mb-2 ml-2">
              <label className="text-left">No Kamar</label>
              <input
                name="nomorKamar"
                className="py-[7px] h-10 pl-4 border rounded-sm bg-blue-50 active:bg-blue-100 md:w-[500px] lg:w-full"
              ></input>
            </div>
            <div className="grid gap-1 mb-2 ml-2">
              <label className="mr-2">Image (url)</label>
              <input
                name="image"
                type="text"
                className="py-[7px] h-10 pl-4 border rounded-sm bg-blue-50 active:bg-blue-100 md:w-[500px] lg:w-full"
              />
            </div>
          </div>
          <div className="flex justify-end space-x-4 my-4">
            <button
              onClick={close}
              type="button"
              className="bg-yellow-500 hover:bg-hover-yellow text-white font-bold py-2 px-4 rounded"
            >
              Batal
            </button>
            <button
              type="submit"
              className="bg-blue-500 hover:bg-hover-blue text-white font-bold py-2 px-4 rounded"
            >
              Simpan
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
