import { Fragment } from "react"
import { Header } from './component'
import woman from './assets/images/woman.png'
import './App.css'
import { LandingSection, WhyUsSection, FooterSection } from "./pages/partials"
export default function App() {
  return (
    <Fragment>
      <main className="bg-scroll bg-no-repeat lg:bg-right-top	 md:p-10 p-5" style={{ backgroundImage: `url(${woman})`, backgroundSize: '60%' }}>
        <Header />
        <div className="container mx-auto md:px-6">
          <LandingSection />
          <WhyUsSection />
        </div>
      </main>
      <FooterSection />
    </Fragment>
  )
}
