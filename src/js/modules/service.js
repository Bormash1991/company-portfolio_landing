class Service {
  _apiBase = "http://localhost:3000";

  sendData = async (url, data) => {
    const res = await fetch(`${this._apiBase}${url}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: data,
    });
    if (!res.ok) {
      throw Error("Could not fetch ${res.url}, status: ${res.status}");
    }
    return res.text();
  };
  sendForms = async (data) => {
    return await this.sendData("/forms/", data);
  };
  sendEmail = async (data) => {
    return await this.sendData("/subscribe/", data);
  };
}
export default Service;
