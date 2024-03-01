import { HeaderContainer } from "./styles";
import Logo from "../../assets/Logo.svg";
import { MapPin,ShoppingCart } from "phosphor-react";
export function Header() {
  return (
    <HeaderContainer>
      <img src={Logo} />
      <div className='container'>
        <span>
          <MapPin size={22} weight="fill" />
          Porto Alegre, RS
        </span>
        <button>
          <ShoppingCart size={22} weight='fill'/>
        </button>
      </div>
    </HeaderContainer>
  );
}
