export default class Api {
  static requestLogin(url, body, cb) {
    const requestOptions = {
      method: "POST",
      mode: "cors",
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "multipart/form-data"
      },
      body: JSON.stringify(body)
    };

    fetch(url, requestOptions)
      .then(res => res.json())
      .then(cb)
      .catch(cb);
  }
}