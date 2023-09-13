import { useState } from "react";
import { Button, TextField } from ".";
import { contact } from "../api";
import { toast } from "react-toastify";

export const Submit = () => {
  const [submiting, setSubmiting] = useState(false);
  const [reseting, setReseting] = useState(false);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const handleReset = () => {
    setReseting(true);
    setFullName("");
    setEmail("");
    setSubject("");
    setPhone("");
    setMessage("");
    setReseting(false);
  };

  const handleSubmit = () => {
    setSubmiting(true);
    contact(fullName, email, phone, subject, message)
      .badRequest(() => toast("Niepoprawne dane", { type: "error" }))
      .res(() =>
        toast("Dziękujemy za wysłanie wiadomości", { type: "success" })
      )
      .finally(() => setSubmiting(false));
  };
  return (
    <div>
      <div className="flex flex-col">
        <TextField
          inputProps={{
            value: fullName,
            onChange: (e) => setFullName(e.target.value),
          }}
          label="Imię i nazwisko"
          className="w-[690px] mt-[50px] ml-[161px]"
          required={true}
        />
        <div className="flex flex-row">
          <TextField
            inputProps={{
              value: email,
              onChange: (e) => setEmail(e.target.value),
            }}
            label="Email"
            className="w-[337px] mt-[51px] ml-[162px]"
            required={true}
          />
          <TextField
            inputProps={{
              value: phone,
              onChange: (e) => setPhone(e.target.value),
            }}
            label="Telefon"
            className="w-[337px] mt-[51px] ml-[15px]"
          />
        </div>
        <TextField
          inputProps={{
            value: subject,
            onChange: (e) => setSubject(e.target.value),
          }}
          label="Temat"
          className="w-[690px] mt-[51px] ml-[161px]"
          required={true}
        />
        <TextField
          inputProps={{
            value: message,
            onChange: (e) => setMessage(e.target.value),
          }}
          label="Wiadomość"
          className="w-[690px] h-[123px] mt-[41px] ml-[161px]"
        />
      </div>
      ;
      <div className="flex flex-row mt-[41px] mb-[113px] justify-center">
        <Button variant="text" disabled={reseting} onClick={handleReset}>
          Reset
        </Button>
        <Button disabled={submiting} onClick={handleSubmit}>
          Dodaj
        </Button>
      </div>
      ;
    </div>
  );
};
