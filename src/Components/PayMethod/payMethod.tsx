import Frete from '../../../images/frete.png'
import Parcela from '../../../images/parcelamento.png'
import Desconto from '../../../images/desconto.png'
import Seguro from '../../../images/seguro.png'



import './payMethod.css';

export default function PayMentMethod() {
    return(
        <aside className='container_pay'>
            <div className='box'>
                <div className='box1'>
                    <img src={Frete} alt="" width={130}/>
                </div>
                <div>
                    <h1>Frete Grátis Para Todo Brasil</h1>
                    <p>Válido Para Compras Acima de R$ 110,00</p>
                </div>
            </div>

            <div className='box'>
                <div className='box1'>
                    <img src={Parcela} alt="" width={60}/>
                </div>
                <div>
                    <h1>Parcelamento</h1>
                    <p>em até 4 x sem juros</p>
                </div>
            </div>

            <div className='box'>
                <div className='box1'>
                    <img src={Desconto} alt="" width={55}/>
                </div>
                <div>
                    <h1>5% de desconto</h1>
                    <p>Pagando via PIX</p>
                </div>
            </div>

            <div className='box'>
                <div className='box1'>
                    <img src={Seguro} alt="" width={55}/>
                </div>
                <div>
                    <h1>Site seguro</h1>
                    <p>Protegemos seus dados</p>
                </div>
            </div>
        </aside>
    )
}