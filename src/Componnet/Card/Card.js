import "./Card.css";

export default function Card({pic , title , desc , name , time}){

    return(

        <>
            <section className="card-css">
                <div className="pic">
                    <img className="img" src= {pic} alt="" />

                </div>
                <div className="desc">

                    <h4>{title}</h4>
                    <p>{desc}</p>

                </div>
                <div className="footer">

                    <p>{name}</p>
                    <div className="time">
                        <i className="bi bi-clock"></i>
                        <p>{time}</p>
                        
                    </div>



                </div>
            </section>
        </>

    )
}