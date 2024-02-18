let [toastState, setToastState] = useState(false);
let [toastAnimation, setToastAnimation] = useState("toast-alert");

function checkInputValues() {
  if(inputData.userName === "") {
    setUserInputScreen(0);
    setToastState(true);
    return false;
  }
  return true;
}

{
  toastState === true ? (
    <ToastNotification setToastState={setToastState} />
  ) : null
}