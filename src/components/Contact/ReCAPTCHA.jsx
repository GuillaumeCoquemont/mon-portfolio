import ReCAPTCHA from "react-google-recaptcha";

export default function MyReCAPTCHA({ onChange }) {
  return (
    <ReCAPTCHA
      sitekey={import.meta.env.VITE_RECAPTCHA_SITE_KEY}
      onChange={onChange}
    />
  );
}