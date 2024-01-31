import './index.css'

const CryptocurrencyItem = props => {
  const {cryptoData} = props
  const {currencyName, usdValue, euroValue, currencyLogo} = cryptoData

  return (
    <li className="item-link">
      <div>
        <img className="item-image" src={currencyLogo} alt={currencyName} />
        <p>{currencyName}</p>
      </div>
      <p className="item-topic">{usdValue}</p>
      <p className="item-title">{euroValue}</p>
    </li>
  )
}

export default CryptocurrencyItem
