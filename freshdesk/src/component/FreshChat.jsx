import React, { useEffect } from "react";
import { widget } from "react-freshchat";

const FreshchatIntegration = () => {
  useEffect(() => {
    widget = widget || {};
    widget.init({
      token: "fa5ad5f8-83be-4401-addd-f75b8cd84e53",
      host: "https://wchat.freshchat.com",
    });
  }, []);

  return null;
};

export default FreshchatIntegration;
