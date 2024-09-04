import Header from "./components/Header/header";
import BgMain from "./components/MainBg/bgMain";
import NavBar from "./components/navBar/navBar";

export default function Home() {
  return (
    <div className="flex">
        <NavBar/>
        <main>
          <Header/>
          <BgMain/>
        </main>
    </div>
  );
}
