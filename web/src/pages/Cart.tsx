import { useService } from "@xstate/react";
import React, { useContext } from "react";
import { MachineContext } from "../MachineContext";
import ListHeader from "../atoms/ListHeader";
import NavigationButton from "../atoms/NavigationButton";
import { Rest, Name, Row } from "../atoms/Row";
import CartList from "../organisms/CartList";
import Delivery from "../organisms/Delivery";
import Discount from "../organisms/Discount";
import TotalRow from "../molecules/TotalRow";
import Container from "../templates/Container";

const Cart = (): JSX.Element => {
  const machine = useContext(MachineContext);
  const [, send] = useService(machine);

  const handleNextNavigation = () => {
    send("CART_COMPLETED");
  };

  return (
    <Container>
      <ListHeader>Koszyk:</ListHeader>
      <CartList />
      <Discount />
      <Delivery />
      <TotalRow />
      <Row>
        <Name>
          <NavigationButton to="/">{"<<"} Lista produktów </NavigationButton>
        </Name>
        <Rest>
          <NavigationButton to="/address" onClick={handleNextNavigation}>
            Adres {">>"}
          </NavigationButton>
        </Rest>
      </Row>
    </Container>
  );
};

export default Cart;
