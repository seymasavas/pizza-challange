export function Banner() {
  const categories = [
    { name: "Yeni! Kore", img: "/images/iteration-2-images/icons/1.svg" },
    { name: "Pizza", img: "/images/iteration-2-images/icons/2.svg" },
    { name: "Hamburger", img: "/images/iteration-2-images/icons/3.svg" },
    { name: "Kızartmalar", img: "/images/iteration-2-images/icons/4.svg"  },
    { name: "Fast Food", img: "/images/iteration-2-images/icons/5.svg" },
    { name: "Gazlı İçecekler", img: "/images/iteration-2-images/icons/6.svg" },
  ];

  return (
    <nav>
      <ul>
        {categories.map((cat, i) => (
          <li key={i}>
            <img src={cat.img} alt={cat.name} width={42} height={42} />
            <span>{cat.name}</span>
          </li>
        ))}
      </ul>
    </nav>
  );
}
