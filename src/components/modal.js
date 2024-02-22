import { useSelector } from "react-redux";
import ModalProductItems from "./modalProductItems";

function Modal() {
  const cardData = useSelector((data) => data.card);

  const calcTotalPrice = () => {
    let total = 0;
    Object.values(cardData.cardList).map((item) => {
      total += item.count * item.price;
    });

    return total;
  };
  return (
    <dialog id="my_modal_1" className="modal">
      <div className="modal-box text-white">
        <h3 className="font-bold text-lg">سبد شما</h3>
        {Object.values(cardData.cardList || {}).map((item) => {
          return <ModalProductItems item={item} />;
        })}
        <div>
          <h2>قیمت کل : {calcTotalPrice()}$</h2>{" "}
        </div>
        <div className="modal-action">
          <form method="dialog">
            <button className="btn">بستن</button>
          </form>
        </div>
      </div>
    </dialog>
  );
}

export default Modal;
