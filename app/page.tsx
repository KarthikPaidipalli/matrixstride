import Image from "next/image";

export default function Home() {
  return (
    <div className="relative bg-white overflow-hidden">
      {/* Background top-right shape */}
      <div className="absolute top-20 right-0 z-0 hidden md:block">
        <Image
          src="https://www.matrixstride.com/images/banner-shape.svg"
          alt="Background shape"
          width={500}
          height={470}
          className="w-[500px] h-[470px] object-cover"
        />

      </div>


      {/* Main content */}
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between px-6 md:px-20 py-16 gap-8 mt-10">
        {/* Text section */}
        <div className="max-w-xl">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            Applying the Spirit of Agility and Scale-Out
          </h1>
          <p className="text-gray-700 text-lg leading-relaxed">
            We integrate design thinking into our digital consulting to craft customer experiences across all digital platforms, innovating solutions and demystifying complex business challenges for our clients.
          </p>
        </div>

        {/* Image section */}
        <div className="w-full md:w-1/2">
          <Image
            src="https://www.matrixstride.com/images/ai-at-nih-900.png"
            alt="AI at NIH"
            width={900}
            height={600} 
            className="w-full h-auto"
          />

        </div>
      </div>
      {/* Extended engineering section */}
      <div className="bg-gray-50 px-6 md:px-20 py-20">
        <div className="max-w-5xl mx-auto text-center space-y-8">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">
            Your Extended Engineering Team to <span className="text-blue-700">Accelerate</span> Your Digital Transformation
          </h2>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
            Our mission is to help clients drive business agility to address their technology challenges by providing industry experience, tools, frameworks, and processes. We design, build, and run enterprise applications that are more flexible and scalable, accelerating digital transformation and delivering real business impact.
          </p>
        </div>
      </div>
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl shadow-xl p-10 md:p-16 text-white max-w-5xl mx-auto text-center space-y-6 mb-15 mt-4 transform transition-transform duration-300 hover:scale-105">
        <h2 className="text-3xl md:text-4xl font-semibold">
          Helping Teams in the World with Focus
        </h2>
        <p className="text-lg md:text-xl leading-relaxed">
          We are a group of boundary smashers, dreamers, engineers, and technologists with a common trait. We are fanatical about using technology to benefit the world and solve operational and strategic challenges.
        </p>
      </div>

    </div>
  );
}