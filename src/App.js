import { Fragment } from "react"
import { Header } from './component'
import woman from './assets/images/woman.png'
import './App.css'
import { LandingSection } from "./pages/partials"
export default function App() {
  return (
    <main className="bg-fixed bg-contain bg-no-repeat lg:bg-right md:p-10 p-5" style={{ backgroundImage: `url(${woman})` }}>
      <Header />
      <div className="container mx-auto md:px-6">
        <LandingSection />
      </div>
    </main>
  )
}
