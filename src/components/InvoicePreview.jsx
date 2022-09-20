import rightArrow from '../assets/icon-arrow-right.svg'
import Status from './Status'

export default function InvoicePreview({ id, due, amount, name, status, theme }) {
    return (
        <section id='invoice-preview' className={theme}>
            <h3><span>#</span>{id}</h3>
            <span>Due {due}</span>
            <p>{name}</p>
            <h2>£{amount}</h2>
            <Status
                status={status}
                theme={theme}
            />
            <img src={rightArrow} alt="right-arrow" />
        </section>
    )
}