import {Component} from 'react'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import CryptocurrencyItem from '../CryptocurrencyItem'
import './index.css'

class CryptocurrenciesList extends Component {
  state = {isLoading: true, cryptoData: []}

  componentDidMount() {
    this.getCryptoData()
  }

  getCryptoData = async () => {
    const response = await fetch(
      'https://apis.ccbp.in/crypto-currency-converter',
    )
    const data = await response.json()

    const formattedData = data.map(eachItem => ({
      currencyName: eachItem.currency_name,
      usdValue: eachItem.usd_value,
      euroValue: eachItem.euro_value,
      id: eachItem.id,
      currencyLogo: eachItem.currency_logo,
    }))
    this.setState({cryptoData: formattedData, isLoading: false})
  }

  render() {
    const {cryptoData, isLoading} = this.state

    return (
      <div className="blog-list-container">
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="Rings" color="#ffffff" height={80} width={80} />
          </div>
        ) : (
          <div>
            <div>
              <h1>Cryptocurrency Tracker</h1>
              <img
                src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
                alt="cryptocurrency"
              />
            </div>
            <ul>
              <li>
                <h1>Coin Type</h1>
                <h1>UsD</h1>
                <h1>EURO</h1>
              </li>
              {cryptoData.map(item => (
                <CryptocurrencyItem cryptoData={item} key={item.id} />
              ))}
            </ul>
          </div>
        )}
      </div>
    )
  }
}

export default CryptocurrenciesList
