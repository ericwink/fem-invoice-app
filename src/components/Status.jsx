export default function Status({ status, theme }) {

    return (
        <div id="status" className={`${status} ${theme}`}>
            <h4>{status}</h4>
        </div>
    )
}