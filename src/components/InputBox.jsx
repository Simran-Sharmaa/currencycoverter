import React, { useId } from "react";

const InputBox = ({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  selectCurrency = "",
  currencyOptions = [],
  amountDisabled = false,
  currencyDisabled = false,
  className = "",
}) => {
  // console.log(selectCurrency)
  const bindId = useId();
  return (
    <div class={`bg-white p-3 rounded-lg text-sm d-flex ${className}`}>
      <div class="w-50">
        <label htmlFor={bindId} class="text-muted mb-2 d-inline-block">
          {label}
        </label>
        <input
          id={bindId}
          class="form-control py-1.5"
          type="number"
          placeholder="Amount"
          disabled={amountDisabled}
          value={amount}
          onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
        />
      </div>
      <div class="w-50 d-flex flex-wrap justify-content-end text-right">
        <p class="text-muted mb-2 w-100">Currency Type</p>
        <select
          class="form-select rounded-lg px-1 py-1 bg-light cursor-pointer"
          value={selectCurrency}
          disabled={currencyDisabled}
          onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
        >
          {currencyOptions.map((currency) => (
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default InputBox;
