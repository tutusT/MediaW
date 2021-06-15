import classNames from '../../styles/components/Spinner.module.scss'

const Spinner = () => (
  <div className={classNames['spinner-wrapper']}>
    <div className={classNames['lds-ripple']}>
      <div></div>
      <div></div>
    </div>
  </div>
)

export default Spinner
