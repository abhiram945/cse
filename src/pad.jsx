import './pad.css';
const Pad=()=>{
    return <div className="pad">
        <p>Experiment outputs PDFs</p>
        <p className='downloadOptions'>In laptop, right click and then click on either SAVE AS or PRINT</p>
        <p className='downloadOptions'>In mobile click on OPEN</p>
        <div className="pdfsContainer">
            <embed type="application/pdf" title="pdf" src="./assets/pad/exp4.pdf"/>
        </div>
    </div>
}
export default Pad;