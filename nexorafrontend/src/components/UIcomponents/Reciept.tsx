import { useContext } from "react";
import { ShopContext } from "../context/ShopContext";

const Reciept = () => {
  const { reciept } = useContext(ShopContext);

   
  if (!reciept) {
    return (
      <div className="flex justify-center items-center h-64 text-gray-500">
        No receipt available.
      </div>
    );
  }


  return (
    <div className="max-w-md mx-auto mt-10 bg-white shadow-lg rounded-2xl p-6 border">
      <h2 className="text-2xl font-semibold text-center text-gray-800 mb-4">
        🧾 Purchase Receipt
      </h2>

      <div className="space-y-2 text-gray-700">
        <p>
          <span className="font-medium">First Name:</span> {reciept.detail.firstName}
        </p>
        <p>
          <span className="font-medium">Last Name:</span> {reciept.detail.lastName}
        </p>
        <p>
          <span className="font-medium">Email:</span> {reciept.detail.email}
        </p>
        <p>
          <span className="font-medium">Total Amount:</span> ₹{reciept.total?.toFixed(2)}
        </p>
        <p>
          <span className="font-medium">Date & Time:</span>{" "}
          {new Date(reciept.timestamp).toLocaleString()}
        </p>
      </div>

      <div className="mt-6 border-t pt-4 text-center text-sm text-gray-500">
        Thank you for shopping with us! 💚
      </div>
    </div>
  );
};

export default Reciept;
