export default function swDev() {
  let swUrl = `${process.env.PUBLIC_URL}/serviceWorker.js`;
  navigator.serviceWorker.register(swUrl).then((response) => {
    // console.log("resposne", response);
  });
}
