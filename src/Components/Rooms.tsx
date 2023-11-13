const Rooms = () => {
  return (
    <div className="max-w-[1400px] h-[500px] bg-blue-100 mx-auto my-20 pt-16 lg:mb-[20%] md:mb-[35%] px-4 grid lg:grid-cols-3 gap-4">
      <div className="lg:top-20 relative lg:col-span-1 col-span-2">
        <h3 className="text-2xl font-bold capitalize">fine interior rooms</h3>
        <p className="pt-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
          accusamus dolorum libero sed molestiae porro!
        </p>
      </div>
      <div className="grid grid-cols-2 col-span-2 gap-2">
        <img
          className="object-cover w-full h-full"
          src="https://images.pexels.com/photos/6636252/pexels-photo-6636252.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt="/"
        />
        <img
          className="row-span-2 object-cover w-full h-full"
          src="https://images.pexels.com/photos/4577696/pexels-photo-4577696.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt="/"
        />
        <img
          className="object w-full h-full"
          src="https://images.pexels.com/photos/6585618/pexels-photo-6585618.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt="/"
        />
      </div>
    </div>
  );
};

export default Rooms;
