import './Blog.css';
import Card from '../Card/Card';
import imge1 from '../../img/post-1.jpg';
import imge2 from '../../img/post-2.jpg';
import imge3 from '../../img/post-3.jpg';



export default function Blog(){
    let blogItem = [
        {
            pic : imge1,
            title : 'post title 1',
            desc : '1 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto expedita optio enim quos sunt quaerat corporis similique eveniet suscipit. Quod doloremque cum dolorum ipsum at quia eveniet o',
            name : 'Reza Nemati',
            time : '10 min'

        },
        {
            pic : imge2,
            title : 'post title 2',
            desc : '2 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto expedita optio enim quos sunt quaerat corporis similique eveniet suscipit. Quod doloremque cum dolorum ipsum at quia eveniet o',
            name : 'Soodi Nemati',
            time : '17 min'

        },
        {
            pic : imge3,
            title : 'post title 3',
            desc : '3 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto expedita optio enim quos sunt quaerat corporis similique eveniet suscipit. Quod doloremque cum dolorum ipsum at quia eveniet o',
            name : 'Ali Nemati',
            time : '42 min'

        }
    ]
    return(
        <>
            <section className='blog'>
                <div className="header">
                    <h1 className='blogTitle'>BLOG</h1>
                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    </p>
                </div>
                <div className="card">

                    <Card {...blogItem[0]} />
                    <Card {...blogItem[1]} />
                    <Card {...blogItem[2]} />
                    

                </div>
            </section>
        </>
    )
}