import React from "react";
import styles from "./Motto.module.css";

function Motto() {
  return (
    <div className={styles.mottoWrapper}>
      <div className="container">
        <hr className="py-4" />
      </div>
      <div className={`container ${styles.motto}`}>
        <div className="flex items-center justify-between flex-row xs:flex-col md:flex-row">
          <div
            className={`flex items-center justify-between ${styles.feature1}`}
          >
            <i class="uil uil-truck"></i>
            <div className="flex items-start justify-between flex-col">
              <label className="font-semibold text-2xl text-gray-900">
                Free Shipping
              </label>
              <label className="font-semibold text-lg text-gray-500">
                Order $100+
              </label>
            </div>
          </div>
          <div
            className={`flex items-center justify-between ${styles.feature2}`}
          >
            <i class="uil uil-dollar-alt"></i>
            <div className="flex items-start justify-between    flex-col">
              <label className="font-semibold text-2xl text-gray-900">
                Money Back
              </label>

              <label className="font-semibold text-lg text-gray-500">
                Within 90 days
              </label>
            </div>
          </div>
          <div
            className={`flex items-center justify-between ${styles.feature3}`}
          >
            <i class="uil uil-comments-alt"></i>
            <div className="flex items-start justify-between    flex-col">
              <label className="font-semibold text-2xl text-gray-900">
                Support
              </label>

              <label className="font-semibold text-lg text-gray-500">
                24/7 Support
              </label>
            </div>
          </div>
          <div
            className={`flex items-center justify-between ${styles.feature4}`}
          >
            <i class="uil uil-credit-card-search"></i>
            <div className="flex items-start justify-between    flex-col">
              <label className="font-semibold text-2xl text-gray-900">
                Secure Payment
              </label>

              <label className="font-semibold text-lg text-gray-500">
                Flawless Support
              </label>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div classname="flex items-center justify-between">
          <div className={styles.socialArea}></div>
          <div className={styles.newsletter}></div>
        </div>
      </div>
    </div>
  );
}

export default Motto;
