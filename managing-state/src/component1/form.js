import { useState } from "react";

const MyForm = () => {
  const [ans, setAns] = useState("");
  const [err, setErr] = useState(null);
  const [status, setStatus] = useState("typing"); // 'typing', 'submitting', 'success'

  if (status === "success") {
    return <p style={{ color: "green" }}>Correct Answer </p>;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("submitting");
    setStatus('sending');
    try {
      await submitForm(ans);
      setStatus("success");
    } catch (err) {
      setStatus("typing");
      setErr(err);
    }
  };
  const isSending = status === 'sending';
  return (
    <>
      <form onSubmit={handleSubmit}>
        <textarea
          value={ans}
          disabled={status === "submitting"}
          onChange={(e) => setAns(e.target.value)}
        />
        <br />
        <button disabled={ans.length === 0 || status === "submitting"}>
          Submit
        </button>
        {err !== null && <p className="xyz">{err.message}</p>}
        {/* {err !== null } */}
        {isSending && <p>Sending...</p>}
      </form>
    </>
  );
};

const submitForm = (ans) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let FinalAns = ans === "delhi";
      if (FinalAns) {
        resolve();
      } else {
        reject(new Error("Wrong Answer, Try Again!"));
      }
    }, 1000);
  });
};

// const submitForm = async (ans) => {
//     try {
//         const res = await new Promise((resolve, reject) => {
//             setTimeout(() => {
//                 let FinalAns = ans === "delhi";
//                 if (FinalAns) {
//                     resolve();
//                 } else {
//                     reject(new Error("Wrong Answer, Try Again!"));
//                 }
//             }, 1500);

//         });
//         console.log(res);
//     } catch (e) {
//         console.log(e.message);
//     }
//   };

export { MyForm };
