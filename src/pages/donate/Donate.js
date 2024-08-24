import React from "react";
import "./Donate.css";

export default function Donate() {
  return (
    <div className="donate">
      <div className="donate-bg-image"></div>
      <div className="container">
        <div className="row">
          <div className="action-call col-lg-4">
            <h2>Empower Widows & Orphans </h2>
            <h3>Support Our Cause! </h3>
            <div>Donate Now</div>
          </div>
          <div className="col-lg-8 donate-methods">
            <div className="donate-method">
              <h2>COOPERATIVE BANK</h2>
              <p>BRANCH: Thika Road Mall</p>
              <p>
                KES ACCOUNT NO: <span>01128576645800</span>
              </p>
              <p>
                USD ACCOUNT NO:<span> 02120576645800</span>
              </p>
              <p>
                SWIFT CODE: <span>KCOOKENA</span>
              </p>
            </div>
            <div className="donate-method">
              <h2>MPESA</h2>
              <p>
                PAYBILL: <span>4029363</span>
              </p>
              <p>
                TILL NO: <span>669655</span>
              </p>
              <p>
                PHONE NO: <span>0758401775</span>
              </p>
            </div>
            <div className="donate-method">
              <h2>PAYPAL</h2>
              <p>
                <span>INFO@COMETOGEWOO.ORG</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
