// pages/index.js
import Header from "./header";
import Subheader from "./subheader";
import Footer from "./footer";
import Cloud from "./cloud"; // Import the Cloud component

export default function Home() {
  return (
    <div>
      <Header />
      <Subheader />
      <Cloud /> {/* Insert the Cloud component */}
      <Footer />
    </div>
  );
}
