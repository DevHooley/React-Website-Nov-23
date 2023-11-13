const Plan = () => {
  return (
    <div className="max-w-[1400px] m-auto py-16 px-4 grid lg:grid-cols-2 gap-4">
      {/* Left Side */}
      <div className="grid grid-cols-2 grid-rows-6 h-[80vh]">
        <img
          className="row-span-3 object w-full h-full p-2"
          src="https://plus.unsplash.com/premium_photo-1691938887386-863c4ce55588?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTA1fHx0cm9waWNhbCUyMHZhY2F0aW9uJTIwYmVhY2h8ZW58MHx8MHx8fDA%3D"
          alt="/"
        />
        <img
          className="row-span-2 object-cover w-full h-full p-2"
          src="https://images.unsplash.com/photo-1611043714658-af3e56bc5299?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8dHJvcGljYWwlMjB2YWNhdGlvbnxlbnwwfHwwfHx8MA%3D%3D"
          alt="/"
        />
        <img
          className="row-span-2 object w-full h-full p-2"
          src="https://images.unsplash.com/photo-1542309174-d33b34ce6ea7?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTkwfHx0cm9waWNhbCUyMHZhY2F0aW9ufGVufDB8fDB8fHww"
          alt="/"
        />
        <img
          className="row-span-3 object w-full h-full p-2"
          src="https://images.unsplash.com/photo-1520483601560-389dff434fdf?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzV8fHRyb3BpY2FsJTIwdmFjYXRpb24lMjBiZWFjaHxlbnwwfHwwfHx8MA%3D%3D"
          alt="/"
        />
        <img
          className="row-span-2 object w-full h-full p-2"
          src="https://images.unsplash.com/photo-1586122891856-5f90886b0cee?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzV8fHRyb3BpY2FsJTIwdmFjYXRpb258ZW58MHx8MHx8fDA%3D"
          alt="/"
        />
      </div>
      {/* Right Side */}
      <div className="flex flex-col h-full justify-center items-center">
        <h3 className="capitalize text-5xl md:text-6xl font-bold">
          plan your next trip
        </h3>
        <p className="text-2xl py-6">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. A, explicabo.
        </p>
        <p className="pb-6">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam error
          autem inventore, sed sunt aperiam earum optio ex laborum
          exercitationem illum, odio dolorem delectus aut dolor vitae non velit
          illo?
        </p>
        <div className="flex">
          <button className="border-black bg-sky-500 hover:bg-sky-600 active:bg-sky-700 focus:outline-none focus:ring focus:ring-sky-300  mr-4 hover:shadow-xl capitalize text-white">
            Learn More
          </button>
          <button className="bg-sky-500 hover:bg-sky-600 active:bg-sky-700 focus:outline-none focus:ring focus:ring-sky-300 text-white border-black hover:shadow-xl capitalize">
            Book Your Trip
          </button>
        </div>
      </div>
    </div>
  );
};

export default Plan;
