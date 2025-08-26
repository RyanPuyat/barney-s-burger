import Image from '../assets/About.png';

function AboutUs() {
  return (
    <div id="about-section" className="flex flex-col items-center">
      <h2 className="mt-12 mb-4 text-3xl font-semibold text-orange-500">
        Why <span className="text-yellow-500">Us?</span>
      </h2>
      <img
        src={Image}
        alt="About"
        className="h-[500px] w-[450px] md:h-[800px] md:w-[750px]"
      />
    </div>
  );
}

export default AboutUs;
