import React from "react";
import {
  Card,
  Input,
  AutoComplete,
  Menu,
  Dropdown,
  Button,
  message
} from "antd";

const menu = (
  <Menu onClick={handleMenuClick}>
    <Menu.Item key="1">Dania Wegetariańskie</Menu.Item>
    <Menu.Item key="2">Desery</Menu.Item>
    <Menu.Item key="3">Dania Mięsne</Menu.Item>
  </Menu>
);

function handleMenuClick(e) {
  message.info("Click on menu item.");
  console.log("click", e);
}

const Oferta = () => {
  return (
    <section class="component-search">
      <AutoComplete className="autocomplete">
        <Input.Search size="large" placeholder="input here" enterButton />
      </AutoComplete>
      <Dropdown overlay={menu}>
        <Button className="component-filter">Filtrowanie</Button>
      </Dropdown>
      <section className="oferta">
        <a className="menu-oferta" href="/oferta#oferta-dostepna">
          Oferta dostepna
        </a>
        <a className="menu-oferta" href="/oferta#oferta-na-jutro">
          Zamów na jutro
        </a>
        <a className="menu-oferta" href="/">
          [X] Zamknij
        </a>
        <section id="oferta-dostepna">
          <h1>Na dzisiaj</h1>
          <Card className="card" title="Zupa pomidorowa">
            <h1>
              Cena: <i>10 pln</i>
            </h1>
            <p>Opis: Zupa pomirdowa z makaronem</p>
            <p>Skład: pomidory, makaron, woda</p>

            <label for="ilosc">Ilosc:</label>
            <input id="ilosc" type="number" value="0" />
            <input type="button" value="zamow" />
            <a href="/sklad/1">skład</a>
          </Card>
        </section>
        <section id="oferta-na-jutro">
          <h1>Na jutro</h1>
          <Card className="card" title="Zupa ogórkowa">
            <h1>
              Cena: <i>10 pln</i>
            </h1>
            <p>Opis: Zupa ogórkowa z makaronem</p>
            <p>Skład: ogórki, marchewka, woda</p>

            <label for="ilosc">Ilosc:</label>
            <input id="ilosc" type="number" value="0" />
            <input type="button" value="zamow" />
            <a href="/sklad/1">skład</a>
          </Card>
        </section>
      </section>
    </section>
  );
};

export default Oferta;
