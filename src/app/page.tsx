import Header from "./components/Header/header";
import NavBar from "./components/navBar/navBar";

export default function Home() {
  return (
    <div className="flex">
        <NavBar/>
        <Header/>
    </div>
  );
}
