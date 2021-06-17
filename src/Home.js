import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=""
        />
        <div className="home__row">
          <Product
            id={1}
            title="AMD Ryzen 7 5800X 8-core, 16-Thread Unlocked Desktop Processor"
            price={429.0}
            image="https://en.wikichip.org/w/images/4/4e/amd_ryzen_7_logo.png"
            rating={5}
          />

          <Product
            id={2}
            title="SAMSUNG T5 Portable SSD 1TB - Up to 540MB/s - USB 3.1 External Solid State Drive, Black (MU-PA1T0B/AM)"
            image="https://images.samsung.com/is/image/samsung/ro-860-evo-sata-3-2-5-ssd-mz-76e250b-eu-frontblack-89214576?$684_547_PNG$"
            price={119.99}
            rating={4}
          />
        </div>
        <div className="home__row">
          <Product
            id={3}
            title="Seagate BarraCuda 2TB Internal Hard Drive HDD – 3.5 Inch SATA 6Gb/s 7200 RPM 256MB"
            image="https://m.media-amazon.com/images/I/71Czt9ypIbL._AC_UL320_.jpg"
            price={55.95}
            rating={3}
          />
          <Product
            id={4}
            title="Corsair Vengeance LPX 16GB (2x8GB) DDR4 DRAM 3200MHz C16 Desktop Memory Kit - Black"
            image="https://s13emagst.akamaized.net/products/16327/16326932/images/res_d06c29f8e47bbc19d2160dd3e2adff54.jpg?width=450&height=450&hash=97ADC6CEF9DC007FF9C3B45203BE3B05"
            price={102.99}
            rating={5}
          />
          <Product
            id={5}
            title="CanaKit Raspberry Pi 4 8GB Starter Kit - 8GB RAM"
            image="https://m.media-amazon.com/images/I/817DclokSqL._AC_UL320_.jpg"
            price={120.99}
            rating={5}
          />
        </div>
        <div className="home__row">
          <Product
            id={6}
            title="Crucial MX500 500GB 3D NAND SATA 2.5 Inch Internal SSD, up to 560MB/s - CT500MX500SSD1"
            image="https://m.media-amazon.com/images/I/81w0f+QufZL._AC_UL320_.jpg"
            price={55.99}
            rating={5}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
