import {
  ProductContainer,
  PriceContainer,
  ShoppingContainer,
  QuantityContainer,
} from "./styles";
import { ShoppingCart,Plus,Minus } from "phosphor-react";
import ExpressoCremoso from "../../../../assets/ExpressoCremoso.svg";
export function Product() {
  return (
    <div>
      <ProductContainer>
        <img src={ExpressoCremoso} alt="" />
        <span>Tradicional</span>
        <h2>Expresso Cremoso</h2>
        <p>Café expresso tradicional com espuma cremosa</p>
        <PriceContainer>
          <h3>
            R$ <strong>9.90</strong>
          </h3>
          <ShoppingContainer>
            <QuantityContainer>
              <button>
                <Minus size={14}/>
              </button>
              <span>1</span>
              <button>
                <Plus size={14}/>
              </button>
            </QuantityContainer>
            <button>
              <ShoppingCart weight="fill" />
            </button>
          </ShoppingContainer>
        </PriceContainer>
      </ProductContainer>
    </div>
  );
}
