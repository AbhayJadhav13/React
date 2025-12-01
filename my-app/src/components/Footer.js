import React from "react";
import { useSelector } from "react-redux";
export default function Footer() {
  const brandName = useSelector((state) => state.datatransfer.brand);
  return (
    <>
      <footer className="footer">
        <p>
          @react-Abhay : All rights reserved.
          {brandName}
        </p>
      </footer>
    </>
  );
}
