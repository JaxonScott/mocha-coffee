import CTAButton from "../components/CTAButton";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <div>
      <Navbar />
      <div className="mt-14"></div>
      <div>
        <div className="w-1/2">
          <h1 className="text-5xl">
            Quality Caffeine <br /> Without the price tag
          </h1>
          <p className="mt-6 leading-loose text-md ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.{" "}
          </p>
          <div className="mt-7"></div>
          <CTAButton>Browse our products</CTAButton>
        </div>
      </div>
    </div>
  ); 
}
