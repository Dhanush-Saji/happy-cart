import React from "react";
import "./FeaturesInfo.css";
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
const FeaturesInfo = () => {
  return (
    <div className="features">
      <div className="feature">
        <div className="featuresIcon">
            <AccountBalanceWalletIcon className="featureIconExact" />
        </div>
        <div className="featureText">
          <div className="featureTitle">Today's traffic</div>
          <div className="featureMoney">2000</div>
        </div>
      </div>
      <div className="feature">
        <div className="featuresIcon">
            <AccountBalanceWalletIcon className="featureIconExact" />
        </div>
        <div className="featureText">
          <div className="featureTitle">Today's traffic</div>
          <div className="featureMoney">2000</div>
        </div>
      </div>
      <div className="feature">
        <div className="featuresIcon">
            <AccountBalanceWalletIcon className="featureIconExact" />
        </div>
        <div className="featureText">
          <div className="featureTitle">Today's traffic</div>
          <div className="featureMoney">2000</div>
        </div>
      </div>
      <div className="feature">
        <div className="featuresIcon">
            <AccountBalanceWalletIcon className="featureIconExact" />
        </div>
        <div className="featureText">
          <div className="featureTitle">Today's traffic</div>
          <div className="featureMoney">2000</div>
        </div>
      </div>
    </div>
  );
};

export default FeaturesInfo;
