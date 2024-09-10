import "./App.css";
import FreshChat from "react-freshchat";
import MainComponent from "./component/MainComponent";
import ChatFaqWidget from "./component/widget/MyWidget";
import Freshchat from "./component/freshchat/FreshChat";
// import FreshdeskWidget from "@personare/react-freshdesk-widget";

function App() {
  return (
    <div className="App">
      {/* new token-------------- */}
      {/* <FreshChat token="5df26417-e127-480b-a0ff-d21908f5030f" host= "https://wchat.eu.freshchat.com"></FreshChat> */}
      {/* <MainComponent /> */}

      {/* old token --------------- */}
      {/* <FreshChat token="fa5ad5f8-83be-4401-addd-f75b8cd84e53" /> */}

      {/* freshdesk-------------- */}
      {/* <FreshdeskWidget url="https://support.freshdesk.com" type="pop-up">
        <button >Send Feedback</button>
      </FreshdeskWidget> */}

      {/* <ChatFaqWidget /> */}

      <h1>React FreshChat</h1>
      <Freshchat token="5020d6af-6b9d-4fac-91fd-066c42235a82" />
    </div>
  );
}

export default App;

// //external freshchat
// import React from "react";
// import FreshChat from "react-freshchat";

// const App = () => {
//   const handleInit = (widget) => {
//     // Use `widget` to set user properties
//     widget.user.setProperties({
//       email: "user@example.com",
//       first_name: "User",
//       // ... other user properties
//       config: {
//         headerProperty: {
//           //If you have multiple sites you can use the appName and appLogo to overwrite the values.
//           appName: "Gadget God",
//           appLogo:
//             "https://d1qb2nb5cznatu.cloudfront.net/startups/i/2473-2c38490d8e4c91660d86ff54ba5391ea-medium_jpg.jpg?buster=1518574527",
//         },
//         content: {
//           placeholders: {
//             search_field: "Search",
//             reply_field: "Reply",
//             csat_reply: "Add your comments here",
//           },
//           actions: {
//             csat_yes: "Yes",
//             csat_no: "No",
//             push_notify_yes: "Yes",
//             push_notify_no: "No",
//             csat_submit: "Submit",
//           },
//           headers: {
//             chat: "Chat with Us",
//             faq: "Solution Articles",
//             faq_search_not_available: "No articles were found for {{query}}",
//             faq_useful: "Was this article helpful?",
//             faq_thankyou: "Thank you for your feedback",
//             faq_message_us: "Message Us",
//             push_notification:
//               "Don't miss out on any replies! Allow push notifications?",
//             csat_question: "Did we address your concerns??",
//             csat_yes_question: "How would you rate this interaction?",
//             csat_no_question: "How could we have helped better?",
//             csat_thankyou: "Thanks for the response",
//             csat_rate_here: "Submit your rating here",
//             channel_response: {
//               offline: "We are currently away. Please leave us a message",
//               online: {
//                 minutes: {
//                   one: "Currently replying in {!time!} minutes ",
//                   more: "Typically replies in {!time!} minutes",
//                 },
//                 hours: {
//                   one: "Currently replying in under an hour",
//                   more: "Typically replies in {!time!} hours",
//                 },
//               },
//             },
//           },
//         },
//       },
//     });
//   };

//   return (
//     <div>
//       <FreshChat
//         // token="fa5ad5f8-83be-4401-addd-f75b8cd84e53"
//         token="6bc903d6-12ba-11eb-adc1-0242ac120002"
//         email="user@example.com"
//         first_name="User"
//         onInit={handleInit}
//         open={true}
//       />
//     </div>
//   );
// };

// export default App;
