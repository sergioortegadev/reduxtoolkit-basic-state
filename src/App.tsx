import { Counter } from "./features/counter/Counter"
import ReduxLogo from "./assets/rx-logo.png"
import BeerLogo from "./assets/beerjs.svg"
import {
  selectShowLegend,
  setShowLegend,
} from "./features/showLegend/showLegendSlice"
import { useAppDispatch, useAppSelector } from "./app/hooks"

const App = () => {
  const dispatch = useAppDispatch()
  const showLegendState = useAppSelector(selectShowLegend)

  const handleClick = () => {
    dispatch(setShowLegend())
  }

  return (
    <div className="container">
      <img src={ReduxLogo} className="logo" alt="Beer Js Cba logo" />
      <h1>State Management with Redux Toolkit</h1>

      <div className="card">
        <Counter />
        <p className={`${showLegendState ? "block" : "hidden"}`}>
          I am very exhausted, <code>too much boilerplate</code>
        </p>
        <img
          onClick={handleClick}
          src={BeerLogo}
          className={`logo beerlogo ${showLegendState ? "grayscale" : "hover:animate-bounce"}`}
          alt="Beer Js Cba logo"
        />
      </div>

      <div className="App">
        <header className="App-header"></header>
      </div>
    </div>
  )
}

export default App
