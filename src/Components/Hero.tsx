const Hero = () => {
  return (
    <div className="w-full h-screen">
      <img
        className="top-0 left-0 w-full h-screen object-cover"
        src="https://images.pexels.com/photos/2631613/pexels-photo-2631613.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        alt="Photo of Beach and Palm Tree"
      />
      <div className="absolute top-0 left-0 w-full h-screen bg-black/30" />
      <div className="absolute top-0 w-full h-full flex flex-col justify-center text-white">
        <div className="md:left-[10%] max-x-[1100px] m-auto p-4">
          <p>All Inclusive</p>
          <h1 className="font-bold text-5xl md:text-7xl drop-shadow-2xl">
            Private Beaches & Getaways
          </h1>
          <p className="max-w-[600px] drop-shadow-2xl py-2 text-xl">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis
            velit neque nisi itaque totam! Maxime vero error quibusdam unde
            fugit!
          </p>
          <button className="bg-white text-black ">Reserve Now</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
