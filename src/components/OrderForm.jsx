import { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import {Footer} from "./Footer";

export default function OrderForm({ setOrderData }) {
  const history = useHistory();
  const [formData, setFormData] = useState({
    isim: "",
    boyut: "",
    hamur: "",
    not: "",
  });
  const [selectedToppings, setSelectedToppings] = useState([]);

  const toppings = [
    "Pepperoni", "Sosis", "Kanada Jambonu", "Tavuk Izgara",
    "Soğan", "Domates", "Mısır", "Sucuk", "Jalepeno",
    "Sarımsak", "Biber", "Ananas", "Kabak"
  ];

  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      if (selectedToppings.length < 10) {
        setSelectedToppings([...selectedToppings, value]);
      } else {
        alert("En fazla 10 malzeme seçebilirsiniz!");
      }
    } else {
      setSelectedToppings(selectedToppings.filter(item => item !== value));
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.isim.trim().length < 3) {
      alert("İsim en az 3 karakter olmalı!");
      return;
    }
    if (!formData.boyut) {
      alert("Lütfen pizza boyutu seçin!");
      return;
    }
    if (!formData.hamur) {
      alert("Lütfen hamur seçin!");
      return;
    }
    if (selectedToppings.length < 4) {
      alert("En az 4 malzeme seçmelisiniz!");
      return;
    }

    const payload = {
      ...formData,
      malzemeler: selectedToppings,
    };
    setOrderData(payload);
    console.log("Form gönderiliyor:", payload);

    try {
      await axios.post("https://reqres.in/api/pizza", payload, {
        headers: { "x-api-key": "reqres-free-v1" }
      });
    } catch (err) {
      alert("Sipariş gönderilirken hata oluştu! İnternet bağlantınızı kontrol edin.");
      return;
    }

    history.push("/confirmation");
  };

  return (
    <div>
    <form onSubmit={handleSubmit}>
      <div className="w-full min-h-screen bg-[#FAF7F2]">
        <div className="w-full h-[147px] bg-[#CE2829] border-b border-[#C20608] shadow-[0px_9px_150px_-30px_#00000017] relative">
          <img
            src="/images/iteration-1-images/logo.svg"
            alt="Logo"
            className="absolute"
            style={{
              width: "361.93px",
              height: "45.79px",
              top: "50.49px",
              left: "610px",
            }}
          />
          
              <img
                src="/images/iteration-2-images/pictures/form-banner.png"
                alt="Banner"
                className="absolute bg-[#FAF7F2]"
                style={{
                  width: "590px",
                  height: "290px",
                  top: "147px",
                  left: "470px",
                }}
              />
              <p className="absolute top-[480px] left-[500px] flex items-center gap-1 font-barlow text-[16px] leading-[29px] text-black w-[182px] h-[29px]">
                Anasayfa-
                <span className="font-bold text-red-500 w-[105px] h-[29px] flex items-center">
                  Sipariş Oluştur
                </span>
              </p>
            </div>

            <div className="absolute w-[532px] h-[1900.62px] left-[-200px] top-[300px] font-barlow">
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
            <div className="flex gap-4">
              {[
                { value: "küçük", label: "S" },
                { value: "orta", label: "M" },
                { value: "büyük", label: "L" },
              ].map((size) => (
                <label key={size.value} className="cursor-pointer">
                  <input
                    type="radio"
                    name="boyut"
                    value={size.value}
                    checked={formData.boyut === size.value}
                    onChange={handleChange}
                    className="hidden peer"
                    required
                  />
                  <div
                    className={`w-14 h-14 flex items-center justify-center rounded-full text-[#292929] font-semibold
                    ${formData.boyut === size.value ? "bg-[#FFEECC]" : "bg-[#FAF7F2]"}`}
                  >
                    {size.label}
                  </div>
                </label>
              ))}
            </div>
          </div>

              <div className="ml-8">
                <h3 className="font-semibold text-[20px] text-[#292929] mb-2 whitespace-nowrap">
                  Hamur Seç <span className="text-red-500">*</span>
                </h3>
                <select
                  name="hamur"
                  value={formData.hamur}
                  onChange={handleChange}
                  required
                  className="border rounded-md px-4 py-2"
                >
                  <option value="">--Hamur Kalınlığı Seç--</option>
                  <option value="ince">İnce Hamur</option>
                  <option value="orta">Orta Hamur</option>
                  <option value="kalın">Kalın Hamur</option>
                </select>
              </div>
            </div>
          </div>


          {/* Ek Malzemeler */}
          <div className="absolute w-[524px] left-[694px] top-[700px]">
            <h3 className="font-semibold text-[20px] text-[#292929]">Ek Malzemeler</h3>
            <p className="text-[16px] text-[#5F5F5F] mb-4">En Fazla 10 malzeme seçebilirsiniz. 5₺</p>

            <div className="topping-grid grid grid-cols-3 gap-3">
              {toppings.map((item) => (
                <label key={item} className="topping-label">
                  <input
                    type="checkbox"
                    value={item}
                    checked={selectedToppings.includes(item)}
                    onChange={handleCheckboxChange}
                    aria-label={item}
                  />

                  {/* kutu (45x45) */}
                  <div className="topping-box">
                    <span className="check-mark">✓</span>
                  </div>

                  {/* malzeme ismi */}
                  <span className="topping-text">{item}</span>
                </label>
              ))}
            </div>
          </div>


          <div className="absolute w-[531px] left-[694px] top-[1100px]">
            <div className="mb-4">
              <label className=" font-semibold text-[20px] text-[#292929]">
                İsim
              </label>
              <input
                type="text"
                name="isim"
                value={formData.isim}
                onChange={handleChange}
                minLength={3}
                required
                className="w-full h-[40px] border border-[#D9D9D9] rounded-md p-2 text-[14px] text-[#5F5F5F]"
                placeholder="İsminizi giriniz"
              />
            </div>
          </div>


          <div className="absolute w-[531px] left-[694px] top-[1200px]">
            <h3 className="font-semibold text-[20px] text-[#292929] mb-2">Sipariş Notu</h3>
            <textarea
              name="not"
              value={formData.not}
              onChange={handleChange}
              placeholder="Siparişine eklemek istediğin bir not var mı?"
              className="w-full h-[56px] border border-[#D9D9D9] rounded-md p-2 text-[14px] text-[#5F5F5F]"
            />
          </div>


          <div className="absolute flex w-[530px] left-[694px] top-[1320px] justify-between">
            <div className="flex items-center">
              <button type="button" className="w-[57px] h-[56px] bg-[#FDC913] rounded-l-md font-bold">-</button>
              <div className="w-[56px] h-[56px] border flex items-center justify-center font-bold">1</div>
              <button type="button" className="w-[57px] h-[56px] bg-[#FDC913] rounded-r-md font-bold">+</button>
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
              <button
                type="submit"
                className="w-full h-[62px] bg-[#FDC913] rounded-md mt-4 font-semibold text-[18px] text-[#292929]"
              >
                SİPARİŞ VER
              </button>
            </div>
          </div>
        </div>
      </div>
     </form>
     <Footer  className="absolute top-[1600px] left-0"/>
    </div>
  );
}
