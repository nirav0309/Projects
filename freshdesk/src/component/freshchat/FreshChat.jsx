import React, { useEffect } from "react";

const Freshchat = () => {
  useEffect(() => {
    // Create a script element
    const script = document.createElement("script");
    script.src = "//in.fw-cdn.com/32050902/1091469.js";
    script.async = true;
    script.onload = () => {
      if (window.Freshchat) {
        window.Freshchat.init({
          chat: "true",
        });
      }
    };

    // Append the script to the document body
    document.body.appendChild(script);

    // Cleanup function to remove the script if the component is unmounted
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return null;
};

export default Freshchat;

//reachal script
{
  /* <script src="//fw-cdn.com/11952356/4511103.js" chat="true"></script>; */
}

//another script
{
  /* <script>
	window.fwSettings={
	'widget_id':153000002944
	};
	!function(){if("function"!=typeof window.FreshworksWidget){var n=function(){n.q.push(arguments)};n.q=[],window.FreshworksWidget=n}}() 
</script>
<script type='text/javascript' src='https://widget.freshworks.com/widgets/153000002944.js' async defer></script> */
}
