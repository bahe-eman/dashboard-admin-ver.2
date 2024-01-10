import { Link } from "react-router-dom";

export default function ProfilePage() {
  return (
    <>
      <div className="w-full">
        <main className="bg-primary-gray grow overflow-y-auto">
          <div className="p-4 h-[calc(100vh-67.33px)]">
            <div>
              <h1 className="text-2xl font-semibold">Profil Hotel</h1>
            </div>
            <div className="p-4">
              <div className="p-6 bg-white border border-gray-200 rounded-lg shadow">
                <div className="relative overflow-x-auto">
                  <form>
                    <div className="grid gap-4 gap-y-6 text-sm grid-cols-1 md:grid-cols-6 m-5">
                      <div className="md:col-span-3">
                        <div className="flex items-center">
                          <i className="ri-hotel-fill text-4xl text-third-blue flex items-center">
                            <span className="ml-2 border-collapse focus:outline-none font-raleway text-lg text-black">
                              My Hotel
                            </span>
                          </i>
                        </div>
                      </div>
                      <div className="md:col-span-3">
                        <div className="flex items-center">
                          <i className="ri-customer-service-2-fill text-4xl flex items-center">
                            <span className="ml-2 border-collapse focus:outline-none font-raleway text-lg text-black">
                              021-1239875
                            </span>
                          </i>
                        </div>
                      </div>
                      <div className="md:col-span-3">
                        <div className="flex items-center">
                          <i className="ri-mail-check-fill text-4xl text-third-blue flex items-center">
                            <span className="ml-2 border-collapse focus:outline-none font-raleway text-lg text-black">
                              contact@myhotel.group
                            </span>
                          </i>
                        </div>
                      </div>
                      <div className="md:col-span-3">
                        <div className="flex items-center">
                          <i className="ri-map-pin-fill text-4xl text-hover-red flex items-center">
                            <span className="ml-2 border-collapse focus:outline-none font-raleway text-lg text-black">
                              Jl. Soekarno-Hatta 2023 Yogyakarta, Indonesia
                            </span>
                          </i>
                        </div>
                      </div>
                      <div className="md:col-span-3">
                        <div className="flex items-center">
                          <i className="ri-global-line text-4xl text-third-blue flex items-center">
                            <span className="ml-2 border-collapse focus:outline-none font-raleway text-lg text-black">
                              <Link to="https://client-dashboard-hazel.vercel.app/">
                                https://client-dashboard-hazel.vercel.app/
                              </Link>
                            </span>
                          </i>
                        </div>
                      </div>
                      <div className="md:col-span-3">
                        <div className="flex items-center">
                          <i className="ri-instagram-fill text-4xl text-pink-400 flex items-center">
                            <span className="ml-2 border-collapse focus:outline-none font-raleway text-lg text-black">
                              My Hotel
                            </span>
                          </i>
                        </div>
                      </div>
                      <div className="md:col-span-3">
                        <div className="flex items-center">
                          <i className="ri-facebook-circle-fill text-4xl text-third-blue flex items-center">
                            <span className="ml-2 border-collapse focus:outline-none font-raleway text-lg text-black">
                              My Hotel
                            </span>
                          </i>
                        </div>
                      </div>
                      <div className="md:col-span-3">
                        <div className="flex items-center">
                          <i className="ri-twitter-fill text-4xl text-third-blue flex items-center">
                            <span className="ml-2 border-collapse focus:outline-none font-raleway text-lg text-black">
                              My Hotel
                            </span>
                          </i>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
