import { h, render } from 'preact'
import { StripeProvider, Elements } from 'react-stripe-elements'
const CardForm = _ => (
  <form>
    <label>Foo</label>
  </form>
)
const Checkout = _ => (
  <div>
    <Elements>
      <CardForm />
    </Elements>
  </div>
)
render(
  <StripeProvider apiKey="pk_test_6pRNASCoBOKtIshFeQd4XMUh">
    <Checkout />
  </StripeProvider>,
  document.body
)
