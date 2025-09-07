export default function OrderForm() {
  return (
  <div className="w-full min-h-screen bg-white">
    <div className="w-full h-[207px] bg-[#CE2829] border-b border-[#C20608] shadow-[0px_9px_150px_-30px_#00000017] relative">
      <img
        src="/images/iteration-1-images/logo.svg"
        alt="Logo"
          className="absolute"
            style={{
              width: "361.93px",
              height: "45.79px",
              top: "66.49px",
              left: "650px",
            }}
      />
      <p className="absolute top-[157px] left-[500px] flex items-center gap-1 font-barlow text-[16px] leading-[29px] text-[#FAF7F2] w-[182px] h-[29px]">
        Anasayfa -
        <span className="font-bold text-white w-[105px] h-[29px] flex items-center">
          Sipariş Oluştur
        </span>
      </p>
    </div>

    <div className="absolute w-[532px] h-[1340.62px] left-[-200px] top-[0px] font-barlow">
      <h1 className="absolute w-[488px] h-[56px] left-[695px] top-[238px] font-semibold text-[22px] leading-[29px] text-[#292929] flex items-center">
        Position Absolute Acı Pizza
      </h1>

      <div className="absolute w-[531px] h-[37px] left-[695px] top-[308px] flex justify-between items-center">
        <span className="font-bold text-[28px] leading-[37px] text-[#292929]">85.50₺</span>
        <div className="flex gap-2 text-[16px] leading-[29px] text-[#5F5F5F]">
          <span>4.9</span>
          <span>(200)</span>
        </div>
      </div>
      <p className="absolute w-[532px] h-[173px] left-[694px] top-[363px] text-[16px] leading-[29px] text-[#5F5F5F]">
        Frontend Dev olarak hala position:absolute kullanıyorsan bu çok acı pizza tam sana göre. Pizza, domates, peynir ve genellikle çeşitli diğer malzemelerle kaplanmış, daha sonra geleneksel olarak odun ateşinde bir fırında yüksek sıcaklıkta pişirilen, genellikle yuvarlak, düzleştirilmiş mayalı buğday bazlı hamurdan oluşan İtalyan kökenli lezzetli bir yemektir. Küçük bir pizzaya bazen pizzetta denir.
      </p>

      <div className="absolute flex gap-8 left-[695px] top-[560px]">
       <div className="flex gap-8">
          <div>
            <h3 className="font-semibold text-[20px] text-[#292929] mb-2 whitespace-nowrap">
              Boyut Seç <span className="text-red-500">*</span>
            </h3>
            <div className="flex flex-col gap-2 text-[#5F5F5F]">
              <label className="flex items-center gap-2">
                <input type="radio" name="pizzaSize" value="küçük" required className="w-4 h-4" />
                Küçük
              </label>
              <label className="flex items-center gap-2">
                <input type="radio" name="pizzaSize" value="orta" className="w-4 h-4" />
                Orta
              </label>
              <label className="flex items-center gap-2">
                <input type="radio" name="pizzaSize" value="büyük" className="w-4 h-4" />
                Büyük
              </label>
            </div>
        </div>
          <div className="ml-8"> 
            <h3 className="font-semibold text-[20px] text-[#292929] mb-2 whitespace-nowrap">
              Hamur Seç <span className="text-red-500">*</span>
            </h3>
            <select className="border rounded-md px-4 py-2">
              <option value="">Hamur Kalınlığı</option>
              <option value="ince">İnce Hamur</option>
              <option value="orta">Orta Hamur</option>
              <option value="kalın">Kalın Hamur</option>
            </select>
          </div>
       </div>
     </div>

      <div className="absolute w-[524px] left-[694px] top-[750px]">
        <h3 className="font-semibold text-[20px] text-[#292929]">Ek Malzemeler</h3>
        <p className="text-[16px] text-[#5F5F5F] mb-4">En Fazla 10 malzeme seçebilirsiniz. 5₺</p>
        <div className="grid grid-cols-3 gap-3">
          {["Pepperoni", "Sosis", "Kanada Jambonu", "Tavuk Izgara", "Soğan", "Domates", "Mısır", "Sucuk", "Jalepeno", "Sarımsak", "Biber", "Ananas", "Kabak"].map((item) => (
            <label key={item} className="flex items-center gap-2 text-[#5F5F5F] font-bold text-[16px]">
              <input type="checkbox" className="w-5 h-5" />
              {item}
            </label>
          ))}
        </div>
      </div>

      <div className="absolute w-[531px] left-[694px] top-[1100px]">
        <h3 className="font-semibold text-[20px] text-[#292929] mb-2">Sipariş Notu</h3>
        <textarea
          placeholder="Siparişine eklemek istediğin bir not var mı?"
          className="w-full h-[56px] border border-[#D9D9D9] rounded-md p-2 text-[14px] text-[#5F5F5F]"
        />
      </div>

      <div className="absolute flex w-[530px] left-[694px] top-[1220px] justify-between">
        <div className="flex items-center">
          <button className="w-[57px] h-[56px] bg-[#FDC913] rounded-l-md font-bold">-</button>
          <div className="w-[56px] h-[56px] border flex items-center justify-center font-bold">1</div>
          <button className="w-[57px] h-[56px] bg-[#FDC913] rounded-r-md font-bold">+</button>
        </div>

        <div className="w-[350px] border border-[#D9D9D9] rounded-md p-4">
          <h3 className="font-semibold text-[20px] text-[#292929]">Sipariş Toplamı</h3>
          <div className="flex justify-between text-[#5F5F5F] text-[18px]">
            <span>Seçimler</span>
            <span>25.00₺</span>
          </div>
          <div className="flex justify-between text-[#CE2829] text-[18px] font-semibold">
            <span>Toplam</span>
            <span>110.50₺</span>
          </div>
          <button className="w-full h-[62px] bg-[#FDC913] rounded-md mt-4 font-semibold text-[18px] text-[#292929]">
            SİPARİŞ VER
          </button>
        </div>
      </div>
    </div>
  </div>
  );
}
