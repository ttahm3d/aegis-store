import { useAddress } from "../../context/address/Context";
import styles from "./Checkout.module.css";
import { loadScript } from "../utils/RazorpayLoad/LoadScript";
import AegisStoreLogo from "../../assets/AegisStore.svg";
import { useCart } from "../../context/cart";
import toast from "react-hot-toast";

export default function ({ cart, clear }) {
  const { addresses } = useAddress();
  const { total } = useCart();

  const handlePayment = async (total) => {
    const res = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"
    );

    if (!res) {
      toast.error("Failed to initiate payment, please try again.");
    }

    const options = {
      key: process.env.REACT_APP_RAZORPAY_TEST_ID,
      amount: total * 100,
      currency: "INR",
      name: "Aegis Store",
      description: "Payment for your order",
      image: { AegisStoreLogo },
      handler: function (response) {
        const order = {
          paymentId: response?.razorpay_payment_id,
          amountPaid: total,
          orderedProducts: [...cart],
          deliveryAddress: addresses[0],
        };
        clear();
      },
      theme: {
        color: "#1890ff",
      },
    };
    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  };

  return (
    <div>
      {addresses.map((address) => (
        <div className={styles.address} key={address.name}>
          <div className={styles.address__name}>{address?.name}</div>
          <div className={styles.address__line}>{address?.addressLine1}</div>
          <div className={styles.address__line}>{address?.addressLine2}</div>
          <div className={styles.address__line}>{address?.city}</div>
          <div className={styles.address__line}>{address?.pincode}</div>
        </div>
      ))}
      <div>
        <div
          className="btn btn-primary text-center m-y-1"
          onClick={() => handlePayment(total)}>
          Pay {total}
        </div>
      </div>
    </div>
  );
}
