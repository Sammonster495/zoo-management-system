import { Link } from "react-router-dom";

export default function HomeContent(){
    return (
        <div className="container mx-auto px-4 py-8">
          <h3 className="text-center text-3xl font-bold mb-8">Wild Nature Charity &amp; Urgent Program</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:gap-32 md:gap-20 sm:gap-8">
            {/* Thumbnails */}
            <div className="rounded-lg shadow-md overflow-hidden">
              <img src="pic1.jpg" alt="Reptiles" className="aspect-square object-cover rounded-full" />
              <div className="px-4 py-2 bg-white">
                <h3 className="text-center text-lg font-semibold mb-2">Reptiles</h3>
                <p className="text-sm text-gray-700">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                </p>
                <Link to="/reptiles"><div className="flex justify-center mt-4 text-white bg-green-500 hover:bg-green-700 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Details</div></Link>
              </div>
            </div>
            <div className="rounded-lg shadow-md overflow-hidden">
              <img src="pic2.jpg" alt="Birds" className="aspect-square object-cover rounded-full" />
              <div className="px-4 py-2 bg-white">
                <h3 className="text-center text-lg font-semibold mb-2">Birds</h3>
                <p className="text-sm text-gray-700">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                </p>
                <Link to="/birds"><div className="flex justify-center mt-4 text-white bg-green-500 hover:bg-green-700 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Details</div></Link>
              </div>
            </div>
            <div className="rounded-lg shadow-md overflow-hidden">
              <img src="pic3.jpg" alt="Animals" className="aspect-square object-cover rounded-full" />
              <div className="px-4 py-2 bg-white">
                <h3 className="text-center text-lg font-semibold mb-2">Mammals</h3>
                <p className="text-sm text-gray-700">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                </p>
                <Link to="/mammals"><div className="flex justify-center mt-4 text-white bg-green-500 hover:bg-green-700 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Details</div></Link>
              </div>
            </div>
          </div>
          {/* Content */}
          <div className="mt-8">
            <h3 className="text-center text-2xl font-semibold mb-4">Welcome to Zoo Planet</h3>
            <p className="text-base text-gray-700">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries...
            </p>
          </div>
        </div>
      );
}