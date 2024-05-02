import "./Box.css";
export default function Box({serviceIcon , serviceTitle, serviceDesc}){
    
    return(
        <>
            
                
            <section className="Sec">
                <div className="icon">
                    <div className="square">
                        <i className = {serviceIcon}></i>
                    </div>
                </div>
                <h4 className="h4-box">{serviceTitle}</h4>
                <p className="p-box">{serviceDesc}</p>
            </section>
           
        </> 
    )
}