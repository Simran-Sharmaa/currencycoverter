import { useState } from "react";
import "./App.css";
import { InputBox } from "./components";
import useCurrencyInfo from "./hooks/useCurrencyInfo";

function App() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [convertedAmount, setConvertedAmount] = useState(0);

  const currencyInfo = useCurrencyInfo(from);
  const options = Object.keys(currencyInfo);
  // console.log(options)
  const handleSwap = () => {
    setTo(from);
    setFrom(to);
    setConvertedAmount(amount);
    setAmount(convertedAmount);
  };

  const handleConversionOnClick = () => {
    setConvertedAmount(amount * currencyInfo[to]);
  };
  return (
    <div className="App">
      <div
        className="container-fluid h-screen d-flex justify-content-center align-items-center bg-cover bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.pexels.com/photos/1629172/pexels-photo-1629172.jpeg?auto=compress&cs=tinysrgb&w=600')`,
          height: "100vh",
          backgroundSize:"cover",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-opacity-50 bg-secondary" style={{borderRadius:"2%"}}>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleConversionOnClick();
            }}
          >
            <div className="mb-3">
              {/* <label className="form-label">From</label> */}
              <InputBox
                label="From"
                amount={amount}
                selectCurrency={from}
                currencyOptions={options}
                onCurrencyChange={(currency) => setFrom(currency)}
                onAmountChange={(amount) => setAmount(amount)}
              />
            </div>
            <div className="mb-3">
              <button
                type="button"
                className="btn btn-primary"
                onClick={handleSwap}
              >
                Swap
              </button>
            </div>
            <div className="mb-4">
              {/* <label className="form-label">To</label> */}
              <InputBox
                label="To"
                amount={convertedAmount}
                selectCurrency={to}
                currencyOptions={options}
                onCurrencyChange={(currency) => setTo(currency)}
                amountDisabled
              />
            </div>
            <button type="submit" className="btn btn-primary w-100">
              Convert {from.toUpperCase()} to {to.toUpperCase()}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
