import React from "react";
import "./Donate.css";

export default function Donate() {
  return (
    <div className="donate">
      <div className="container">
        <div className="content">
          <h2>Empower Widows and Orphans - Support Our Cause!</h2>

          <div className="why-donate">
            <h5>1. Sponsor a house for a widow</h5>
            <h5>2. Buy a school uniform for a widow’s child</h5>
            <h5>3. Pay for boarding school fees for a year for one child</h5>
          </div>
          <div className="payment-methods">
            <div className="method payment-1">
              <h2>Bank</h2>
              <h3>COOPERATIVE BANK</h3>
              <h3>BRANK: Thika Road Mall</h3>
              <h3>KES ACCOUNT NO: 01128576645800</h3>
              <h3>USD ACCOUNT NO: 02120576645800</h3>
              <h3>SWIFT CODE: KCOOKENA</h3>
            </div>
            <div className="method payment-2">
              <h2>Mpesa</h2>
              <h3>PAYBILL: 4029363</h3>
              <h3>TILL NO: 669655</h3>
              <h3>PHONE NO: 0758401775</h3>
            </div>
            <div className="method payment-3">
              <h2>Paypal: </h2>
              <h3>INFO@COMETOGEWOO.ORG</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
