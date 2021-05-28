import { connect } from 'react-redux'
import { EuiButton, EuiPanel, EuiIcon, EuiTitle } from '@elastic/eui'
import Meal from '../meal'
import mi from '../../static/images/food-svgrepo-com.svg'

const lastMeal = ({ meals }) => {
  console.log(meals)
  return (
    <EuiPanel style={{ display: 'flex', alignItems: 'center' }}>
      <img src={mi} alt="icon" width="40" />
      <div style={{ margin: '0 0 0 2rem' }}>
        <EuiTitle><h1>Meal Card</h1></EuiTitle>
        <p>Hours ago</p>
        <p>Time stamp</p>
      </div>
    </EuiPanel>
  )
}
const mapStateToProps = (state) => ({
  meals: state.meals
})

export default connect(mapStateToProps)(lastMeal)