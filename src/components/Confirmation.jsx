import { Footer } from "./Footer";

export default function Confirmation ({orderData}){
    return (
      <div className="bg-red-600 w-[1630px] h-[1003px] flex flex-col">
        <img
          src="/images/iteration-1-images/logo.svg"
          alt="Logo"
          className="header-logo "
        />"
        <div className="success-text-container">
          <h1 className="success-text1">lezzetin yolda</h1>
          <h1 className="success-text2">SİPARİŞ ALINDI</h1>
        </div>
        <div className="custom-border"></div>

        <h1 className="w-[476px] h-[56px] absolute top-[430px] left-[576px] font-barlow font-semibold text-[22px] leading-[30px] text-center text-white">Position Absolute Acı Pizza</h1>

        <div  className="w-[100px] h-[153px] absolute top-[433.5px] left-[-150px] text-white">
          <p className="absolute w-[189px] h-[25px] top-[53.5px] left-[872px] text-[16px] leading-[24.76px] font-normal font-sans">Boyut: <span class="font-bold">{orderData.boyut}</span></p>
          <p className="absolute w-[189px] h-[25px] top-[90px] left-[872px] text-[16px] leading-[24.76px] font-normal font-sans">Hamur: <span class="font-bold">{orderData.hamur}</span></p>
          <p className="absolute w-[189px] h-[25px] top-[125.5px] left-[872px] text-[16px] leading-[24.76px] font-normal font-sans">Ek Malzemeler: <span class="font-bold">{orderData.malzemeler.join(", ")}</span></p>
        </div>
          <div className="absolute box-border h-[197px] w-[350px] left-[655px] top-[683px] border border-[#FAF7F2] rounded-[6px] p-4 bg-transparent">
            <h3 className="absolute w-[154px] h-[25px] left-[49px] top-[42px] font-barlow font-semibold text-[20px] leading-[25px] text-white flex items-center">
              Sipariş Toplamı
            </h3>
            <span className="absolute w-[154px] h-[25px] left-[49px] top-[89px] font-barlow font-semibold text-[18px] leading-[25px] text-white flex items-center">
              Seçimler
            </span>
            <span className="absolute w-[73px] h-[25px] left-[228.55px] top-[89px] font-barlow font-semibold text-[18px] leading-[25px] text-white flex items-center text-right">
              25.00₺
            </span>
            <span className="absolute w-[154px] h-[25px] left-[49px] top-[126px] font-barlow font-semibold text-[18px] leading-[25px] text-white flex items-center">
              Toplam
            </span>
            <span className="absolute w-[73px] h-[25px] left-[228.55px] top-[126px] font-barlow font-semibold text-[18px] leading-[25px] text-white flex items-center text-right">
              110.50₺
            </span>
          </div>

       <Footer className="absolute top-[700px] left-0"/>
      </div>
 )
}